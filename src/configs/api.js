import { getCookie } from "@/utils/cookies";
import axios from "axios";

const api = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie();

    if (token) {
      request.headers["Authorization"] = `bearer ${token}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
