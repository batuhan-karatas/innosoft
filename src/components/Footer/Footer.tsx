import './Footer.css'
import { Link } from 'react-router-dom'
import Logo from '../../../public/assets/innosoft-white.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



function Footer() {
  return (
    <footer className='footer' >
          <div className='footer-info'>
            <div className='logo'>
              <img src={Logo} alt="innosoft-logo" />
              <p>Empowering your digital journey with innovative solutions tailored for success. </p>
            </div>

            <div className='navigation'>
              <ul>
                {['/', '/about', '/services', '/news'].map((path, index) => (
                  <li key={index}>
                    <Link
                      className=""
                      to={path}
                    >
                      {path === '/' ? 'Home' : path.slice(1).replace(/^\w/, (c) => c.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='contact'>
              <Link 
                className=''
                to='/contact'
              >
                Contact Us
              </Link>
              
              <p>Your partner in transforming ideas into cutting-edge software solutions—let's innovate together! </p>
              <a href="tel:+12125556789">212-555-6789</a>

            </div>

            <div className='icons'>
              <div>
                <a href="https://facebook.com">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com">
                  <FaInstagram />
                </a>
                <a href="https://x.com">
                <FaXTwitter />

                </a>
                <a href="https://linkedin.com">
                <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

         <div className='footer-bottom'>
         <p>&copy; {new Date().getFullYear()} InnoSoft. All rights reserved.</p>
         </div>
    </footer>
  )
}

export default Footer