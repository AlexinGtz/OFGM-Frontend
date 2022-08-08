import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    setLoading: (state, action) => {
      state = action.payload;
      return state
    },
  },
});

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer