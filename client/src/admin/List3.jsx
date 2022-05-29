import React from 'react'
import "./scss/List.scss"
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import VinegradTestResults from "./VinegradTestResults"

function List() {
  return (
    <div className='list2'>
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <VinegradTestResults></VinegradTestResults>
      </div>
    </div>
  )
}

export default List 