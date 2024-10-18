import { Op } from 'sequelize';
import { Request, Response } from "express";
import User from "../models/User.model";
import Content from "../models/Content.model";

// Search endpoint
// Search by user name (?), user tags and content title
export const search = async (
    req: Request<{ query: string }>,
    res: Response<User[]>
  ) => {
    const {query} = req.body;
    const search = query.split(" ");

    const byName = search.map((s: string) => ({
      name: { [Op.like]: `%${s}%` }
    }));

    const byTags = search.map((s: string) => ({
      tags: { [Op.like]: `%${s}%` }
    }));

    const byUser = byName.concat(byTags);

    const byTitle = search.map((s: string) => ({
      title: { [Op.like]: `%${s}%` }
    }));

    const byContent = [].concat(byTitle);
    
    const nameTagResults = await User.findAll({
      where: { [Op.or]: byUser },
      include: [{
        model: Content,
        as: "contents"
      }]
    });

    const contentResults = await Content.findAll({
      where: { [Op.or]: byContent },
    })

    const nameTagUserIds = nameTagResults.map((u) => u.id);

    const remainingUserIds = contentResults
      .filter((c) => !nameTagUserIds.includes(c.userId))
      .map((c) => c.userId);

    const usersFromContents = await User.findAll({
      where: {
        id: {
          [Op.in]: remainingUserIds
        }
      },
      include: [{
        model: Content,
        as: "contents"
      }]
    })

    const allUsers = nameTagResults.concat(usersFromContents);
    res.json(allUsers);
  }