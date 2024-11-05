import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../public/assets/innosoft-white.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { NavLinkComponentPropType } from "./type";

// Navbar component definition
function Navbar() {
  // State to control sidebar visibility
  const [sidebar, setSidebar] = useState<boolean>(false);

  // Effect to close the sidebar on window resize above 1100px width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) setSidebar(false); // Auto-close sidebar on larger screens
    };

    // Add event listener to track window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to lock/unlock body scroll when the sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      document.body.style.overflow = ''; // Unlock scroll
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebar]);

  // NavLinkComponent to render navigation items, with configurable flex direction
  const NavLinkComponent = ({ flexDirectionClass }: NavLinkComponentPropType) => {
    return (
      <ul className={flexDirectionClass}>
        {/* Map over paths to create NavLink components for each route */}
        {['/', '/about', '/services', '/news'].map((path, index) => (
          <li key={index}>
            <NavLink
              className={({ isActive }) => `navbar-element ${isActive && 'active'}`}
              to={path}
              onClick={() => sidebar && setSidebar(false)} // Close sidebar when a link is clicked
            >
              {path === '/' ? 'Home' : path.slice(1).replace(/^\w/, (c) => c.toUpperCase())}
            </NavLink>
          </li>
        ))}
        {/* Conditional rendering of Contact Us based on sidebar state */}
        {sidebar ? (
          <li>
            <NavLink
              className={({ isActive }) => `navbar-element ${isActive && 'active'}`}
              to="/contact"
              onClick={() => sidebar && setSidebar(false)} // Close sidebar when a link is clicked
            >
              Contact Us
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink className="contact-button" to="/contact">
              Contact Us
            </NavLink>
          </li>
        )}
      </ul>
    );
  };

  return (
    <nav className="navbar">
      {/* Logo linking to home */}
      <Link to='/'>
        <img src={Logo} alt="innosoft-logo" />
      </Link>

      {/* Primary navigation links for desktop view */}
      <NavLinkComponent flexDirectionClass={'flex-row'} />

      {/* Hamburger menu button to toggle sidebar */}
      <button className="hamburger-menu" onClick={() => setSidebar(!sidebar)}>
        <GiHamburgerMenu />
      </button>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${sidebar ? 'open' : ''}`}>
        {/* Render NavLinkComponent in column layout for sidebar */}
        <NavLinkComponent flexDirectionClass="flex-col" />
        {/* Close button for the sidebar */}
        <button className="close-button" onClick={() => setSidebar(false)}>
          <IoCloseSharp />
        </button>
      </div>

      {/* Dark area overlay behind sidebar when it is open */}
      {sidebar && (
        <div className="sidebar-darkarea" onClick={() => setSidebar(false)}></div>
      )}
    </nav>
  );
}

export default Navbar;
