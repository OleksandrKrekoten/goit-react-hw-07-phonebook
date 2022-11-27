import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filteredContacts: (_, { payload }) => payload,
    },
});

export const { filteredContacts } = filterSlice.actions;