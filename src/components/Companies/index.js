import React from "react";
import { Container } from "@material-ui/core";

import SearchBar from "../SearchBar";
import CompanyCard from "../CompanyCard";

const Companies = () => {
  return (
    <Container>
      <SearchBar />
      <CompanyCard
        name="Company Name"
        description="This is the company description"
      />
      <CompanyCard
        name="Company Name"
        description="This is the company description"
      />
      <CompanyCard
        name="Company Name"
        description="This is the company description"
      />
      <CompanyCard
        name="Company Name"
        description="This is the company description"
      />
      <CompanyCard
        name="Company Name"
        description="This is the company description"
      />
      <CompanyCard
        name="Company Name"
        description="This is the company description"
      />
    </Container>
  );
};

export default Companies;
