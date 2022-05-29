import React, { useEffect, useState } from "react";
import "./scss/Widget.scss";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { fetchDatas } from "../api/axios";

const Widget = () => {

  let [userCount, setUserCount] = useState()
  let [messageCount, setMessageCount] = useState()
  let [vinegradTestCount, setVinegradTestCount] = useState()

  useEffect(() => {
    fetchDatas().then(response => {
      setUserCount(response.data.userCount)
      setMessageCount(response.data.messageCount)
      setVinegradTestCount(response.data.vinegradTestCount)
    }).catch(error => {
      console.log(error.data.response.message)
    })
  }, []);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Kullanıcı Sayısı</span>
        <span className="counter" style={{ marginRight: "100px" }}>
          {userCount}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <PersonOutlinedIcon></PersonOutlinedIcon>
        </div>
      </div>
      <div className="left">
        <span className="title">Gelen Mesaj Sayısı</span>
        <span className="counter" style={{ marginRight: "100px" }}>
          {messageCount}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <PersonOutlinedIcon></PersonOutlinedIcon>
        </div>
      </div>
      <div className="left">
        <span className="title">Yapılan Vinegrad Test Sayısı</span>
        <span className="counter" style={{ marginRight: "100px" }}>
          {vinegradTestCount}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <PersonOutlinedIcon></PersonOutlinedIcon>
        </div>
      </div>
      <div className="left">
        <span className="title">Yapılan Uygulama Sayısı</span>
        <span className="counter" style={{ marginRight: "100px" }}>
          Eklenecek
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <PersonOutlinedIcon></PersonOutlinedIcon>
        </div>
      </div>
    </div>
  );
};

export default Widget;
