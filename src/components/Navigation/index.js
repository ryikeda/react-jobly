import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  offset: theme.mixins.toolbar,
  navLink: {
    textDecoration: "none",
    color: "white",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" className={classes.navLink}>
              Jobly
            </NavLink>
          </Typography>
          <ButtonGroup>
            <Button>
              <NavLink to="/companies" className={classes.navLink}>
                Companies
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/jobs" className={classes.navLink}>
                Jobs
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/profile" className={classes.navLink}>
                Profile
              </NavLink>
            </Button>
            <Button>
              <NavLink to="/logout" className={classes.navLink}>
                Logout
              </NavLink>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

export default NavBar;
