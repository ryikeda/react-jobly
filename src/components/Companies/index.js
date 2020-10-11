import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";

import JoblyApi from "../JoblyApi";
import SearchBar from "../SearchBar";
import CompaniesList from "../CompaniesList";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompanies();
  }, []);

  const handleSearch = async (searchTerm) => {
    const companies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(companies);
  };
  return (
    <Container>
      <SearchBar handleSearch={handleSearch} />
      <CompaniesList companies={companies} />
    </Container>
  );
};

export default Companies;
