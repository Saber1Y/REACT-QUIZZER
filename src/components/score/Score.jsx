import React from 'react';
import question from '../quizData';

const Score = ({ correctAnswers, totalQuestions }) => {
     
  // const totalquestion = question.length;
    
  return (
    <div id="scoreboard" className='text-2xl font-bold  text-center mt-3'>
      Score: <span id="score" 
      className='text-red-500'>{correctAnswers}</span> 
      / <span id="total-questions" 
      className='text-red-500'>{totalQuestions}</span>
    </div>
  );
};

export default Score;
