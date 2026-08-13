import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SkateBeatSupport from './pages/SkateBeatSupport.tsx'
import SkateBeatProject from './pages/SkateBeatProject.tsx'

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/skatebeat-support' ? <SkateBeatSupport /> : 
     path === '/skatebeat' ? <SkateBeatProject /> : 
     <App />}
  </StrictMode>,
)
