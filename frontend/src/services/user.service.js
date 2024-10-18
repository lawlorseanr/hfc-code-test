import api from "../lib/api";

export const getUsers = () => api.get("/users");

export const searchUsers = (query) => api.post("/users/search", { query });