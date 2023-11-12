import React from 'react';

const Actionbtn = ({ text, onClick, isCorrect }) => (
  <div 
    className='hover:bg-blue-900 bg-primary text-white p-2 rounded-md mt-4 cursor-pointer px-8 transition'
    onClick={onClick}
  >
    {text}
  </div>
);

export default Actionbtn;
