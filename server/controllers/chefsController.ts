import chefsHandler from '../db/services/chefsHandler.js';
import { Request, Response } from 'express';

class chefsController {
  async getChefs(req: Request, res: Response) {
    const result = await chefsHandler.getChefsHandler();
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async getChefById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) return res.status(400).send("no id.");
    const result = await chefsHandler.getChefByIdHandler(id);
    if (result) return res.status(200).json({ result });
    return res.status(500).send("Internal error.");
  }

  async createChef(req: Request, res: Response) {
    const result = await chefsHandler.createChefHandler(req.body);
    if (result) return res.status(200).send("Chef created successfuly");
    return res.status(500).send("Internal error.");
  }

  async deleteChef(req: Request, res: Response) {
    const result = await chefsHandler.deleteChefHandler(req.params.id);
    if (result) return res.status(200).send("Chef deleted successfuly");
    return res.status(500).send("Internal error.");
  }

  async updateChef(req: Request, res: Response) {
    const result = await chefsHandler.updateChefHandler(req.params.id, req.body.document);
    if (result) return res.status(200).send("Chef updated successfuly");
    return res.status(500).send("Internal error.");
  }
}

export default chefsController
