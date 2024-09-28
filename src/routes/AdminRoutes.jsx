import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import UpdateUser from "../pages/UpdateUser";
import JobSeekers from "../pages/Admin/JobSeekers";
import Companies from "../pages/Admin/companies";
import CompanyProfile from "../pages/Admin/CompanyProfile";

const adminRoutesConfig = [
   { path: "dashboard", element: <AdminDashboard /> },
   { path: "dashboard/update-admin", element: <UpdateUser /> },
   { path: "dashboard/job-seekers", element: <JobSeekers /> },
   { path: "dashboard/companies", element: <Companies /> },
   { path: "dashboard/companies/:companyName/profile", element: <CompanyProfile /> },
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
