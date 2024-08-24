import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/form');
  };

  return (
    <div className='text-white flex flex-col items-center justify-center h-[450px] w-full gap-8'>
      <h1 className='bg-gradient-to-r from-green-500 via-lime-500 to-yellow-500 bg-clip-text text-4xl tracking-tight text-transparent text-center'>
        Official Merch <br className='sm:hidden' /> of Team Revanta
      </h1>
      <h3 className='text-2xl text-center'>Submit your details here</h3>
      <button
        onClick={handleButtonClick}
        aria-label="Navigate to the form"
        className='bg-green-600 text-xl h-[40px] w-[150px] rounded-lg hover:bg-green-800 transition-all ease-in duration-300'
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
