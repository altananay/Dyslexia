import React from 'react'
import Sidebar from './Sidebar'
import "./scss/Home.scss"
import Navbar from './Navbar'
import Widget from './Widget'
import Featured from './Featured'
import Chart from './Chart'
import ListTable from './ListTable'
import "./scss/Dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

const AdminPanel = () => {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "home App dark" : "home App"}>
      <Sidebar></Sidebar>
      <div className="homeContainer">
        <Navbar></Navbar>
        <div className="widgets">
          <Widget type="user"></Widget>
          <Widget type="order"></Widget>
          <Widget type="earning"></Widget>
          <Widget type="balance"></Widget>
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
  )
}

export default AdminPanel