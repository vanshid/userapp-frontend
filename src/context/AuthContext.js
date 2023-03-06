import React, { useContext, useState, useEffect } from "react";
import getUserDetails from "../API/Login/getUserDetails";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
