"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Content_model_1 = __importDefault(require("./models/Content.model"));
const User_model_1 = __importDefault(require("./models/User.model"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const getUsers_1 = require("routes/getUsers");
const getContent_1 = require("routes/getContent");
const patchContent_1 = require("routes/patchContent");
const app = (0, express_1.default)();
const PORT = 4000;
const sequelize = new sequelize_typescript_1.Sequelize("HFC", "root", "HFC2023", {
    host: "35.239.125.245",
    dialect: "mysql",
});
sequelize.addModels([User_model_1.default, Content_model_1.default]);
// Create table if not exists
sequelize.sync();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
app.get("/users", getUsers_1.getUsers);
app.get("/content/:userId", getContent_1.getContent);
app.patch("/content/:contentId/status/:status", patchContent_1.patchContent);
// Search endpoint
// Search by user title, user tags and content title
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
