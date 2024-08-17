import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import { useLogout } from "./authService";

const axiosInstance = axios.create({
   baseURL: "http://localhost:8000/api/",
   headers: {
      "Content-Type": "application/json",
   },
});

const queryClient = new QueryClient();

axiosInstance.interceptors.response.use(
   (response) => response,
   async (error) => {
      const originalRequest = error.config;

      if (originalRequest.skipInterceptor) {
         return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;

         try {
            console.log("Token Refreshing...");

            const response = await axios.post(
               "http://localhost:8000/api/auth/token/refresh/",
               { refresh: localStorage.getItem("refresh_token") }
            );

            const { access, refresh } = response.data;

            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);

            axiosInstance.defaults.headers.common[
               "Authorization"
            ] = `Bearer ${access}`;

            originalRequest.headers["Authorization"] = `Bearer ${access}`;

            return axiosInstance(originalRequest);
         } catch (refreshError) {
            console.error("Refresh token is expired", refreshError);
            useLogout();
            return Promise.reject(refreshError);
         }
      }
      return Promise.reject(error);
   }
);

export { axiosInstance, queryClient };
