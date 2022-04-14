import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDishes = createAsyncThunk("dishes/fetchDishes", async () => {
  const response = await axios.get("http://localhost:8080/dishes");
  return response.data;
});

const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    dishes: [],
    isLoading: false,
  },
  reducers: {
    toggle(state) {
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchDishes.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dishes= action.payload.result;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.isLoading = false;
        //console.log(action.error.message);
      });
  },
});

export const dishesActions = dishesSlice.actions;

export default dishesSlice;


