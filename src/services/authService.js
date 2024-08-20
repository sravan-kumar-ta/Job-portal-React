import { configureAuth } from "react-query-auth";
import { axiosInstance } from "./api";

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
   userFn: async () => {
      const token = localStorage.getItem("access_token");
      if (!token) throw new Error("No access token found");

      const response = await axiosInstance.get("/auth/user/", {
         headers: {
            Authorization: `Bearer ${token}`,
         },
      });

      return response.data;
   },
   loginFn: async (credentials) => {
      try {
         const { data } = await axiosInstance.post("/auth/login/", credentials, {
            skipInterceptor: true,
         });
         const { access, refresh, user } = data;

         localStorage.setItem("access_token", access);
         localStorage.setItem("refresh_token", refresh);
         axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${access}`;
         return { status: "success", user };
      } catch (error) {
         if (error.response?.data) {
            return { status: "error", data: error.response.data };
         }
         return {
            status: "error",
            data: {
               detail:
                  "Login failed. Please check your credentials and try again.",
            },
         };
      }
   },
   registerFn: async (credentials) => {
      try {
         const { data } = await axiosInstance.post("/auth/register/", credentials);
         return { status: "success", data };
      } catch (error) {
         if (error.response?.status === 400) {
            return { status: "error", data: error.response.data };
         }
         return {
            status: "error",
            data: "An unexpected error occurred. Please try again.",
         };
      }
   },
   logoutFn: async () => {
      try {
         await axiosInstance.post('/auth/logout/', {
           refresh: localStorage.getItem('refresh_token')
         });
      } catch (error) {
         console.error("Logout failed", error);
      } finally {
         localStorage.removeItem("access_token");
         localStorage.removeItem("refresh_token");
         console.log("Logout successfully.");

         window.location.href = "/login";
      }
   },
});

export { useUser, useLogin, useRegister, useLogout };
