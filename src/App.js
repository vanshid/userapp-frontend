import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import LogIn from "./components/Login/Login";
import SignUp from "./components/Login/SIgnUp";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/Authentication/Privateroute";
import React, { useEffect } from "react";
import getAccessToken from "./API/getAccessToken";
import getUserDetails from "./API/Login/getUserDetails";
import moment from "moment";
import JwtDecode from "jwt-decode";
import { ToastProvider } from "react-toast-notifications";
import { useAuth } from "./context/AuthContext";
import axiosInstance from "./axiosInstance";

function App() {
  const { currentUser, setCurrentUser, loggedIn, setLoggedIn } = useAuth();

  const history = useHistory();

  const getNewAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    setLoggedIn(true);

    const accessToken = await getAccessToken(refreshToken);

    if (accessToken) {
      localStorage.setItem("bearerToken", accessToken.jwt);
    }
  };

  const loggedInAction = async () => {
    await getNewAccessToken();
    const user = await getUserDetails();
    if (user) {
      setCurrentUser(user);
    }
  };
  const checkAccessTokenExpiry = async () => {
    const jwtToken = localStorage.getItem("bearerToken");
    if (!jwtToken) return;

    const token = JwtDecode(jwtToken);
    const { exp } = token;
    const currentDateTime = moment().format("DD/MM/YYYY HH:mm:ss");
    const expiryDateTime = moment.unix(exp).format("DD/MM/YYYY HH:mm:ss");

    const diffSeonds = moment(expiryDateTime, "DD/MM/YYYY HH:mm:ss").diff(
      moment(currentDateTime, "DD/MM/YYYY HH:mm:ss"),
      "seconds"
    );

    const diffSeondsInt = parseInt(diffSeonds, 10);

    // jsut for logs ----------
    const diffMiutes = moment(expiryDateTime, "DD/MM/YYYY HH:mm:ss").diff(
      moment(currentDateTime, "DD/MM/YYYY HH:mm:ss"),
      "minutes"
    );
    console.log("access token expires in", diffMiutes, "minutes");

    if (diffSeondsInt < 900) {
      console.log("token about to expire, setting a new one");
      loggedInAction();
    }
  };

  const setupAxiosInterceptors = () => {
    // =================== auth / request  interceptors =============================

    // Add a request interceptor to add the jwt token
    axiosInstance.interceptors.request.use(
      (config) => {
        // eslint-disable-next-line no-param-reassign
        config.headers = {
          ...config.headers,
          bearer: localStorage.getItem("bearerToken")
            ? `${localStorage.getItem("bearerToken")}`
            : "",
        };
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add a response interceptor to handdle unauthorized requests
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        if (error.response || loggedIn) {
          const { status } = error.response;
          console.log("status", status);

          if (status === 403 || status === 500) {
            console.log("statsu 403");
          }
          if (status === 401) {
            console.log("ERROR", "Access Denied");
          }

          // if (status === 403    access denied     || status === 401      logout ) {
          //   setLoggedIn(false);
          //   setLoggedIn(false);
          // }
        }
        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    if (loggedIn) {
      console.log("USER LOGGED IN");
      loggedInAction();
      console.log(currentUser);
    } else {
      // No user is signed in.
      console.log("USER NOT LOGGED IN");
      setCurrentUser({});
    }
  }, [loggedIn]);

  useEffect(() => {
    setupAxiosInterceptors();
  }, []);

  useEffect(() => {
    const bearerToken = localStorage.getItem("bearerToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!bearerToken && !refreshToken) {
      redirectLogin();
    }

    if (bearerToken && refreshToken) {
      loggedInAction();
    }
  }, []);

  const redirectLogin = async () => {
    try {
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // loop to check jwt token expiry
  useEffect(() => {
    const tokenCheckInterval = setInterval(() => {
      checkAccessTokenExpiry();
    }, 15 * 1000);
    return () => {
      if (tokenCheckInterval) {
        clearInterval(tokenCheckInterval);
      }
    };
  }, []);

  window.addEventListener("storage", () => {
    if (localStorage.getItem("bearerToken") === null) {
      redirectLogin();
    }
  });

  return (
    <ToastProvider>
      <Switch>
        <Route path="/login" component={LogIn} />
        <Route path="/sign-up" component={SignUp} />
        {loggedIn && <PrivateRoute component={Dashboard} />}
      </Switch>
    </ToastProvider>
  );
}

export default App;
