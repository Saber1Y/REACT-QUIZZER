import React, { useState } from 'react'
import Questions from '../quizData'
import Btn from '../buttons/Btn'

const Quiz = () => {
  const [option, setOption] = useState(0)

  const handleNext = () => {
    setOption(option + 1)
  }
  const optionData = Questions.Questions[option]

  return (
    <>
      <div className='bg-primary min-h-screen flex flex-col items-center justify-center'>
        <div className='w-full max-w-[600px] bg-white rounded-lg p-6'>
          <h1 className='text-center text-2xl font-semibold text-primary pb-8 font-pops'>Quizzer</h1>
          <hr className='border-primary my-1' />
          <div key={option} className='flex justify-center items-center text-primary pb-4'>
            <span className='font-semibold text-2xl'>{option + 1}. </span>
            <span className='text-2xl font-semibold'>{optionData.question}</span>
          </div>
        <div>
         <div id='answers-button'>
          {optionData.answers.map((answer, index) => {
            return <Btn key={index} text={answer.text}/>
          })}
        </div>
        <button
          onClick={handleNext}
          className='bg-primary text-white p-2 rounded-md mt-4 cursor-pointer hover:bg-blue-700 transition duration-300'
        >
          Next
        </button>
         </div>
        </div>
      </div>
    </>
  )
}

export default Quiz
