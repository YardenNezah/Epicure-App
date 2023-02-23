import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurants = createAsyncThunk("restaurants/fetchRestaurants", async () => {
  const response = await axios.get("http://localhost:8080/restaurants");
  return response.data;
});

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRestaurants.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.restaurants= action.payload.result;    
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
       // console.log(action.error.message);
      });
  },
});

export const restaurantsActions = restaurantsSlice.actions;

export default restaurantsSlice;
