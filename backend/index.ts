import { Sequelize } from "sequelize-typescript";
import Content from "./models/Content.model";
import User from "./models/User.model";
import express from "express";
import cors from "cors";
import { getUsers } from "./routes/getUsers";
import { getContent } from "./routes/getContent";
import { patchContent } from "./routes/patchContent";
import { search } from "./routes/search";
import { updateRecords } from "./test/updateRecords";

// Define server
const app = express();
const PORT = 4000;

// Initialize sequelize
const sequelize = new Sequelize("HFC", "root", "HFC2023", {
  host: "35.239.125.245",
  dialect: "mysql",
});

sequelize.addModels([User, Content]);

// Create table if not exists
sequelize.sync();

// Define CORS rules
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// body
app.use(express.json());

// App routes
app.get("/users", getUsers);
app.post("/users/search", search)
app.get("/content/:userId", getContent);
app.patch("/content/:contentId/status/:status", patchContent);

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  try {
    // update records on save so everything isn't just "Approved"
    await updateRecords();
  } catch (e) {
    console.error("Unable to update initial records.")
  }
});
