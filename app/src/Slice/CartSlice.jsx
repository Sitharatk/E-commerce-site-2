import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Load cart from localStorage if it exists
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cartItems');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Async thunk to fetch cart items from the backend
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/users/${userId}`);
      return data.cart || [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk to update cart items on the backend
export const patchUpdateCart = createAsyncThunk(
  'cart/patchUpdateCart',
  async ({ userId, updatedCart }, { rejectWithValue }) => {
    try {
      await axios.patch(`http://localhost:5000/users/${userId}`, { cart: updatedCart });
      return updatedCart;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: loadCartFromLocalStorage(), // Initialize cart items from localStorage
    orderItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((product) => product.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== itemId);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(patchUpdateCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Save to localStorage
      });
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
