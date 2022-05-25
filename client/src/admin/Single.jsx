import React from 'react'
import "./scss/Single.scss"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Chart from "./Chart"
import ListTable from './ListTable'

function Single() {
  return (
    <div className='single'>
      <Sidebar></Sidebar>
      <div className="singleContainer">
        <Navbar></Navbar>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className='title h1'>Information</h1>
            <div className="item">
              <h2>Altan ANAY</h2>
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">altananay@outlook.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">0545 264 30 18</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Kuşadası</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Turkey</span>
                </div>
              </div>
            </div>
          </div>
          <Chart></Chart>
        </div>
        <div className="bottom">
          <ListTable></ListTable>
        </div>
      </div>
      
    </div>
  )
}

export default Single