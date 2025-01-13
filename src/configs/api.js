import axios from "axios";

const api = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

export default api;
