import React from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  inputField: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Profiles = ({ username, firstName, lastName, email, photoUrl }) => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Typography variant="h4" className={classes.title}>
          Profile
        </Typography>

        <Container maxWidth="sm">
          <form>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              className={classes.inputField}
              value={username}
              disabled
            ></TextField>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Photo Url"
              type="url"
              variant="outlined"
              value={photoUrl}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              className={classes.inputField}
            ></TextField>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              Save Changes
            </Button>
          </form>
        </Container>
      </Container>
    </>
  );
};

export default Profiles;
