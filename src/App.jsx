import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LoginForm from "./pages/Login";
import AdminRoutes from "./routes/AdminRoutes";
import JobSeekerRoutes from "./routes/JobSeekerRoutes";

function App() {
   return (
      <AuthProvider>
         <BrowserRouter>
            <ConditionalNavBar>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="admin/*" element={<AdminRoutes />} />
                  <Route path="job_seeker/*" element={<JobSeekerRoutes />} />
               </Routes>
            </ConditionalNavBar>
         </BrowserRouter>
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
