import React from 'react';

const Btn = ({ text, onclick }) => {
  return (
    <button
      className='bg-white text-222 font-medium w-full border border-222 p-2 my-2 text-left rounded-md cursor-pointer transition duration-300'
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Btn;
