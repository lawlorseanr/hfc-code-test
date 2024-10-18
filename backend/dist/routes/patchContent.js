"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchContent = void 0;
const ContentStatus_enum_1 = require("enums/ContentStatus.enum");
const Content_model_1 = __importDefault(require("models/Content.model"));
// Update content status
// If the status is not valid, return 400 status code
// If the content does not exist, return 404 status code
// If the content is already approved, you can't change the status, return 400 status code
const patchContent = async (req, res) => {
    const { contentId, status } = req.params;
    if (!Object.values(ContentStatus_enum_1.ContentStatus).includes(status)) {
        res.sendStatus(400);
        return;
    }
    const content = await Content_model_1.default.findOne({ where: { id: contentId } });
    if (!content) {
        res.sendStatus(404);
        return;
    }
    if (content.status === ContentStatus_enum_1.ContentStatus.APPROVED) {
        res.sendStatus(400);
        return;
    }
    const [affectedRows] = await Content_model_1.default.update({ status }, { where: { id: contentId } });
    if (affectedRows !== 1) {
        res.sendStatus(400);
        return;
    }
    const updatedContent = await Content_model_1.default.findOne({ where: { id: contentId } });
    // This case would likely be handled more gracefully, or 
    // preferably a { returning: true } flag could be used
    // to update and provide the updated record in one step.
    // 
    // Here the record was updated but the response is errored. But
    // the user would be able to see the update if they refreshed the page.
    if (!updatedContent) {
        res.sendStatus(404);
        return;
    }
    res.json(updatedContent);
};
exports.patchContent = patchContent;
