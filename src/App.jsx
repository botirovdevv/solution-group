import React from 'react'
import Navbar from './components/header/Navbar'
import Header from './components/header/Header'
import Service from './components/main/Service'
import Projects from './components/main/Projects'
import Contact from './components/main/Contact'
import About from './components/main/About'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App