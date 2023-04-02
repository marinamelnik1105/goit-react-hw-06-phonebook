import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      console.log(state.filter);
      return (state = action.payload);
    },
  },
});

export const getFilter = state => state.filter;
export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
