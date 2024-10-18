import { Request, Response } from "express";
import Content from "../models/Content.model";

export const getContent = async (
    req: Request<{ userId: number }>,
    res: Response<Content[]>
  ) => {
    const { userId } = req.params;
    const content = await Content.findAll({ where: { userId }})
    res.json(content);
  }