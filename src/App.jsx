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

function App() {
   return (
      <AuthProvider>
         <Router>
            <ConditionalNavBar>
               <Routes>
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
                  <Route path="/" element={<Home />} />
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
