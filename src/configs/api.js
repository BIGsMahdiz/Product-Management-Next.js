import axios from "axios";

import { getCookie } from "@/utils/cookies";

const api = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    if (typeof window !== undefined) {
      const token = getCookie();

      if (token) {
        request.headers["Authorization"] = `bearer ${token}`;
      }
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
