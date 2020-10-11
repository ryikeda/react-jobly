import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    textAlign: "left",
  },
}));

const JobCard = ({ title, salary, equity, company_handle }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <Typography variant="h6" component="p">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              Salary: {salary}
            </Typography>
            <Typography variant="body2" component="p">
              Equity: {equity}
            </Typography>
          </Grid>
          <Grid item container justify="center" xs={2}>
            <Button>Apply</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
