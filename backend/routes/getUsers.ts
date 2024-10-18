import { Request, Response } from "express";
import Content from "../models/Content.model";
import User from "../models/User.model";

export const getUsers = async (
    req: Request,
    res: Response<User[]>
  ) => {
    // The problem with not including the Content model
    // in this lookup is the types make it look like each
    // user will have its content attached to it, which isn't
    // the case unless the model is included.
    const users = await User.findAll({
      include: [
        {
          model: Content,
          as: "contents"
        }
      ]
    });
    res.json(users);
}