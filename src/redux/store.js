import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { filterSlice } from './filterSlice';

const rootReducer = combineReducers({
    contacts: contactSlice.reducer,
    filter: filterSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
