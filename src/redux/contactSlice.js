import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, actions) => {
    state.isLoading = false;
    state.error = actions.payload;
}

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, actions) {
            state.isLoading = false;
            state.error = null;
            state.items = actions.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, actions) {
            state.isLoading = false;
            state.error = null;
            state.items.push(actions.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, actions) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === actions.payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    },
});



