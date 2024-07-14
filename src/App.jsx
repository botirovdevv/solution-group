import React, { useEffect, useState } from 'react'
import Navbar from './components/header/Navbar'
import Header from './components/header/Header'
import Service from './components/main/Service'
import Projects from './components/main/Projects'
import Contact from './components/main/Contact'
import About from './components/main/About'
import Footer from './components/footer/Footer'
import { PulseLoader } from 'react-spinners'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, []);
  return (
    <main>
      {
        loading ? (
          <div className='loader'>
            <PulseLoader color='rgb(38, 63, 96)' size={20} />
          </div>
        ) : (
          <div className="wrapper">
            <Navbar />
            <Header />
            <About />
            <Service />
            <Projects />
            <Contact />
            <Footer />
          </div>
        )
      }
    </main>
  )
}

export default App