import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // tema
import 'primereact/resources/primereact.min.css';                  // core
import 'primeicons/primeicons.css';          

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
