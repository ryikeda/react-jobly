import React from "react";
import { Box, Typography } from "@material-ui/core";
import CompanyCard from "../CompanyCard";

const CompaniesList = ({ companies }) => {
  return companies.length ? (
    companies.map((company) => {
      return (
        <CompanyCard
          name={company.name}
          description={company.description}
          handle={company.handle}
          logo_url={null}
          key={company.handle}
        />
      );
    })
  ) : (
    <Box m={3}>
      <Typography variant="h6">No results were found!</Typography>
    </Box>
  );
};

export default CompaniesList;
