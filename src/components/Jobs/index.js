import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import SearchBar from "../SearchBar";
import JobCard from "../JobCard";
import JoblyApi from "../JoblyApi";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  const handleSearch = async (searchTerm) => {
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
  };

  const apply = async (jobId) => {
    let result = await JoblyApi.applyToJob(jobId);
    setJobs((job) =>
      job.map((job) => (job.id === jobId ? { ...job, state: result } : job))
    );
  };

  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      {jobs.map((job) => {
        return <JobCard job={job} apply={apply} />;
      })}
    </Container>
  );
};

export default Jobs;
