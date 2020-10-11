import React from "react";

import { Container, Typography, Grid, Avatar } from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";
import JobCard from "../JobCard";

const Company = ({ name, description }) => {
  return (
    <Container>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h6" component="p">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Grid>
      </Grid>
      <JobCard salary="90000" equity="0.1" state="MI" />
      <JobCard salary="90000" equity="0.1" state="MI" />
      <JobCard salary="90000" equity="0.1" state="MI" />
      <JobCard salary="90000" equity="0.1" state="MI" />
      <JobCard salary="90000" equity="0.1" state="MI" />
    </Container>
  );
};

export default Company;
