import React from "react";
import "./scss/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Bizleksi</span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to="/admin" style={{textDecoration: "none"}}>
            <li>
              <DashboardIcon className="icon"></DashboardIcon>
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Lists</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonIcon className="icon"></PersonIcon>
              <span>Users</span>
            </li>
          </Link>
          <li>
            <ProductionQuantityLimitsIcon className="icon"></ProductionQuantityLimitsIcon>
            <span>Products</span>
          </li>
          <li>
            <CreditScoreIcon className="icon"></CreditScoreIcon>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"></LocalShippingIcon>
            <span>Delivery</span>
          </li>
          <p className="title">Usefull</p>
          <li>
            <QueryStatsIcon className="icon"></QueryStatsIcon>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className="icon"></NotificationsIcon>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <HealthAndSafetyIcon className="icon"></HealthAndSafetyIcon>
            <span>System Health</span>
          </li>
          <li>
            <PlaylistAddCheckCircleIcon className="icon"></PlaylistAddCheckCircleIcon>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"></SettingsIcon>
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleIcon className="icon"></AccountCircleIcon>
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon"></LogoutIcon>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default Sidebar;