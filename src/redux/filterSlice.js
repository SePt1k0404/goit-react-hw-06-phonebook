import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './actions';

export const filterReducer = createReducer('', builder =>
  builder.addCase(filterContacts, (state, action) => (state = action.payload))
);
