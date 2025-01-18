import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  kitchen: false,
  bathroom: false,
  TV: false,
  water: false,
  gas: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setFormType: (state, action) => {
      state.form = action.payload;
    },
    setDetails: (state, action) => {
      state.filters = action.payload;
    },
    clearFilters: () => initialState,
  },
});
export const { setLocation, setFormType, setDetails, clearFilters } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
