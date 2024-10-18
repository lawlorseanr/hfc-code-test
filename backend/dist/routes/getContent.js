"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContent = void 0;
const Content_model_1 = __importDefault(require("models/Content.model"));
const getContent = async (req, res) => {
    const { userId } = req.params;
    const content = await Content_model_1.default.findAll({ where: { userId } });
    res.json(content);
};
exports.getContent = getContent;
