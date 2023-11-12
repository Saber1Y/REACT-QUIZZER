import React from 'react';

const Actionbtn = ({ text, onClick, isCorrect, img }) => (
  <div 
    className='hover:bg-blue-900 bg-primary text-white p-2 rounded-md mt-4 px-2  cursor-pointer  transition'
    onClick={onClick}
  >
    {text}
    {img}
  </div>
);

export default Actionbtn;
