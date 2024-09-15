import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import CompanyProfile from "../pages/Company/CompanyProfile";

const companyRoutesConfig = [
   { path: "profile", element: <CompanyProfile /> },
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
