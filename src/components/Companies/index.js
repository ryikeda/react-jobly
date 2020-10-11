import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardHeader,
} from "@material-ui/core";

import BusinessIcon from "@material-ui/icons/Business";
import { makeStyles } from "@material-ui/core/styles";

import SearchBar from "../SearchBar";

const useStyles = makeStyles((theme) => ({}));

const Companies = () => {
  const classes = useStyles();
  return (
    <Container>
      <SearchBar />
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <BusinessIcon />
            </IconButton>
          }
          title="Company Name"
        />
        <CardContent>
          <Typography variant="body2" component="p">
            Company descriptionacnlasncklanscknslkncalknc
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Companies;
