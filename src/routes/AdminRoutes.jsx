import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UpdateUser from "../pages/UpdateUser";
import JobSeekers from "../pages/Admin/JobSeekers";

const adminRoutesConfig = [
   { path: "dashboard", element: <AdminDashboard /> },
   { path: "dashboard/update-admin", element: <UpdateUser /> },
   { path: "dashboard/job-seekers", element: <JobSeekers /> },
];

const AdminRoutes = () => {
   return (
      <Routes>
         {adminRoutesConfig.map((route, index) => (
            <Route
               key={index}
               path={route.path}
               element={
                  <ProtectedRoute
                     element={route.element}
                     requiredRole={"admin"}
                  />
               }
            />
         ))}
      </Routes>
   );
};

export default AdminRoutes;
