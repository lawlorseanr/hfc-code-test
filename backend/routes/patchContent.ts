import { ContentStatus } from "../enums/ContentStatus.enum";
import { Request, Response } from "express";
import Content from "../models/Content.model";

// Update content status
// If the status is not valid, return 400 status code
// If the content does not exist, return 404 status code
// If the content is already approved, you can't change the status, return 400 status code
export const patchContent = async (
    req: Request<{ contentId: number; status: ContentStatus }>,
    res: Response<Content>
  ) => {
    const { contentId, status } = req.params;

    if (!Object.values(ContentStatus).includes(status)) {
      res.sendStatus(400);
      return;
    }

    const content = await Content.findOne({ where: { id: contentId }});

    if (!content) {
      res.sendStatus(404);
      return;
    }

    if (content.status === ContentStatus.APPROVED) {
      res.sendStatus(400);
      return;
    }

    const [affectedRows] = await Content.update(
      { status },
      { where: { id: contentId }},
    );

    if (affectedRows !== 1) {
      res.sendStatus(400);
      return;
    }

    const updatedContent = await Content.findOne(
      { where: { id: contentId }}
    );

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
  }