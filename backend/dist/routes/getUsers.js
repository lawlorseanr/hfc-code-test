"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const Content_model_1 = __importDefault(require("models/Content.model"));
const User_model_1 = __importDefault(require("models/User.model"));
const getUsers = async (req, res) => {
    // The problem with not including the Content model
    // in this lookup is the types make it look like each
    // user will have its content attached to it, which isn't
    // the case.
    const users = await User_model_1.default.findAll({
        include: [
            {
                model: Content_model_1.default,
                as: "contents"
            }
        ]
    });
    res.json(users);
};
exports.getUsers = getUsers;
