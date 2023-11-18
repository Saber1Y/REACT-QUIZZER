import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(30); 

  useEffect(() => {
    if (time > 0) {
      
      const timerInterval = setInterval(() => {
        setTime(prevTime => prevTime - 1); 
      }, 1000);

      return () => clearInterval(timerInterval);
    } else {
      
    }
  }, [time]); 

  return (
    <div id="time" className='text-2xl font-bold text-center mt-3'>
      Time: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')} {/* Display the time in minutes and seconds */}
    </div>
  );
};

export default Timer;
