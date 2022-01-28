import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./reducers/favoriteSlice";
import genreReducer from "./reducers/genreSlice";

export const store = configureStore({
  reducer: {
    fav: favoriteReducer,
    genre: genreReducer,
  },
});
