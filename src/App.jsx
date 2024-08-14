import {
   BrowserRouter as Router,
   Route,
   Routes,
   useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import LoginForm from "./pages/Login";
import AdminProfile from "./pages/Admin/AdminProfile";
import CompanyProile from "./pages/Company/CompanyProfile";
import JobList from "./pages/JobSeeker/JobList";
import NavBar from "./components/NavBar";

function App() {
   return (
      <Router>
         <ConditionalNavBar>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/register" element={<Register />} />
               <Route path="/login" element={<LoginForm />} />

               <Route path="/admin-profile" element={<AdminProfile />} />
               <Route path="/company-profile" element={<CompanyProile />} />
               <Route path="/joblist" element={<JobList />} />
            </Routes>
         </ConditionalNavBar>
      </Router>
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
