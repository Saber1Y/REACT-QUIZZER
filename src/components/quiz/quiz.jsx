import React, { useEffect, useState } from 'react';
import Questions from '../quizData';
import Btn from '../buttons/Btn';
import Actionbtn from '../Actionbtn/Actionbtn';
import Score from '../score/Score';
import Timer from '../Timer/Timer';

const Quiz = () => {
  const [option, setOption] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    alert('Good-Luck!');
  },[1]);

  const handleNext = () => {
    if (option === Questions.Questions.length - 1) {
      alert('You are done!');
    }
    setOption(option + 1);
  };

  const TimerEnd = () => {
    setOption(option + 1);
  };

  const optionData = Questions.Questions[option];

  // const checkAnswer = (isCorrect) => {
  //   if (isCorrect) {
  //     setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
  //   }
  //   else {
  //     setAnswered(true);
  //   }
  // };

  return (
    <>
      <div className='bg-primary min-h-screen flex flex-col items-center justify-center'>
        <div className='w-full max-w-[600px] bg-white rounded-lg p-6'>
          <h1 className='text-center text-2xl font-semibold text-primary pb-5 font-pops'>Quizzer</h1>
          <hr className='border-primary my-1' />
          <div key={option} className='flex justify-center items-center text-primary pb-4'>
            <span className='font-semibold text-2xl mr-3'>{option + 1}. </span>
            <span className='text-2xl font-semibold'>{optionData.question}</span>
          </div>
          <div id='answers-button'>
            {optionData.answers.map((answer, index) => (
              <Btn
                key={index}
                text={answer.text}
                onClick={() => checkAnswer(answer.correct)}
                isCorrect={answer.correct}
              />
            ))}
          </div>
          {<Actionbtn text="Next" onClick={handleNext} />}
          {<Actionbtn text="Try-Again" />}
          <Score correctAnswers={correctAnswers} totalQuestions="10" />
          <Timer onTimerEnd={TimerEnd} />
        </div>
      </div>
    </>
  );
};

export default Quiz;
