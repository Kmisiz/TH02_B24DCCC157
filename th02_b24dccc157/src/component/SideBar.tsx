import React from 'react'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to="/Bai1" className='link'>Bai1</Link>
          <Link to="/Bai2" className='link'>Bai2</Link>
          <Link to="/Bai3"className='link'>Bai3</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar