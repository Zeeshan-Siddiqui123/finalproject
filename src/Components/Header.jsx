import React from 'react';
import './Components.css';
import { Link } from 'react-router-dom';
import { routes } from '../Routes';
import { FaShopify } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
// import { CiMenuFries } from 'react-icons/ci';
import Toggle from './Toggle';

const Navbar = () => {

  return (
    <nav>
      <div className='main-name'>
        <FaShopify color='red' size='30' />
        <h1>SHOPPER</h1>
      </div>
      <div className='nav-links'>
        {routes.map(({ path, label }, index) => (
          <Link key={index} to={path} className='nav-link'>
            {label}
          </Link>
        ))}
      </div>
      <div className='flex flex-row gap-1'>
        <Link to="/cart" className='nav-link-cart'>
          <MdOutlineShoppingCart size='30' />
        </Link>
        <button className='login-button'>
          <Link to="/account">Login/Sign Up</Link>
        </button>
        <div className='toggle-btn'>
        <Toggle/>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
