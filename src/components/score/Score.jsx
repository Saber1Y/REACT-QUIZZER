import React from 'react';

const Score = ({ correctAnswers, totalQuestions }) => {

    
  return (
    <div id="scoreboard" className='text-2xl font-bold text-center mt-3'>
      Score: <span id="score">{correctAnswers}</span> / <span id="total-questions">{totalQuestions}</span>
    </div>
  );
};

export default Score;
