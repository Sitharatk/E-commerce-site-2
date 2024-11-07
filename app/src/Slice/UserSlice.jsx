// src/Slice/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// src/Slice/userSlice.js
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:5000/login', { email, password });
        return response.data; // Assuming the backend returns user data if login is successful
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  

  const userSlice = createSlice({
    name: 'user',
    initialState: {
      currentUser: null,
      loading: false,
      error: null,
    },
    reducers: {
      setCurrentUser: (state, action) => {
        state.currentUser = action.payload;
      },
      clearCurrentUser: (state) => {
        state.currentUser = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.currentUser = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
  export default userSlice.reducer;
  