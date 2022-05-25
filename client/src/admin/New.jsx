import React from "react";
import "./scss/New.scss";
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const New = () => {
  return (
    <div className="new">
      <Sidebar></Sidebar>
      <div className="newContainer">
        <Navbar></Navbar>
        <div className="top">
          <h1 className="baslik">Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
            
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="username" />
              </div>
              <div className="formInput">
                <label>First Name</label>
                <input type="text" placeholder="first name" />
              </div>
              <div className="formInput">
                <label>Last name</label>
                <input type="text" placeholder="last name" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="email" />
              </div>
              <div className="formInput">
                <label>phone number</label>
                <input type="text" placeholder="phone number" />
              </div>
              <div className="formInput">
                <label>password</label>
                <input type="text" placeholder="password" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
