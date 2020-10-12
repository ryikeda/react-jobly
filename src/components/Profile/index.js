import React, { useState, useContext } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import UserContext from "../UserContext";
import JoblyApi from "../JoblyApi";

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
  error: {
    color: "red",
    margin: theme.spacing(2),
  },
  success: {
    color: "green",
    margin: theme.spacing(2),
  },
}));

const Profile = () => {
  const { currUser, setCurrUser } = useContext(UserContext);
  const classes = useStyles();

  const [formData, setFormData] = useState({
    first_name: currUser.first_name || "",
    last_name: currUser.last_name || "",
    email: currUser.email || "",
    photo_url: currUser.photo_url || "",
    username: currUser.username || "",
    password: "",
    errors: [],
    saveConfirmed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const profileData = {
        first_name: formData.first_name || undefined,
        last_name: formData.last_name || undefined,
        email: formData.email || undefined,
        photo_url: formData.photo_url || undefined,
        password: formData.password,
      };

      const username = formData.username;

      const updatedUser = await JoblyApi.saveProfile(username, profileData);
      console.log("UPDATED USER", updatedUser);
      setFormData((data) => ({
        ...data,
        errors: [],
        saveConfirmed: true,
        password: "",
      }));
      setCurrUser(updatedUser);
    } catch (errors) {
      setFormData((data) => ({ ...data, errors }));
    }
  }

  if (formData.saveConfirmed) {
    setTimeout(() => {
      formData.saveConfirmed = false;
    }, 2000);
  }

  return (
    <>
      <Container>
        <Typography variant="h4" className={classes.title}>
          Profile
        </Typography>
        <Box m={3}>
          {formData.errors.length ? (
            <Alert variant="outlined" severity="error">
              {formData.errors.map((e) => e)}
            </Alert>
          ) : null}
          {formData.saveConfirmed ? (
            <Alert variant="outlined" severity="success">
              User updated!
            </Alert>
          ) : null}
        </Box>
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              className={classes.inputField}
              value={formData.username}
              disabled
            ></TextField>
            <TextField
              fullWidth
              name="first_name"
              label="First Name"
              variant="outlined"
              value={formData.first_name}
              onChange={handleChange}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Photo Url"
              type="url"
              variant="outlined"
              name="photo_url"
              value={formData.photo_url}
              onChange={handleChange}
              className={classes.inputField}
            ></TextField>
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={classes.inputField}
            ></TextField>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
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

export default Profile;
