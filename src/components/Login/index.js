import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import { makeStyles } from "@material-ui/core/styles";
import JoblyApi from "../JoblyApi";

function Copyright() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <NavLink to="/" className={classes.navLink}>
          Jobly
        </NavLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Box p={3}>
        <Typography variant="p">
          feel free to use this credentials to login
          <br />
          username: <b>user</b> password:
          <b> user123456</b>
        </Typography>
      </Box>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  navLink: {
    textDecoration: "none",
  },
}));

const Login = ({ setToken }) => {
  const { currUser } = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: [],
  });
  if (currUser) {
    history.push("/");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await JoblyApi.login(formData);
      setToken(token);
      history.push("/jobs");
    } catch (errors) {
      return setFormData((data) => ({ ...data, errors }));
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box m={3}>
          {formData.errors.length ? (
            <Alert variant="outlined" severity="error">
              {formData.errors.map((e) => e)}
            </Alert>
          ) : null}
        </Box>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            autoComplete="username"
            value={formData.username}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
          >
            Sign In
          </Button>
          <NavLink to="/signup" className={classes.navLink}>
            "Don't have an account? Sign Up"
          </NavLink>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
