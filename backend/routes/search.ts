import { ContentStatus } from "../enums/ContentStatus.enum";
import { Request, Response } from "express";
import User from "../models/User.model";

// Search endpoint
// Search by user name (?), user tags and content title
export const search = async (
    req: Request<{ contentId: number; status: ContentStatus }>,
    res: Response<User[]>
  ) => {
    res.json([])
  }