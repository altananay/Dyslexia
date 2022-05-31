import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./scss/Home.scss";
import Navbar from "./Navbar";
import WidgetUser from "./WidgetUser";
import Featured from "./Featured";
import Chart from "./Chart";
import ListTable from "./ListTable";
import "./scss/Dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { ToastContainer } from "react-toastify";
import NotFound from "../pages/NotFound";

const AdminPanel = ({ admin, setAdmin }) => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (localStorage.getItem("admin") && !admin) {
      setAdmin(JSON.parse(localStorage.getItem("admin")));
    }
  }, [admin]);

  return (
   <div><ToastContainer position="bottom-right"></ToastContainer>
      {admin ? (
        <div className="home App">
          <Sidebar admin={admin} setAdmin={admin}></Sidebar>
          <div className="homeContainer">
            <Navbar></Navbar>
            <div className="widgets">
              <WidgetUser></WidgetUser>
            </div>
            <div className="charts">
              <Featured></Featured>
              <Chart></Chart>
            </div>
            <div className="listContainer">
              <div className="listTable">Latest Transactions</div>
              <ListTable></ListTable>
            </div>
          </div>
        </div>
      ) : (
        <NotFound></NotFound>
      )}</div>
      
  );
};

export default AdminPanel;
