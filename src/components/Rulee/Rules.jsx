import React from 'react'


const Rules = () => {
  return (
    <div>
      <h2 className='text-semibold text-white text-base'>Rules</h2>
      <hr className='1px solid bg-orange-600 pt-6'/>
      <div>
        <ol className='px-20 my-4'>
          <li className='text-2xl text-white my-2 font-seoge'>
            Quiz Duration: Each quiz session has a time limit of 5 minutes (300
            seconds). Players must answer as many questions as they can within
            the time limit.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>Scoring: Players earn one point for each correct answer.</li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Answer Selection: Once a player selects an answer, they cannot
            change it. So, think carefully before making a choice.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Time Limit per Question: Players have a maximum of 30 seconds to
            answer each question. If the time runs out, the question will be
            considered unanswered, and the next question will be displayed.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Passing: There is no option to skip or pass a question. You must
            answer each question to proceed to the next one.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Feedback: After selecting an answer, you will immediately receive
            feedback on whether your answer was correct or not.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Game Over: The quiz ends automatically when the time runs out or
            after answering all the questions.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Try Again: If you wish to play again, click the "Try Again" button
            at the end of the quiz to reset the game and start a new session.
          </li>
          <li className='text-2xl text-white my-2 font-seoge'>
            Have Fun: Most importantly, have fun while testing your knowledge
            and challenging yourself to improve your score!
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Rules
