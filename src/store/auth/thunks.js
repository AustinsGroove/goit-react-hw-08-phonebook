import { createAsyncThunk } from '@reduxjs/toolkit';
import { logInApi, logOutApi, refreshApi, signUpApi } from 'api/auth';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, { rejectWithValue }) => {
    try {
      return await signUpApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logInThunk = createAsyncThunk(
  'auth/logIn',
  async (body, { rejectWithValue }) => {
    try {
      return await logInApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await logOutApi(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await refreshApi(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
