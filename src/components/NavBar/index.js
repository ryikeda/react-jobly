import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  ButtonGroup,
  Typography,
  IconButton,
  Button,
  Grid,
  MenuItem,
  Menu,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: "none",
    color: "white",
  },
  navLinkMenu: {
    textDecoration: "none",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <Typography variant="h6" className={classes.title}>
              Jobly
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <ButtonGroup className={classes.buttonGroup}>
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
            </ButtonGroup>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to="/profile" className={classes.navLinkMenu}>
                  Profile
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink to="/logout" className={classes.navLinkMenu}>
                  Logout
                </NavLink>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
