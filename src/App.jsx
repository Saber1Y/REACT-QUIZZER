import { useState } from 'react'
import { btn, Quiz, questions, Welcome } from './components/index'
import { Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <section className='bg-primary h-screen'>
      <Quiz />
    <Routes>
      <Route path='Welcome' element={<Welcome />}></Route>
    </Routes>
    </section>
  )
}