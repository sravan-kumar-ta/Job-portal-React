import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/JobSeeker/Profile"
import UpdateUser from "../pages/UpdateUser";

const JobSeekerRoutesConfig = [
   { path: "profile", element: <Profile /> },
   { path: "profile/update", element: <UpdateUser /> },
];

const JobSeekerRoutes = () => {
   return (
      <Routes>
         {JobSeekerRoutesConfig.map((route, index) => (
            <Route
               key={index}
               path={route.path}
               element={
                  <ProtectedRoute
                     element={route.element}
                     requiredRole={"job_seeker"}
                  />
               }
            />
         ))}
      </Routes>
   );
};

export default JobSeekerRoutes;
