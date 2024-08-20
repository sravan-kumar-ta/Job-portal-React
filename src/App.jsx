import {
   BrowserRouter as Router,
   Route,
   Routes,
   useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LoginForm from "./pages/Login";
import NavBar from "./components/NavBar";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import JobSeekers from "./pages/Admin/JobSeekers";
import UpdateAdmin from "./pages/Admin/UpdateAdmin";
import CompanyProfile from "./pages/Company/CompanyProfile";
import UpdateJobSeeker from "./pages/JobSeeker/UpdateJobSeeker";

function App() {
   return (
      <AuthProvider>
         <Router>
            <ConditionalNavBar>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<LoginForm />} />

                  <Route
                     path="/dashboard"
                     element={
                        <ProtectedRoute
                           element={<AdminDashboard />}
                           requiredRole={"admin"}
                        />
                     }
                  />
                  <Route path="/dashboard/job-seekers" element={<JobSeekers />} />
                  <Route path="/update-admin" element={<UpdateAdmin />} />
                  

                  <Route path="/update-profile" element={<UpdateJobSeeker />} />
                  <Route path="/company/profile" element={<CompanyProfile />} />
               </Routes>
            </ConditionalNavBar>
         </Router>
      </AuthProvider>
   );
}

function ConditionalNavBar({ children }) {
   const location = useLocation();
   const hideNavBarRoutes = ["/register", "/login"];

   return (
      <>
         {!hideNavBarRoutes.includes(location.pathname) && <NavBar />}
         {children}
      </>
   );
}

export default App;
