import { createSlice } from '@reduxjs/toolkit';

const initialState = { loadingList: [] };

const name = 'globalLoading';
const globalLoadingSlice = createSlice({
  initialState,
  name,
  reducers: {
    start: (state, action) => {
      state.loadingList.push(action.payload);
    },
    stop: (state, action) => {
      state.loadingList = state.loadingList.filter(
        item => item !== action.payload
      );
    }
  }
});

export default globalLoadingSlice.reducer;
