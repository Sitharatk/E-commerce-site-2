import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
// import './index.css'
import App from './App.jsx'
import ShopProvider from './Context/ShopContext.jsx'
import store from './Pages/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ShopProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ShopProvider>
    </Provider>
  </StrictMode>,
)
