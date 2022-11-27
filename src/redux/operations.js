import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6381dafd9842ca8d3c9b095d.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addTask',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact );
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteTask',
    async (Id, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${Id}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
