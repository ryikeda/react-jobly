import React from "react";
import { Container } from "@material-ui/core";

import SearchBar from "../SearchBar";
import JobCard from "../JobCard";

const Jobs = () => {
  return (
    <Container>
      <SearchBar />
      <JobCard title="Job title" salary="130000" equity="0.02" state="NY" />
      <JobCard title="Job title" salary="130000" equity="0.02" state="NY" />
      <JobCard title="Job title" salary="130000" equity="0.02" state="NY" />
      <JobCard title="Job title" salary="130000" equity="0.02" state="NY" />
      <JobCard title="Job title" salary="130000" equity="0.02" state="NY" />
    </Container>
  );
};

export default Jobs;
