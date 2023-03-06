import chefsController from "../controllers/chefsController.js";
import express from "express";
const chefRouter = express.Router();

const chefController= new chefsController;

chefRouter.get("/", chefController.getChefs);

chefRouter.get("/:id", chefController.getChefById);

chefRouter.post("/", chefController.createChef);

chefRouter.delete("/:id", chefController.deleteChef);

chefRouter.patch("/", chefController.updateChef);

export default chefRouter;

