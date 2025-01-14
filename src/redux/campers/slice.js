// import { createSlice } from "@reduxjs/toolkit";
// import { fetchCampers } from "./operations";

// const initialState = {
//   campers: [],
//   loading: false,
//   error: null,
// };

// const campersSlice = createSlice({
//   name: "campers",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.campers = action.payload;
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const campersReducer = campersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const initialState = {
  campers: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null; // Убираем ошибку, если запрос еще не завершен
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.campers = action.payload; // Данные приходят сюда
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Используем action.error.message для ошибки
      });
  },
});

export const campersReducer = campersSlice.reducer;
