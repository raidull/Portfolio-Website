import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/header/Header'
import Home from './Components/home/Home'
import Services from './Components/services/Services'
import Skills from './Components/skills/Skills'
import Portfolio from './Components/portfolio/Portfolio'
import Resume from './Components/resume/Resume'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'


function App() {

  return (
    <main className="main">
      <Header />
      <Home/>
      <Skills/>
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
