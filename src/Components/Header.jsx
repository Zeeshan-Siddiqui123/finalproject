import React, { useRef } from 'react';
import './Components.css';
import { Link } from 'react-router-dom';
import { routes } from '../Routes';
import { FaShopify, FaTimes } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
  const showNavRef = useRef();
  const toggleRef = useRef();
  const closeRef = useRef();

  const showNavbar = () => {
    showNavRef.current.style.visibility = "visible";
    closeRef.current.style.display = "block"; // Show close button
    toggleRef.current.style.display = "none"; // Hide toggle button
  };

  const hideNavbar = () => {
    showNavRef.current.style.visibility = "hidden";
    closeRef.current.style.display = "none"; // Hide close button
    toggleRef.current.style.display = "block"; // Show toggle button
  };

  return (
    <nav>
      <div className='main-name'>
        <FaShopify color='red' size='30' />
        <h1>SHOPPER</h1>
      </div>
      <div className='nav-links' ref={showNavRef}>
        {routes.map(({ path, label }, index) => (
          <Link key={index} to={path} className='nav-link'>
            {label}
          </Link>
        ))}
      </div>
      <div className='toggle-close' onClick={hideNavbar} ref={closeRef}>
        <FaTimes size='30' color='red' />
      </div>
      <div className='flex flex-row gap-1'>
        <Link to="/cart" className='nav-link'>
          <MdOutlineShoppingCart size='30' />
        </Link>
        <button className='login-button'>
          <Link to="/account">Login/Sign Up</Link>
        </button>
      </div>
      <div className='toggle-btn' onClick={showNavbar} ref={toggleRef}>
        <CiMenuFries size='30' color='red' />
      </div>
    </nav>
  );
};

export default Navbar;
