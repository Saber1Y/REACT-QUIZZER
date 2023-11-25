import { useState } from 'react'
import { btn, Quiz, questions, Welcome, Rules } from './components/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <section className='bg-primary h-screen'>
    <Routes>
      <Route path='/Welcome' element={<Welcome />}></Route>
      <Route path='/Rule' element={<Rules />}></Route>
      <Route path='/quiz' element={<Quiz />}></Route>
    </Routes>
    </section>
  )
}