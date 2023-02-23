import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPopularRestaurants = createAsyncThunk("restaurants/fetchPopularRestaurants", async () => {
  const response = await axios.get("http://localhost:8080/restaurants/popular");
  return response.data;
});

const popularRestaurantsSlice = createSlice({
  name: "popularRestaurants",
  initialState: {
    popularRestaurants: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPopularRestaurants.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchPopularRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popularRestaurants= action.payload.result;        
      })
  },
});

export const restaurantsActions = popularRestaurantsSlice.actions;

export default popularRestaurantsSlice;
