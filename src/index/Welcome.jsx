import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='text-center max-w-2xl mx-auto box-border border-white border shadow-2xl rounded-xl border-solid'>
      <h1 className='text-3xl text-white font-bold mb-2'>Welcome to Quizzer!</h1>
      <h3 className='text-xl mb-2 text-orange-500'>Welcome to Quizzer - Test Your Knowledge!</h3>
      <p className='text-white text-2xl font-bold px-14'>
        Hello there, quiz enthusiasts! Are you ready to embark on an exciting journey of knowledge and fun?
        Welcome to Quizzer, the ultimate quiz game designed to challenge your intellect and test your expertise on various topics.
        Get ready to explore fascinating questions and unlock the depths of your understanding. Whether you're a seasoned quizzer or a newcomer
        eager to learn, this quiz will entertain and educate you. Challenge yourself to answer each question correctly, and watch your score soar to
        new heights. But remember, time is of the essence, so think quickly and trust your instincts. Are you up for the challenge? Gather your wits,
        flex those brain muscles, and let's dive into the world of Quizzer! Happy quizzing!
      </p>
      <div className='my-2'>
      <Link
        to="/quiz"
        className="bg-orange-600 text-white py-2 px-4 rounded-full inline-block hover:bg-orange6600 mt-4"
      >
        Start Quiz
      </Link>
      <Link
        to="/Rules"
        className="bg-orange-600 text-white py-2 px-4 rounded-full inline-block hover:bg-blue-600 mt-4 ml-4"
      >
        Rules
      </Link>
      </div>
    </div>
  );
};

export default Welcome;
