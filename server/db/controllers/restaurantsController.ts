import restaurantsHandler from '../db/services/restaurantsHandler.js';
import { Request, Response } from 'express';

class restaurantsController {
  async getRestaurants(req: Request, res: Response) {
    const result = await restaurantsHandler.getRestaurantsHandler();
   if (result) return res.status(200).json({ result });   
  return res.status(500).send("Internal error.");
  }

  async filterRestaurants(req: Request, res: Response) {
    const { filter }: any = req.params.filter;
    const result = await restaurantsHandler.filterRestaurantsHandler(req.params.filter);    
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getRestaurantById(req: Request, res: Response) {
    const { id }:any = req.params._id;
    if (!id) return res.status(400).send("no id.");
    const result = await restaurantsHandler.getRestaurantByIdHandler(req.params._id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async createRestaurant(req: Request, res: Response) {
    const result = await restaurantsHandler.createRestaurantHandler(req.body);
    if (result) return res.status(200).send("Restaurant created successfuly");
    return res.status(500).send("Internal error.");
  }

  async deleteRestaurant(req: Request, res: Response) {
    const result = await restaurantsHandler.deleteRestaurantHandler(req.params.id);
    if (result) return res.status(200).send("Restaurant deleted successfuly");
    return res.status(500).send("Internal error.");
  }

  async updateRestaurant(req: Request, res: Response) {
    const result = await restaurantsHandler.updateRestaurantHandler(req.params.id, req.body.document);
    if (result) return res.status(200).send("Restaurant updated successfuly");
    return res.status(500).send("Internal error.");
  }
}

export default restaurantsController
