import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { decode } from "jsonwebtoken";
import "./App.css";
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import JoblyApi from "./components/JoblyApi";
import UserContext from "./components/UserContext";
import useLocalStorage from "./components/hooks/useLocalStorage";

export const TOKEN_STORAGE_ID = "jobly-token";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE2MDI0MTAyMTF9.OtECMgY20MWrYFSDwBeYazvMkUoRwmbV-B2ELyr1P2A";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      try {
        let { username } = decode(token);
        let currUser = await JoblyApi.getCurrentUser(username);
        setCurrUser(currUser);
      } catch {
        setCurrUser(null);
      }
    }
    getCurrentUser();
  }, [token]);

  const handleLogout = () => {
    setCurrUser(null);
    setToken(null);
  };
  return (
    <Router>
      <UserContext.Provider value={{ currUser, setCurrUser }}>
        <div className="App">
          <NavBar handleLogout={handleLogout} />
          <Routes setToken={setToken} />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
