import React from 'react'
import "./scss/List.scss"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Datatable from './Datatable'

function List() {
  return (
    <div className='list'>
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <Datatable></Datatable>
      </div>
    </div>
  )
}

export default List 