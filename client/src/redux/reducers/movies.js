import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Movies: [],
  message: ''
};

const name = 'movies';
const moviesSlice = createSlice({
  initialState,
  name,
  reducers: {
    moviesSuccess: (state, action) => {
      state.Movies = action.payload.data[0];
      state.message = action.payload.Message;
    }
  }
});

export default moviesSlice.reducer;

//? APIS ACTIONS

export const onGetMovies = () => ({
  payload: {
    apiName: name,
    method: 'get',
    url: 'movies'
  },
  type: 'movies'
});
