import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
    textAlign: "left",
  },
}));

const JobCard = ({ job, apply }) => {
  const classes = useStyles();
  const handleApply = () => {
    if (!apply) return null;
    return apply(id);
  };
  const { title, salary, equity, id, state } = job;

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
            {state ? (
              <Button variant="contained">Applied</Button>
            ) : (
              <Button variant="contained" onClick={handleApply}>
                Apply
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default JobCard;
