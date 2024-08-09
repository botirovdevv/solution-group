import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/Main.scss'
import TranslationProvider from './i18/TranslationProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TranslationProvider>
    <App />
  </TranslationProvider>
)
