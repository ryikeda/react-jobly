import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Companies from "../Companies";
import Jobs from "../Jobs";
import Profile from "../Profile";
import Logout from "../Logout";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/companies">
        <Companies />
      </Route>
      <Route exact path="/companies/:company">
        <Companies />
      </Route>
      <Route exact path="/jobs">
        <Jobs />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
    </Switch>
  );
};

export default Routes;
