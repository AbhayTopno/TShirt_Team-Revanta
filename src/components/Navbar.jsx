import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='text-green-500 flex justify-between items-center m-10 px-4'>
      <div className='text-3xl cursor-pointer'>Team Revanta</div>
      <ul className='flex gap-20 text-lg relative'>
        <li>
          <Link 
            to="/" 
            className={`transition-all ease-in duration-300 cursor-pointer 
            ${location.pathname === '/' ? 'text-green-500 underline' : 'text-white hover:text-green-500'}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/form" 
            className={`transition-all ease-in duration-300 cursor-pointer 
            ${location.pathname === '/form' ? 'text-green-500 underline' : 'text-white hover:text-green-500'}`}
          >
            Form
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
