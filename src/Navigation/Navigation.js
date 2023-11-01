import React from 'react'
import{Link}from 'react-router-dom'
const navigation = () => {
  return (
    <div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default navigation