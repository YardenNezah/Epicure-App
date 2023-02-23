import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOpenRestaurants = createAsyncThunk("restaurants/fetchOpenRestaurants", async () => {
  const response = await axios.get("http://localhost:8080/restaurants/open");
  return response.data;
});

const openRestaurantsSlice = createSlice({
  name: "openRestaurants",
  initialState: {
    openRestaurants: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOpenRestaurants.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchOpenRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.openRestaurants= action.payload.result;        
      })
  },
});

export const restaurantsActions = openRestaurantsSlice.actions;

export default openRestaurantsSlice;
