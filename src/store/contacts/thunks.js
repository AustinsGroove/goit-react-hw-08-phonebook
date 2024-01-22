import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactsApi, addContactApi, deleteContactApi } from 'api/contacts';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    try {
      return await getContactsApi(getState().auth.token);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    const body = {
      data,
      token,
    };
    try {
      return await addContactApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    const body = {
      id,
      token,
    };
    try {
      return await deleteContactApi(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
