import React from "react";
import "./scss/Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PlaylistAddCheckCircleIcon from "@mui/icons-material/PlaylistAddCheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MessageIcon from "@mui/icons-material/Message";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function Sidebar({ admin, setAdmin }) {
  const { dispatch } = useContext(DarkModeContext);

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <ToastContainer position="bottom-right"></ToastContainer>
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Bizleksi</span>
        </Link>
      </div>
      <hr className="cizgi"></hr>
      <div className="center">
        <ul className="liste1">
          <p className="title">Main</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li className="liste2">
              <DashboardIcon className="icon"></DashboardIcon>
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">Lists</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li className="liste2">
              <PersonIcon className="icon"></PersonIcon>
              <span>Kullanıcılar</span>
            </li>
          </Link>
          <li className="liste2">
            <Link to="/admin/messages" style={{ textDecoration: "none" }}>
              <MessageIcon className="icon"></MessageIcon>
              <span>Mesajlar</span>
            </Link>
          </li>
          <li className="liste2">
            <Link
              to="/admin/vinegradtestresults"
              style={{ textDecoration: "none" }}
            >
              <CreditScoreIcon className="icon"></CreditScoreIcon>
              <span>Test Sonuçları</span>
            </Link>
          </li>
          <p className="title">Usefull</p>
          <li className="liste2">
            <QueryStatsIcon className="icon"></QueryStatsIcon>
            <span>Stats</span>
          </li>
          <li className="liste2">
            <NotificationsIcon className="icon"></NotificationsIcon>
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li className="liste2">
            <Link to="/admin/signup" style={{ textDecoration: "none" }}>
              <PersonIcon className="icon"></PersonIcon>
              <span>Admin Ekle</span>
            </Link>
          </li>
          <li className="liste2">
            <PlaylistAddCheckCircleIcon className="icon"></PlaylistAddCheckCircleIcon>
            <span>Logs</span>
          </li>
          <li className="liste2">
            <Link to="/admin/userpasswords" style={{ textDecoration: "none" }}>
              <SettingsIcon className="icon"></SettingsIcon>
              <span>Kullanıcı Şifreleri</span>
            </Link>
          </li>
          <p className="title">User</p>
          <li className="liste2">
            <AccountCircleIcon className="icon"></AccountCircleIcon>
            <span>Profile</span>
          </li>
          <li
            className="liste2"
            onClick={() => {
              localStorage.removeItem("admin");
              toast.success("çıkış yapıldı.");
              navigate("/");
            }}
          >
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
