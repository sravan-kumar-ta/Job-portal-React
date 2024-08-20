import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element: Component, requiredRole, ...rest }) => {
   const { role, updateRole } = useAuth();
   const location = useLocation();
   const { isLoading, error, refetch } = useUser({ enabled: false });

   const [isFetching, setIsFetching] = useState(false);
   const [hasFetched, setHasFetched] = useState(false);

   useEffect(() => {
      if (!role && localStorage.getItem("access_token")) {
         setIsFetching(true);
         refetch()
            .then((response) => {
               if (response.data?.role) {
                  updateRole(response.data.role);
                  setHasFetched(true);
               }
               setIsFetching(false);
            })
            .catch(() => {
               setIsFetching(false);
               setHasFetched(true); // stop loading state indefinitely
            });
      } else {
         setHasFetched(true);
      }
   }, [role, refetch, updateRole]);

   if (isLoading || isFetching) {
      return <div>Loading...</div>;
   }

   if (!hasFetched) {
      return <div>Loading...</div>;
   }

   if (error || !role) {
      return <Navigate to="/login" state={{ from: location }} />;
   }

   if (requiredRole && role !== requiredRole) {
      return <Navigate to="/" />;
   }

   return Component;
};

export default ProtectedRoute;
