import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <ul>
            <li className=''><Link to="/">Home</Link></li>
            <li className=''><Link to="/about">About Us</Link></li>
            <li className=''><Link to="/services">Services</Link></li>
            <li className=''><Link to="/news">News</Link></li>
            <li className=''><Link to="/contact">Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar