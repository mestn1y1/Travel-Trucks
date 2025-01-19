import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/campers");
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

export const fetchFilteredCampers = createAsyncThunk(
  "campers/fetchFiltered",
  async ({ filters }, thunkApi) => {
    try {
      const queryParams = Object.entries(filters)
        .filter(([key, value]) => value)
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
      const { data } = await axios.get("/campers", {
        params: {
          ...queryParams,
        },
      });
      return data;
    } catch (error) {
      toast.error("No results found. Please adjust your search criteria", {
        autoClose: 2000,
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
