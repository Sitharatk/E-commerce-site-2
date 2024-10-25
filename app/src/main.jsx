import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

// import './index.css'
import App from './App.jsx'
import ShopProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopProvider>
  </StrictMode>,
)
