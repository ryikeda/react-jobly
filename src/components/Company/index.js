import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../UserContext";

import { Container, Typography, Grid } from "@material-ui/core";
import JobCard from "../JobCard";
import JoblyApi from "../JoblyApi";

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);
  const { currUser } = useContext(UserContext);

  useEffect(() => {
    async function getCompany() {
      const { jobs } = currUser;
      const company = await JoblyApi.getCompany(handle);

      const appliedJobs = new Set(jobs.map((job) => job.id));

      company.jobs = company.jobs.map((job) => ({
        ...job,
        state: appliedJobs.has(job.id) ? "applied" : null,
      }));
      setCompany(company);
    }
    getCompany();
  }, [handle, currUser]);

  const apply = async (jobId) => {
    let result = await JoblyApi.applyToJob(jobId);
    setCompany((company) => {
      let newCompany = { ...company };
      newCompany.jobs = newCompany.jobs.map((job) =>
        job.id === jobId ? { ...job, state: result } : job
      );
      return newCompany;
    });
  };

  if (!company) {
    return <div>Loading....</div>;
  }

  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h6" component="p">
            {company.name}
          </Typography>
          <Typography variant="body2" component="p">
            {company.description}
          </Typography>
        </Grid>
      </Grid>
      {company.jobs.map((job) => {
        return <JobCard job={job} apply={apply} key={job.id} />;
      })}
    </Container>
  );
};

export default Company;
