import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  bodyType: "",
  details: {
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setBodyType(state, action) {
      state.bodyType = action.payload;
    },
    setDetails(state, action) {
      state.details = action.payload;
    },
    clearFilters(state) {
      state.location = "";
      state.bodyType = "";
      state.details = {
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false,
      };
    },
  },
});

export const { setLocation, setBodyType, setDetails, clearFilters } =
  filterSlice.actions;

export const filterReducer = filterSlice.reducer;
