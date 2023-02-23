import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewRestaurants = createAsyncThunk("restaurants/fetchNewRestaurants", async () => {
  const response = await axios.get("http://localhost:8080/restaurants/new");
  return response.data;
});

const newRestaurantsSlice = createSlice({
  name: "newRestaurants",
  initialState: {
    newRestaurants: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewRestaurants.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchNewRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.newRestaurants= action.payload.result;  
      })
  },
});

export const restaurantsActions = newRestaurantsSlice.actions;

export default newRestaurantsSlice;
