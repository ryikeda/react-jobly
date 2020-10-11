import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import JoblyApi from "../JoblyApi";
import SearchBar from "../SearchBar";
import CompanyCard from "../CompanyCard";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);
  return (
    <Container>
      <SearchBar />
      {companies.map((company) => {
        return (
          <CompanyCard
            name={company.name}
            description={company.description}
            handle={company.handle}
            logo_url={company.logo_url}
            key={company.handle}
          />
        );
      })}
    </Container>
  );
};

export default Companies;
