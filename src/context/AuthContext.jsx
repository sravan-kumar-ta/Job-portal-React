import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [role, setRole] = useState(null);

   const updateRole = (newRole) => {
      setRole(newRole);
      console.log("User role is updating in AuthContext.jsx & Role:", newRole);
   };

   return (
      <AuthContext.Provider value={{ role, updateRole }}>
         {children}
      </AuthContext.Provider>
   );
};

export const useAuth = () => useContext(AuthContext);
