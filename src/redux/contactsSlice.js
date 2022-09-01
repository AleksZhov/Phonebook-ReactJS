import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

export const contactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilterValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilterValue } = contactsSlice.actions;
export default contactsSlice.reducer;
