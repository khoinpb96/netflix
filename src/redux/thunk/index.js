import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchMovieGenre = createAsyncThunk("genre/fetchMovieGenre", async () => {
  //Fetch movie genres
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  const data = await res.json();
  return data;
});

const fetchTvGenre = createAsyncThunk("genre/fetchTvGenre", async () => {
  //Fetch movie genres
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );
  const data = await res.json();
  return data;
});

export { fetchMovieGenre, fetchTvGenre };
