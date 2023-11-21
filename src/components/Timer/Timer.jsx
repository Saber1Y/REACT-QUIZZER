import React, { useState, useEffect } from 'react';

const Timer = ({ onTimerEnd }) => {
  const [time, setTime] = useState(30); 

  useEffect(() => {
    if (time > 0) {
      const timerInterval = setInterval(() => {
        setTime(prevTime => prevTime - 1); 
      }, 1000);
  return () => clearInterval(timerInterval);
    } else {
      onTimerEnd();
      setTime(30)
    }
  }, [time, onTimerEnd]); 

  return (
  <div id="time" className='text-2xl font-bold text-center mt-3'>
    Time Left: <span className='text-red-500'>
      {Math.floor(time / 60)}</span> : <span className='text-red-500'>
        {(time % 60).toString().padStart(2, '0')}</span>
  </div>
  );
};

export default Timer;
