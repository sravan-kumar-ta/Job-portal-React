import axios from "axios";
import { QueryClient } from "@tanstack/react-query";

const api = axios.create({
   baseURL: "http://localhost:8000/api/",
});

const queryClient = new QueryClient();

api.interceptors.response.use(
   (response) => response,
   async (error) => {
      const originalRequest = error.config;

      if (originalRequest.skipInterceptor) {
         return Promise.reject(error);
      }

      if (error.response.status === 401 && !originalRequest._retry) {
         console.log("Token Refreshing...");
         originalRequest._retry = true;
         try {
            const { data } = await api.post("auth/token/refresh/", {
               refresh_token: localStorage.getItem("refresh_token"),
            });
            localStorage.setItem("access_token", data.access_token);
            api.defaults.headers.common[
               "Authorization"
            ] = `Bearer ${data.access_token}`;
            originalRequest.headers[
               "Authorization"
            ] = `Bearer ${data.access_token}`;
            return api(originalRequest);
         } catch (refreshError) {
            console.error("Refresh token is expired", refreshError);
            // Optionally, you could log the user out here or redirect to the login page
            return Promise.reject(refreshError);
         }
      }
      return Promise.reject(error);
   }
);

export { api, queryClient };
