import { useQuery } from "@tanstack/react-query";

import api from "@/configs/api";

const useGetAllProducts = () => {
  const queryKey = ["getAllProducts"];
  const queryFn = () => api.get("/products");
  return useQuery({ queryKey, queryFn });
};

export { useGetAllProducts };
