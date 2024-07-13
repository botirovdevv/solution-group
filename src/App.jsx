import React from 'react'
import Navbar from './components/header/Navbar'
import Header from './components/header/Header'
import Service from './components/main/Service'
import Projects from './components/main/Projects'
import Contact from './components/main/Contact'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Service/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App