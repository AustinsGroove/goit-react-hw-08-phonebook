import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk, refreshThunk, signUpThunk } from './thunks';
import {
  handleLogIn,
  handleLogOut,
  handleRefresh,
  handleSignUp,
} from './handlers';

const initialState = {
  token: '',
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, handleSignUp)
      .addCase(logInThunk.fulfilled, handleLogIn)
      .addCase(refreshThunk.fulfilled, handleRefresh)
      .addCase(logOutThunk.fulfilled, handleLogOut)
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.token = '';
        state.profile = null;
      });
  },
});

export const authReduser = authSlice.reducer;
