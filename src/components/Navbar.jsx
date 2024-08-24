import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <div className='text-green-500 flex flex-col sm:flex-row justify-between items-center m-10 px-4'>
      <div className='text-3xl cursor-pointer mb-4 sm:mb-0 text-center'>
        Team Revanta
      </div>
      <ul className='flex flex-row gap-4 sm:gap-20 text-lg'>
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
