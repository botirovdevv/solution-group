import React, { useEffect, useState } from 'react'
import Navbar from './components/header/Navbar'
import { PulseLoader } from 'react-spinners'
import { Route, Routes } from 'react-router-dom'
import { routes } from './helpers/routes'

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
            <Routes>
              {routes.map((item) => (
                <Route path={item.path} element={item.element} key={item.path} />
              ))}
            </Routes>
          </div>
        )
      }
    </main>
  )
}

export default App