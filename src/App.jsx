import React, { useEffect, useState } from 'react';
import Navbar from './components/header/Navbar';
import { PulseLoader } from 'react-spinners';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './helpers/routes';
import { useProjects } from './context/ProjectsContex';
import TestModeModal from './mui/TestModeModal';

const App = () => {
  const { loading } = useProjects();
  const [appLoading, setAppLoading] = useState(true);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    setAppLoading(loading);
  }, []);

  return (
    <main>
      {appLoading ? (
        <div className='loader'>
          <PulseLoader color='rgb(38, 63, 96)' size={20} />
        </div>
      ) : (
        <div className="wrapper">
          {!isAdminRoute && <Navbar />}
          <Routes>
            {routes.map((item) => (
              <Route path={item.path} element={item.element} key={item.path} />
            ))}
          </Routes>
          <TestModeModal/>
        </div>
      )}
    </main>
  );
};

export default App;
