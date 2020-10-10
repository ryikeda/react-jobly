import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Jobly</NavLink>

        <ul>
          <li>
            <NavLink to="/companies">Companies</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
