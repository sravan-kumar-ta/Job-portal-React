import React from "react";
import { useRegister } from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
   const { mutateAsync: register } = useRegister();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      const role = e.target.role.value;
      const firstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;

      if (password !== confirmPassword) {
         alert("Passwords do not match!");
         return;
      }

      try {
         await register({
            username,
            email,
            password,
            role,
            first_name: firstName,
            last_name: lastName,
         });
         navigate("/login");
      } catch (error) {
         console.error("Registration failed:", error);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Username:</label>
            <input type="text" name="username" required />
         </div>
         <div>
            <label>Email:</label>
            <input type="email" name="email" required />
         </div>
         <div>
            <label>Password:</label>
            <input type="password" name="password" required />
         </div>
         <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" required />
         </div>
         <div>
            <label>Role:</label>
            <select name="role" required>
               <option value="job_seeker">Job Seeker</option>
               <option value="company">Company</option>
               <option value="admin">Admin</option>
            </select>
         </div>
         <div>
            <label>First Name:</label>
            <input type="text" name="firstName" required />
         </div>
         <div>
            <label>Last Name:</label>
            <input type="text" name="lastName" required />
         </div>
         <button type="submit">Register</button>
      </form>
   );
};

export default Register;
