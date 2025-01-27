import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useGetAllProductsDashboard = (page) => {
  const queryKey = ["getAllProductsDashboard"];
  const queryFn = () => api.get(`/products?page=${page}&limit=10`);
  return useQuery({ queryKey, queryFn });
};

export { useGetAllProductsDashboard };
