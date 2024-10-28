import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Collection from './Pages/Collection';
import Product from './Pages/Product';
import Catogary from './Pages/Catogary';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Orders from './Pages/Orders';



function App() {
  return (
    <>
      <ToastContainer />
      <Navbar /> {/* Render Navbar here, so it shows on all pages */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/collection'element={<Collection/>}/>
        <Route path='/category/:category' element={<Catogary/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

