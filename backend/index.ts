import { Sequelize } from "sequelize-typescript";
import Content from "./models/Content.model";
import User from "./models/User.model";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

const sequelize = new Sequelize("HFC", "root", "HFC2023", {
  host: "35.239.125.245",
  dialect: "mysql",
});

sequelize.addModels([User, Content]);

// Create table if not exists
sequelize.sync();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Get users route
app.get("/users", async (req: Request, res) => {
  const users = await User.findAll();
  res.json(users);
});

// View content for user
app.get(
  "/content/:userId",
  async (
    req: Request<{
      userId: number;
    }>,
    res: Response<
      {
        id: number;
        url: string;
        status: string;
        userId: number;
      }[]
    >
  ) => {
    const userId = req.params["userId"];

    // TODO: Get content for user
    res.json([]);
  }
);

// Update content status
// If the status is not valid, return 400 status code
// If the content does not exist, return 404 status code
// If the content is already approved, you can't change the status, return 400 status code

// Search endpoint
// Search by user title, user tags and content title

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
