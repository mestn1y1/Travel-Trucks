import { selectFilter } from "../filter/selectors";
import { createSelector } from "@reduxjs/toolkit";
export const selectIsLoading = (state) => state.campers.loading;

export const selectIsError = (state) => state.campers.error;

export const selectCampers = (state) => state.campers.campers;

export const selectCurrentCamper = (state) => state.campers.currentCamper;

export const selectTotalItems = (state) => state.campers.totalItems;

export const selectCurrentPage = (state) => state.campers.currentPage;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = filters.location
        ? camper.location.toLowerCase().includes(filters.location.toLowerCase())
        : true;
      const matchesForm = filters.form ? camper.form === filters.form : true;
      const matchesDetails = [
        "kitchen",
        "bathroom",
        "TV",
        "water",
        "gas",
      ].every((key) => (filters[key] ? camper[key] : true));
      return matchesLocation && matchesForm && matchesDetails;
    });
  }
);
