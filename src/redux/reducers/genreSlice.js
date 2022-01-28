import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieGenre, fetchTvGenre } from "../thunk";

const initialState = {
  movie: [],
  tv: [],
};

export const genreSlice = createSlice({
  name: "genre",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchMovieGenre.fulfilled, (state, { payload }) => {
      state.movie = payload.genres;
    });
    builder.addCase(fetchTvGenre.fulfilled, (state, { payload }) => {
      state.tv = payload.genres;
    });
  },
});

export default genreSlice.reducer;
