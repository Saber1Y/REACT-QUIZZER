import React, { useState } from 'react'
import Questions from '../quizData'
import Btn from '../buttons/Btn'
import Actionbtn from '../Actionbtn/Actionbtn'
import Score from '../score/Score'
import Timer from '../Timer/Timer'
import questions from '../questions/questions'
// import rotate from '../../assests/rotate-right-regular-24.png' 
// import { IoReloadOutline } from 'react-icons/io5';



const Quiz = () => {
  const [option, setOption] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleNext = () => {
    setOption(option + 1)
  }

  const optionData = Questions.Questions[option];
  

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
            <div>
         <div id='answers-button'>
            {optionData.answers.map((answer, index) => {
              return (
              <Btn 
              key={index} 
              text={answer.text}
              onClick={handleNext}
              isCorrect={answer.correct}
               />
              )
            })}
        </div>
          <Actionbtn text="Next" />
          <Actionbtn text="Try-Again" />
          </div>
              <Score correctAnswers={correctAnswers} totalQuestions="10"  />
              <Timer />
        </div>
      </div>
    </>
  )
}

export default Quiz
