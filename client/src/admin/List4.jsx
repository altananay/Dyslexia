import React from 'react'
import "./scss/List.scss"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import UserPasswords from './UserPasswords'

const List4 = () => {
  return (
    <div className='list2'>
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <UserPasswords></UserPasswords>
      </div>
    </div>
  )
}

export default List4