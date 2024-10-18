import api from "../lib/api";

export const updateContent = ({
    contentId,
    status
}) => api.patch(`/content/${contentId}/status/${status}`);
