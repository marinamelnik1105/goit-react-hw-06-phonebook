import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '4591256' },
    { id: 'id-2', name: 'Hermione Kline', number: '4438912' },
    { id: 'id-3', name: 'Eden Clements', number: '6451779' },
    { id: 'id-4', name: 'Annie Copeland', number: '2279126' },
  ],
  redusers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const getContacts = state => state.contacts;
export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
