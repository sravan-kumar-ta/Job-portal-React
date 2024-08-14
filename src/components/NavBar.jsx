import { useLogout } from "../services/authService";

const NavBar = () => {
   const { mutateAsync: logout } = useLogout(); 

   const handleLogout = () => {
      logout();
   };

   return (
      <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-xl">
         <div className="container flex items-center justify-center">
            <div className="flex-col">
               <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded bg-gray-900 mx-1 md:mx-5"
               >
                  Home
               </a>
               <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded bg-gray-900 mx-1 md:mx-5"
               >
                  About
               </a>
               <a
                  href="#"
                  className="text-white hover:bg-gray-700 px-3 py-2 rounded bg-gray-900 mx-1 md:mx-5"
               >
                  Services
               </a>
               <button
                  onClick={handleLogout}
                  className="text-white hover:bg-red-500 px-3 py-2 rounded bg-gray-900 mx-1 md:mx-5"
               >
                  Logout
               </button>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
