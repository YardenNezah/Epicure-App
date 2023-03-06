import dishesController from "../controllers/dishesController.js";
import express from "express";
const dishRouter = express.Router();

const dishController= new dishesController;

dishRouter.get("/", dishController.getDishes);

dishRouter.get("/:id", dishController.getDishById);

dishRouter.post("/", dishController.createDish);

dishRouter.delete("/:id", dishController.deleteDish);

dishRouter.patch("/", dishController.updateDish);

export default dishRouter;
