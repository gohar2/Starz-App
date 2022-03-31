import { createSlice } from '@reduxjs/toolkit';

const initialState = { error: null };

const name = 'globalErrors';
const globalErrorsSlice = createSlice({
  initialState,
  name,
  reducers: {
    clearError: (state, action) => {
      if (action.payload === state.error?.id) state.error = null;
    },
    get: (state, action) => {
      state.error = { ...action.payload, id: new Date().getTime() };
    }
  }
});

export default globalErrorsSlice.reducer;
export const { clearError: onClearError } = globalErrorsSlice.actions;
