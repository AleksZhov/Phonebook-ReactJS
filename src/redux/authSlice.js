import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const registerNewUser = createAsyncThunk(
  'user/registerNewUser',
  async (data, thunkAPI) => {
    try {
      const responce = await axios({
        method: 'post',
        url: 'https://connections-api.herokuapp.com/users/signup',
        data,
      });
      return responce.data;
    } catch (error) {}
  }
);

export const logInUser = createAsyncThunk(
  'user/logInUser',
  async (data, thunkAPI) => {
    try {
      const responce = await axios({
        method: 'post',
        url: 'https://connections-api.herokuapp.com/users/login',
        data,
      });
      return responce.data;
    } catch (error) {}
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, thunkAPI) => {
    try {
      const responce = await axios({
        method: 'post',
        url: 'https://connections-api.herokuapp.com/users/logout',
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: { name: '', password: '' },
  token: '',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerNewUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state = { ...action.payload, isLoggedIn: true };
      token.set(action.payload.token);
    });

    builder.addCase(logInUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      token.set(action.payload.token);
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = { name: '', password: '' };
      state.token = '';
      state.isLoggedIn = false;
      token.unset();
    });
  },
});

export default authSlice.reducer;
