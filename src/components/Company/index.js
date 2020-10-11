import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Typography, Grid } from "@material-ui/core";
import JobCard from "../JobCard";
import JoblyApi from "../JoblyApi";

const Company = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    getCompany();
  }, [handle]);

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
        return (
          <JobCard
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            key={job.id}
          />
        );
      })}
    </Container>
  );
};

export default Company;
