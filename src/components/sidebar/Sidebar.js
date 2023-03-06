//import useState hook to create menu collapse state
import React, { useState } from "react";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { FiUsers, FiSettings } from "react-icons/fi";
import { RiDashboardFill, RiDashboardLine } from "react-icons/ri";
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";

const SideBar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [error, setError] = useState("");
  const { currentUser } = useAuth();
  const [tab, setTab] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      localStorage.removeItem("bearerToken");
      localStorage.removeItem("refreshToken");
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const routeCreateAirports = () => {
    history.push("/create-airports");
    setTab("Airports");
  };

  const routeViewAirports = () => {
    history.push("/get-airports");
    setTab("view");
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p style={{ fontWeight: 600 }}>Wingman Dashboard</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem
                className="dashboard-icons"
                icon={<RiDashboardFill />}
                style={{
                  backgroundColor: tab === "Dashboard" && "#eaf2ff",
                }}
              >
                <div
                  style={{ color: tab === "Dashboard" ? "#508FF4" : "#52575D" }}
                >
                  {" "}
                  Dashboard
                </div>
              </MenuItem>
              <MenuItem
                className="dashboard-icons"
                onClick={routeCreateAirports}
                icon={<RiDashboardLine />}
                style={{
                  backgroundColor: tab === "Airports" && "#eaf2ff",
                }}
              >
                <div
                  style={{ color: tab === "Airports" ? "#508FF4" : "#52575D" }}
                >
                  {" "}
                  Add Airports
                </div>
              </MenuItem>
              <MenuItem
                className="dashboard-icons"
                onClick={routeViewAirports}
                icon={<FiUsers />}
                style={{
                  backgroundColor: tab === "view" && "#eaf2ff",
                }}
              >
                <div style={{ color: tab === "view" ? "#508FF4" : "#52575D" }}>
                  {" "}
                  View
                </div>
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem
                className="dashboard-icons"
                onClick={handleLogout}
                icon={<FiLogOut />}
              >
                <div
                  style={{ color: tab === "logout" ? "#508FF4" : "#52575D" }}
                >
                  {" "}
                  Logout
                </div>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
