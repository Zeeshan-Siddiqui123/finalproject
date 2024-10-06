import React, { useState } from 'react';
// import './index.css';
import {  Button, Drawer } from 'antd';
import { CiMenuFries } from 'react-icons/ci';
import { routes } from '../Routes';
import { Link } from 'react-router-dom';
import { FaShopify } from 'react-icons/fa';

const Toggle = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] =useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <button onClick={showLoading}>
      <CiMenuFries size='30' color='red' />
      </button>
      <Drawer
        closable
        destroyOnClose
        title={<div className='footer-name flex items-start gap-0'>
            <FaShopify color='red' size='30' />
            <h2 className='text-xl font-bold ml-2'>SHOPPER</h2>
          </div>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <Button type="primary" style={{ marginBottom: 16 , backgroundColor:"red", display:"flex", alignItems:"center", justifyContent:"center"}} onClick={showLoading}>
          Reload
        </Button>
        <div className='nav-links'>
        {routes.map(({ path, label }, index) => (
          <Link key={index} to={path} className='nav-linkss'>
            {label}
          </Link>
          
        ))}
        <button className='login-btn bg-[red] text-white border-0 px-3 py-2 rounded-md cursor-pointer' >
          <Link to="/account">Login/Sign Up</Link>
        </button>
      </div>
      </Drawer>
    </>
  );
};

export default Toggle;