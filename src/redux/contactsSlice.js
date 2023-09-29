import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      if (state.some(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts.`);
      } else {
        action.payload.id = nanoid();
        state.push(action.payload);
      }
    },
    deleteContact(state, action) {
      return state.filter(el => el.name !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
