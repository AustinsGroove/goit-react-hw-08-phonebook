import { createSlice } from '@reduxjs/toolkit';
import { logInThunk, logOutThunk, refreshThunk, signUpThunk } from './thunks';
import {
  handleFulfilled,
  handleLogIn,
  handleLogOut,
  handlePending,
  handleRefresh,
  handleRejected,
  handleSignUp,
} from './handlers';

const initialState = {
  isLoading: false,
  error: '',
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
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.token = '';
      })
      .addCase(logOutThunk.fulfilled, handleLogOut)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReduser = authSlice.reducer;
