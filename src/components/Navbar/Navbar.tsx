import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../../public/assets/innosoft-white.png'

function Navbar() {
  return (
    <nav className="navbar">  
          <Link to='/'>
            <img src={Logo} alt="innosoft-logo"/>
          </Link>
        <ul>
            <li className=''><NavLink className={({ isActive }) => `navbar-element ${isActive ? 'active' : 'inactive'}`}  to="/">Home</NavLink></li>
            <li className=''><Link className="navbar-element" to="/about">About Us</Link></li>
            <li className=''><Link className="navbar-element" to="/services">Services</Link></li>
            <li className=''><Link className="navbar-element" to="/news">News</Link></li>
            <li className=''><Link className="contact-button" to="/contact">Contact Us</Link></li>
        </ul>
    </nav>
  )
}



export default Navbar