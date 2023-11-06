import { useState } from 'react'
import { btn, Quiz, questions } from './components/index'

export default function App() {
  return (
    <section className='bg-primary h-screen'>
      <Quiz />
    </section>
  )
}