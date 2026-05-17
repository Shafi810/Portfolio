import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. Google Analytics ka package import karein
import ReactGA from "react-ga4";

// 2. Vercel/.env se ID read karein
const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;

// 3. Analytics ko initialize karein
if (trackingId) {
  ReactGA.initialize(trackingId);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
