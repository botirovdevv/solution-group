import React from 'react'
import Navbar from './components/header/Navbar'
import Header from './components/header/Header'
import Service from './components/main/Service'
import Projects from './components/main/Projects'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <Service/>
      <Projects/>
    </main>
  )
}

export default App