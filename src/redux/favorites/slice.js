import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const camper = action.payload;
      const exists = state.favorites.some((item) => item.id === camper.id);
      if (!exists) {
        state.favorites.push(camper);
      }
    },
    removeFavorite: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter(
        (camper) => camper.id !== camperId
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
