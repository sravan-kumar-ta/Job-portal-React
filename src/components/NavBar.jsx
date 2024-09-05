import { NavLink } from "react-router-dom";
import { useLogout } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
   const { mutateAsync: logout } = useLogout();
   const { user } = useAuth();

   const handleLogout = () => {
      logout();
   };

   let links = [{ href: "/", text: "Home" }];

   const role = user?.role;
   if (role) {
      if (role === "admin") {
         links.push({ href: "admin/dashboard", text: "Dashboard" });
         links.push({ href: "admin/dashboard/update-admin", text: "Update" });
      } else if (role === "job_seeker") {
         links.push({ href: "job_seeker/profile", text: "Profile" });
         links.push({ href: "/update-profile", text: "Profile" });
      } else if (role === "company") {
         links.push({ href: "/company/profile", text: "Profile" });
      }
   } else {
      links.push({ href: "/signup", text: "Signup" });
      links.push({ href: "/login", text: "Login" });
   }

   return (
      <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-xl">
         <div className="container flex items-center justify-center">
            <div className="flex-col">
               {links.map((link, index) => (
                  <NavLink
                     key={index}
                     to={link.href}
                     className={
                        "text-white hover:bg-gray-700 px-3 py-2 rounded bg-gray-900 mx-1 md:mx-5"
                     }
                  >
                     {link.text}
                  </NavLink>
               ))}

               {role && (
                  <button
                     onClick={handleLogout}
                     className="text-white hover:bg-red-500 px-3 py-2 rounded bg-gray-900 mx-1 md:mx-5"
                  >
                     Logout
                  </button>
               )}
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
