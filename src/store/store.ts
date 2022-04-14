import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import dishesSlice from "./dishDataSlice";
import restaurantsSlice from "./RestaurantDataSlice";
import chefsSlice from "./chefDataSlice";

const store = configureStore({
  reducer: {
    chefs: chefsSlice.reducer,
    restaurants: restaurantsSlice.reducer,
    dishes: dishesSlice.reducer,
  },
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;

