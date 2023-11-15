import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import Hero from './assets/components/Hero'
import Cards from './assets/components/Cards'
import Footer from './assets/components/Footer'
import './assets/components/style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default App
