import React from 'react'
import "./scss/Navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function Navbar() {

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='navbar2'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search'/>
          <SearchOutlinedIcon></SearchOutlinedIcon>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'></LanguageOutlinedIcon>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className='icon' onClick={()=> dispatch({type: "TOGGLE"})}></DarkModeOutlinedIcon>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'></FullscreenExitOutlinedIcon>
          </div>
          <div className="item">
            <NotificationsOffOutlinedIcon className='icon'></NotificationsOffOutlinedIcon>
            <div className='counter'>1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'></ChatBubbleOutlineOutlinedIcon>
            <div className='counter'>2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'></ListOutlinedIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar