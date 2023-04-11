// src/context/AuthContext.js
import React, { createContext, useState } from "react";
import axios from "axios";
import API from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  const login = async (email, password) => {
    const response = await axios.post(`${API}/api/login`, {
      email,
      password,
    });
    console.log(response.data.token);
    localStorage.setItem("token", response.data.token);
    if (localStorage.getItem(token)) {
      setIsAuthenticated(true);
      console.log(isAuthenticated);
      window.location.href = "/";
    }
    // if (response.status == 200) {
    //   const data = response.data;
    //   console.log(isAuthenticated);
    //   setIsAuthenticated(true);
    //   console.log(isAuthenticated);
    //   setToken(data.token);
    //   window.location.href = "/";
    // } else {
    //   console.log("error within");
    // }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken("");
  };

  const authValue = {
    isAuthenticated,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
