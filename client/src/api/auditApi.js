import api from "./axios";

export const getLogs = (params) => {
  return api.get("/audit/logs", { params });
};

export const uploadLogs = (logs) => {
  return api.post("/audit/upload", logs);
};

export const getStats = () => {
  return api.get("/audit/stats");
};