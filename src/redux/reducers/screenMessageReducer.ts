import { createSlice } from '@reduxjs/toolkit'

export const screenMessageSlice = createSlice({
  name: 'screenMessage',
  initialState: {
    message: 'This is a success message',
    type: 'error',
    show: false
  },
  reducers: {
    setAndShowMessage: (state, action) => {
      state = action.payload;
      return {
        ...state,
        show: true,
      }
    },
    hideMessage: (state) => {
        return {
            ...state,
            show: false
        }
    }
  },
});

export const { setAndShowMessage, hideMessage } = screenMessageSlice.actions

export default screenMessageSlice.reducer