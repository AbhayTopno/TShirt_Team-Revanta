import React from 'react';
const Form = () => {
  return (
    <div className='flex justify-center items-center'>
      <form
        action="https://formspree.io/f/mjkbjbod"
        method="POST"
        className='text-green-400 text-xl flex flex-col gap-6 w-full max-w-md p-8 bg-gradient-to-t from-gray-900 via-gray-900 to-gray-800 tracking-tight  rounded-lg shadow-lg'
      >
        <label className='flex flex-col'>
          Name:
          <textarea name="name" rows="1" className='p-2 mt-1 rounded-lg bg-neutral-900 text-white' required />
        </label>
        
        <label className='flex flex-col'>
          Registration Number:
          <input 
            type="text" 
            name="registration_number" 
            maxLength="11" 
            pattern="\d{4}[A-Z]{4}\d{3}" 
            className='p-2 mt-1 rounded-lg bg-neutral-900 text-white' 
            required 
          />
        </label>
        
        <label className='flex flex-col'>
          Branch:
          <select 
            name="branch" 
            className='p-2 mt-1 rounded-lg bg-neutral-900 text-white' 
            required
          >
            <option value="" disabled selected>Select</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="EE">EE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="MM">MM</option>
            <option value="PIE">PIE</option>
            <option value="ECM">ECM</option>
          </select>
        </label>
        
        <label className='flex flex-col'>
          T-Shirt Size:
          <select 
            name="tshirt_size" 
            className='p-2 mt-1 rounded-lg bg-neutral-900 text-white' 
            required
          >
            <option value="" disabled selected>Select</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </select>
        </label>
        
        <button 
          type="submit" 
          className='mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300'
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
