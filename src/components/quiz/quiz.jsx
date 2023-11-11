import React, { useState } from 'react'
import Questions from '../quizData'

const Quiz = () => {
    
  return (
<>
<div className='bg-primary min-h-screen flex flex-col items-center justify-center'>
  <div className='w-full max-w-[600px] bg-white rounded-lg p-6'>
    <h1 className='text-center text-2xl font-semibold text-primary pb-8 font-pops'>Quizzer</h1>
    <hr className='border-primary my-1' />
    {Questions.Questions.map((question, index) => (
          <div key={index} className='flex justify-center items-center text-primary pb-4'>
            <span className='font-semibold text-2xl'>{index + 1}. </span>
            <span className='text-2xl font-semibold'>{question.question}</span>
         </div>
          ))}
  </div>
  </div>
</>
  )
}

export default Quiz
