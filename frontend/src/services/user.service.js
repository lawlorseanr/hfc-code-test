import api from "../lib/api";

export const getUsers = () => api.get("/users");
