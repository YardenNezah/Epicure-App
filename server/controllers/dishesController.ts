import dishesHandler from '../db/services/dishesHandler.js';
import { Request, Response } from 'express';

class dishesController {
  async getDishes(req: Request, res: Response) {
    const result = await dishesHandler.getDishesHandler();
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getDishById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).send("no id.");
    const result = await dishesHandler.getDishByIdHandler(id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async createDish(req: Request, res: Response) {
    const result = await dishesHandler.createDishHandler(req.body);
    if (result) return res.status(200).send("dish created successfuly");
    return res.status(500).send("Internal error.");
  }

  async deleteDish(req: Request, res: Response) {
    const result = await dishesHandler.deleteDishHandler(req.params.id);
    if (result) return res.status(200).send("dish deleted successfuly");
    return res.status(500).send("Internal error.");
  }

  async updateDish(req: Request, res: Response) {
    const result = await dishesHandler.updateDishHandler(req.params.id, req.body.document);
    if (result) return res.status(200).send("dish updated successfuly");
    return res.status(500).send("Internal error.");
  }
}

export default dishesController
