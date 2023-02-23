import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import dishesSlice from "./dishDataSlice";
import restaurantsSlice from "./RestaurantDataSlice";
import chefsSlice from "./chefDataSlice";
import newRestaurantsSlice from "./newRestaurantsSlice";
import popularRestaurantsSlice from "./popularRestaurantsSlice";
import openRestaurantsSlice from "./openRestaurantsSlice";


const store = configureStore({
  reducer: {
    chefs: chefsSlice.reducer,
    restaurants: restaurantsSlice.reducer,
    dishes: dishesSlice.reducer,
    newRestaurants: newRestaurantsSlice.reducer,
    popularRestaurants: popularRestaurantsSlice.reducer,
    openRestaurants: openRestaurantsSlice.reducer
  },
});


export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;

