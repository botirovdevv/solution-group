import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/Main.scss'
import TranslationProvider from './i18/TranslationProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </BrowserRouter>
)
