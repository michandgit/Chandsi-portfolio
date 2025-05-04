import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
    <Toaster></Toaster>
    <Navbar/>
    <Hero></Hero>
    <About></About>
    <Portfolio></Portfolio>
    <Contact></Contact>
    </>
  )
}

export default App
