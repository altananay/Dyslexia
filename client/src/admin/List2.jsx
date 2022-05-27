import React from 'react'
import "./scss/List.scss"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Messages from './Messages'

function List() {
  return (
    <div className='list2'>
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <Messages></Messages>
      </div>
    </div>
  )
}

export default List 