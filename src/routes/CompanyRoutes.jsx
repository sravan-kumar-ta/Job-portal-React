import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import CompanyProfile from "../pages/Company/CompanyProfile";
import JobDetails from "../pages/Company/JobDetails";

const companyRoutesConfig = [
   { path: "profile", element: <CompanyProfile /> },
   { path: "jobs/:jobId", element: <JobDetails /> },
];

const CompanyRoutes = () => {
   return (
      <Routes>
         {companyRoutesConfig.map((route, index) => (
            <Route
               key={index}
               path={route.path}
               element={
                  <ProtectedRoute
                     element={route.element}
                     requiredRole={"company"}
                  />
               }
            />
         ))}
      </Routes>
   );
};

export default CompanyRoutes;
