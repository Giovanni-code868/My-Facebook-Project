import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hero/>
     <Footer/>

    </>
  )
}

export default App