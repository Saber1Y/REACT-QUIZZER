import React from 'react';

const Actionbtn = ({ text, onClick, isCorrect, img }) => (
  <div 
    className='hover:bg-blue-900 w-48 bg-primary text-white p-2 rounded-md mt-4 px-2 cursor-pointer transition'
    onClick={onClick}
    >
    <span className="flex justify-center font-mono text-base font-bold">{text}</span>
    {img}
  </div>
);

export default Actionbtn;
