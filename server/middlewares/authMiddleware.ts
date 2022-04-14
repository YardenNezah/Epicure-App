import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import usersHandler from "../db/services/usersHandler.js";

const auth = async (req: Request, res: Response, next: NextFunction) => {

  const token = req.header("auth-token");
  if (!token) return res.status(403).send("access denied- there is no token");

  try {
    const tokenSecret: any = process.env.TOKEN_SECRET;
    const verified:any = jwt.verify(token, tokenSecret);
    const result = await usersHandler.getUserByIdHandler(verified.id);
    if (!result) res.status(403).send("access denied.");

    req.body.user = result;
    return next();
  } catch (err) {
    return res.status(403).send("access denied- error");
  }
};

export default auth;
