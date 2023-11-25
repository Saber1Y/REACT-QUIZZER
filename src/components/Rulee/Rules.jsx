import React from 'react'


const Rules = () => {
  return (
    <div>
      <h2 className='text-semibold text-white text-base'>Rules</h2>
      <hr className='1px solid bg-orange-600 pt-6'/>
      <div>
        <ol>
          <li className='text-xl text-white my-2 font-seoge'>
            Quiz Duration: Each quiz session has a time limit of 5 minutes (300
            seconds). Players must answer as many questions as they can within
            the time limit.
          </li>
          <li>Scoring: Players earn one point for each correct answer.</li>
          <li>
            Answer Selection: Once a player selects an answer, they cannot
            change it. So, think carefully before making a choice.
          </li>
          <li>
            Time Limit per Question: Players have a maximum of 30 seconds to
            answer each question. If the time runs out, the question will be
            considered unanswered, and the next question will be displayed.
          </li>
          <li>
            Passing: There is no option to skip or pass a question. You must
            answer each question to proceed to the next one.
          </li>
          <li>
            Feedback: After selecting an answer, you will immediately receive
            feedback on whether your answer was correct or not.
          </li>
          <li>
            Game Over: The quiz ends automatically when the time runs out or
            after answering all the questions.
          </li>
          <li>
            Try Again: If you wish to play again, click the "Try Again" button
            at the end of the quiz to reset the game and start a new session.
          </li>
          <li>
            Have Fun: Most importantly, have fun while testing your knowledge
            and challenging yourself to improve your score!
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Rules
