import React from 'react'

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1 className='text-2xl font-bold mb-4'>Welcome to Quizzer!</h1>
        <h3 className='text-xl mb-4'>Welcome to Quizzer - Test Your Knowledge!</h3>
        <p>
            Hello there, quiz enthusiasts! Are you ready to embark on an exciting
            journey of knowledge and fun? Welcome to Quizzer, the ultimate quiz game
            designed to challenge your intellect and test your expertise on various
            topics. Get ready to explore fascinating questions and unlock the depths
            of your understanding. Whether you're a seasoned quizzer or a newcomer
            eager to learn, this quiz will entertain and educate you. Challenge
            yourself to answer each question correctly, and watch your score soar to
            new heights. But remember, time is of the essence, so think quickly and
            trust your instincts. Are you up for the challenge? Gather your wits,
            flex those brain muscles, and let's dive into the world of Quizzer!
            Happy quizzing!
        </p>
      <a className="bg-green-500 text-white py-2 px-4 rounded-full inline-block hover:bg-green-600">
        Start Quiz
      </a>
      <a className="bg-blue-500 text-white py-2 px-4 rounded-full inline-block hover:bg-blue-600">
        Rules
      </a>
    </div>
  )
}

export default Welcome
