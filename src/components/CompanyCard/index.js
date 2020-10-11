import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Avatar, Grid } from "@material-ui/core";

import BusinessIcon from "@material-ui/icons/Business";

const useStyles = makeStyles((theme) => ({
  card: {
    cursor: "pointer",
    margin: theme.spacing(2),
    textAlign: "left",
  },
  navLink: {
    textDecoration: "none",
  },
}));

const CompanyCard = ({ name, description, logo_url, handle = "/" }) => {
  const classes = useStyles();

  return (
    <NavLink to={handle} className={classes.navLink}>
      <Card variant="outlined" className={classes.card}>
        <CardContent>
          <Grid container alignItems="center">
            <Grid item xs={11}>
              <Typography variant="h6" component="p">
                {name}
              </Typography>
              <Typography variant="body2" component="p">
                {description}
              </Typography>
            </Grid>
            <Grid item container justify="center" xs={1}>
              <Avatar variant="square" src={logo_url}>
                <BusinessIcon />
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </NavLink>
  );
};

export default CompanyCard;
