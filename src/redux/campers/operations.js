import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page = 1, perPage = 4 }, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/campers?page=${page}&limit=${perPage}`
      );
      return data;
    } catch (error) {
      console.error("FetchCampers error:", error);
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkApi) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
