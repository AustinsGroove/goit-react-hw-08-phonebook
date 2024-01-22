import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactApi, deleteContactApi } from 'api/contacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (token, { rejectWithValue }) => {
    try {
      return await getContactsApi(token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      return await addContactApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (body, { rejectWithValue }) => {
    try {
      return await deleteContactApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
