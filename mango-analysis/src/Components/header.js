import React from 'react';

function Header() {
  return (
    <div>
      <div className='bg-green-400 py-8 grid-rows-1 flex space-x-2'>
        <div>
          <h2 className='font-bold py-2 text-left px-5 text-4xl '>Identification of consumable mango</h2>
        </div>
        <div className='flex-grow  text-center '>
          <h2 className='font-bold  text-2xl px-5 py-3'></h2>
        </div>
        <div className='flex-grow  text-center '>
          <h2 className='font-bold  text-2xl px-5 py-3'>About Us</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
