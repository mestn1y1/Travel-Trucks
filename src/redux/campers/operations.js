import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get("/campers");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, thunkApi) => {
    try {
      console.log("Запрос с ID:", id); // Логируем ID
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
