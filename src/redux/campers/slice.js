// import { createSlice } from "@reduxjs/toolkit";
// import { fetchCampers, fetchCamperById } from "./operations";

// const initialState = {
//   campers: [],
//   currentCamper: null,
//   currentPage: 1,
//   totalItems: 0,
//   totalPages: 0,
//   itemsPerPage: 4,
//   loading: false,
//   error: null,
// };

// const campersSlice = createSlice({
//   name: "campers",
//   initialState,
//   reducers: {
//     clearCurrentCamper: (state) => {
//       state.currentCamper = null;
//     },
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCampers.fulfilled, (state, action) => {
//         state.loading = false;

//         if (state.currentPage === 1) {
//           state.campers = action.payload.items;
//         } else {
//           state.campers = [...state.campers, ...action.payload.items];
//         }

//         state.totalItems = action.payload.total;
//         state.totalPages = Math.ceil(action.payload.total / state.itemsPerPage);
//       })
//       .addCase(fetchCampers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchCamperById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCamperById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.currentCamper = action.payload;
//       })
//       .addCase(fetchCamperById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearCurrentCamper, setCurrentPage } = campersSlice.actions;

// export const campersReducer = campersSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCampers,
  fetchCamperById,
  fetchFilteredCampers,
} from "./operations";

const initialState = {
  campers: [],
  currentCamper: null,
  currentPage: 1,
  totalItems: 0,
  totalPages: 0,
  itemsPerPage: 4,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearCurrentCamper: (state) => {
      state.currentCamper = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;

        if (state.currentPage === 1) {
          state.campers = action.payload.items;
        } else {
          state.campers = [...state.campers, ...action.payload.items];
        }

        state.totalItems = action.payload.total;
        state.totalPages = Math.ceil(action.payload.total / state.itemsPerPage);
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.loading = false;

        state.campers = action.payload.items;
        state.totalPages = Math.ceil(action.payload.total / state.itemsPerPage);
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentCamper, setCurrentPage } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
