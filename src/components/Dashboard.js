import React from "react";
import SideBar from "./sidebar/Sidebar";
import Account from "./Accounts/account";
import Navbar from "./navbar/Navbar";
import { Route } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", backgroundColor: "#F6F5FB" }}>
      <SideBar style={{ width: "30%" }} />

      <div style={{ width: "100%" }}>
        <Navbar />

        <Route path="/" component={Account} />
      </div>
    </div>
  );
};
export default Dashboard;
