import React, { useState } from 'react'

const Score = ({ initialscore }) => {

  const [score, setScore] = useState(initialscore);

  const handleNextScore = () => {
    setScore(score + 1)
  }

  return (
    <div>
      <p className='text-2xl font-bold text-center mt-10'>Score: {score}</p>
    </div>
  )
}

export default Score
