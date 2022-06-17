import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state+=1,
  },
});

export const { increment } = counterSlice.actions

export default counterSlice.reducer