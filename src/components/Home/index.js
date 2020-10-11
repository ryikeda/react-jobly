import React, { useContext } from "react";
import { Button, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";

const Home = () => {
  const { currUser } = useContext(UserContext);
  const loggedIn = () => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item>
          <Typography variant="h3">Jobly</Typography>
          <Typography variant="h6">
            All the jobs in one, convenient place.
          </Typography>
          <Typography variant="h4">Welcome Back!</Typography>
        </Grid>
      </Grid>
    );
  };
  const loggedOut = () => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item>
          <Typography variant="h3">Jobly</Typography>
          <Typography variant="h6">
            All the jobs in one, convenient place.
          </Typography>
          <br />
          <Button color="primary" variant="contained">
            <Link to="login" style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </Button>
        </Grid>
      </Grid>
    );
  };

  return currUser ? loggedIn() : loggedOut();
};

export default Home;
