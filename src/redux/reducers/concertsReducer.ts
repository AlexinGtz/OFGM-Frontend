import { createSlice } from '@reduxjs/toolkit'

export const concertsSlice = createSlice({
  name: 'concerts',
  initialState: [],
  reducers: {
    setConcerts: (state, action) => {
      state = action.payload;
      return state
    },
  },
});

export const { setConcerts } = concertsSlice.actions

export default concertsSlice.reducer