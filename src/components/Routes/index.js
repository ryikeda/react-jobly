import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import Companies from "../Companies";
import Company from "../Company";
import Jobs from "../Jobs";
import Profile from "../Profile";
import Login from "../Login";
import SignUp from "../Signup";
import PrivateRoute from "../PrivateRoute";

const Routes = ({ setToken }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute exact path="/companies">
        <Companies />
      </PrivateRoute>
      <PrivateRoute exact path="/companies/:handle">
        <Company
          name="Company Name"
          description="This is the company description"
        />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <Jobs />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>
      <Route exact path="/login">
        <Login setToken={setToken} />
      </Route>
      <Route exact path="/signup">
        <SignUp setToken={setToken} />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
