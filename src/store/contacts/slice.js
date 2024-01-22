import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './thunks';
import {
  addContactHandler,
  deleteContactHandler,
  getContactsHandler,
} from './handlers';

const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, getContactsHandler)
      .addCase(addContactThunk.fulfilled, addContactHandler)
      .addCase(deleteContactThunk.fulfilled, deleteContactHandler);
  },
});

export const contactsReducer = contactsSlice.reducer;
