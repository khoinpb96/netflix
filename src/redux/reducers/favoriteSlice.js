import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favList: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",

  initialState,

  reducers: {
    addFav: (state, { payload }) => {
      const isAlreadyInFavList = state.favList.some(
        (fav) => fav.id === payload.id
      );

      if (!isAlreadyInFavList) state.favList.push(payload);
    },

    removeFav: (state, { payload }) => {
      state.favList = state.favList.filter((fav) => fav.id !== payload);
    },
  },
});

export const { addFav, removeFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
