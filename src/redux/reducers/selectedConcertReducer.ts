import { createSlice } from '@reduxjs/toolkit'

export const selectedConcertSlice = createSlice({
  name: 'selectedConcert',
  initialState: {},
  reducers: {
    selectConcert: (state, action) => {
      state = action.payload;
      return state
    },
  },
});

export const { selectConcert } = selectedConcertSlice.actions

export default selectedConcertSlice.reducer