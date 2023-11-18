import React from 'react';

const Btn = ({ text, onClick, isCorrect }) => {

  const handleCorrect = () => {
    
  }
  return (
    <button
    className={`hover:bg-black hover:text-white font-medium w-full border p-2 my-2 text-left rounded-md cursor-pointer ${
      isCorrect ? 'bg-green' : 'bg-red'
    }`}
    onClick={() => onClick(isCorrect)}
  >
      {text}
    </button>
  );
};


export default Btn;
