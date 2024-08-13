import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services/authService";

const LoginForm = () => {
   const login = useLogin();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const password = e.target.password.value;

      try {
         await login.mutateAsync({ username, password });
         navigate("/");
      } catch (error) {
         console.error("Login failed:", error);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Email:</label>
            <input type="text" name="username" required />
         </div>
         <div>
            <label>Password:</label>
            <input type="password" name="password" required />
         </div>
         <button type="submit">Login</button>
      </form>
   );
};

export default LoginForm;
