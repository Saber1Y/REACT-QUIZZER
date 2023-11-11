import React, { useState } from 'react'
// import rotate from '../../assests/rotate.png'

const btn = ({ text, on }) => {
  // const [option, setOption] = useState(0)
  // const optionData = Questions.Questions[option]

  return (
   <>
   <button 
   className='bg-white text-222 font-medium w-full border border-222 p-2 my-2 text-left rounded-md cursor-pointer transition duration-300'
   onClick={onclick}
   />
   {text}
   </>
  )
}

export default btn
