import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./Accounts.css";
import CreateAirports from "../Airports/CreateAirPorts/CreateAirports";
import GetAirPorts from "../Airports/GetAirports/GetAirport";
import HomePage from "../Home/HomePage";
import { ToastProvider } from "react-toast-notifications";

function Account() {
  return (
    <div>
      <ToastProvider>
        <Switch>
          <Route exact path="/create-airports" component={CreateAirports} />
          <Route exact path="/get-airports" component={GetAirPorts} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </ToastProvider>
    </div>
  );
}

export default Account;
