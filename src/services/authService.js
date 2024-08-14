import { configureAuth } from "react-query-auth";
import { api } from "./api";

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
   userFn: async () => {
      return await api.get("/auth/user/");
   },
   loginFn: async (credentials) => {
      try {
         const { data } = await api.post("/auth/login/", credentials, {
            skipInterceptor: true,
         });
         const { access, refresh, user } = data;

         localStorage.setItem("access_token", access);
         localStorage.setItem("refresh_token", refresh);
         api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
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
         const { data } = await api.post("/auth/register/", credentials);
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
         const refreshToken = localStorage.getItem("refreshToken");
         await axios.post("/auth/logout/", { refresh: refreshToken });
         console.log("Logout successfully.");
      } catch (error) {
         console.error("Logout failed", error);
      } finally {
         localStorage.removeItem("access_token");
         localStorage.removeItem("refresh_token");

         window.location.href = "/login";
      }
   },
});

export { useUser, useLogin, useRegister, useLogout };
