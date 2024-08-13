import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/Main.scss'
import TranslationProvider from './i18/TranslationProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProjectsProvider } from './context/ProjectsContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProjectsProvider>
      <TranslationProvider>
        <App />
      </TranslationProvider>
    </ProjectsProvider>
  </BrowserRouter>
)
