import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const token = {
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
      await axios({
        method: 'post',
        url: 'https://connections-api.herokuapp.com/users/logout',
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (_, thunkAPI) => {
    try {
      const responce = await axios({
        method: 'get',
        url: 'https://connections-api.herokuapp.com/users/current',
      });
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRegistered: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerNewUser.fulfilled, (state, action) => {
      console.log(action.payload);
      // state = { ...action.payload, isLoggedIn: true };
      state.isRegistered = true;
      token.set(action.payload.token);
    });

    builder.addCase(logInUser.fulfilled, (state, action) => {
      // state.user = action.payload.user;
      state.token = action.payload.token;
      state.isRegistered = false;
      state.isLoggedIn = true;
      token.set(action.payload.token);
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.user = { name: '', email: '' };
      state.token = '';
      state.isLoggedIn = false;
      token.unset();
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      token.set(state.token);
      console.log(action.payload);
      state.user = action.payload;
    });
  },
});

export default authSlice.reducer;
