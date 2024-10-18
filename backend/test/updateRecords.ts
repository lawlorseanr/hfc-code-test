import Content from "../models/Content.model";
import User from "../models/User.model";

export const updateRecords = async () => {
    const users = await User.findAll({
      include: [
        {
          model: Content,
          as: "contents"
        }
      ]
    });
  
    users.forEach((u) => {
      u.contents.forEach(async (c) => {
        const id = c.id;
        const rando = Math.random();
        let status = "pending";
        if (rando < 0.333) {
            status = "approved";
        } else if (rando < 0.666) {
            status = "rejected";
        }
  
        await Content.update(
          { status },
          { where: { id }},
        );
      })
    })
  }