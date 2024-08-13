import { configureAuth } from "react-query-auth";
import { api } from "./api";

const { useUser, useLogin, useRegister, useLogout } = configureAuth({
   userFn: () => api.get("/me"),
   loginFn: async (credentials) => {
      const { data } = await api.post("/auth/login/", credentials);
      const { access, refresh } = data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      api.defaults.headers.common["Authorization"] = `Bearer ${access}`;
   },
   registerFn: async (credentials) => {
      const { data } = await api.post("/auth/register/", credentials);
      return data;
   },
   logoutFn: () => api.post("/logout"),
});

export { useUser, useLogin, useRegister, useLogout };
