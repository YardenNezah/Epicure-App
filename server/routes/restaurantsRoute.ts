import restaurantsController from "../controllers/restaurantsController.js";
import express from "express";
const restaurantRouter = express.Router();

const restaurantController= new restaurantsController;

restaurantRouter.get("/", restaurantController.getRestaurants);

restaurantRouter.get("/:id", restaurantController.getRestaurantById);

restaurantRouter.post("/", restaurantController.createRestaurant);

restaurantRouter.delete("/:id", restaurantController.deleteRestaurant);

restaurantRouter.patch("/", restaurantController.updateRestaurant);

export default restaurantRouter;