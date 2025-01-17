export const selectIsLoading = (state) => state.campers.loading;

export const selectIsError = (state) => state.campers.error;

export const selectCampers = (state) => state.campers.campers;

export const selectCurrentCamper = (state) => state.campers.currentCamper;

export const selectTotalItems = (state) => state.campers.totalItems;

export const selectCurrentPage = (state) => state.campers.currentPage;
