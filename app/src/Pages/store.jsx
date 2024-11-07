import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slice/CartSlice'
import userReducer from '../Slice/UserSlice';

const store=configureStore({
  reducer:{
    cart: cartReducer,
    user: userReducer,
  }
})

export default store