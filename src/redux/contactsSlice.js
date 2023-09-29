import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';
import { nanoid } from 'nanoid';

export const contactsReducer = createReducer([], builder =>
  builder
    .addCase(addContact, (state, action) => {
      if (state.some(el => el.name === action.payload.name)) {
        alert(`${action.payload.name} is already in contacts.`);
      } else {
        action.payload.id = nanoid();
        state.push(action.payload);
      }
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(el => el.name !== action.payload);
    })
);
