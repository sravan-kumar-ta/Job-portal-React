import React from "react";
import { FaUser, FaBuilding, FaUserCog } from "react-icons/fa";

const AdminDashboard = ({
   jobSeekersCount = 120,
   companiesCount = 45,
   adminName = "Admin Name",
   adminEmail = "admin@example.com",
   username = "admin.username",
}) => {
   return (
      <div className="p-6 bg-gray-100 min-h-screen">
         <div className="md:w-2/5 mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
               Admin Dashboard
            </h1>

            {/* Admin Details Section */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
               <div className="flex items-center mb-4">
                  <FaUserCog className="text-red-600 text-3xl mr-4" />
                  <h2 className="text-2xl font-semibold text-gray-800">
                     Admin Details
                  </h2>
               </div>
               <div className="flex flex-col md:flex-row justify-between">
                  <div>
                     <p className="text-gray-600 text-lg mb-2">
                        Full Name: {adminName}
                     </p>
                     <p className="text-gray-600 text-lg mb-2">
                        Username: {username}
                     </p>
                     <p className="text-gray-600 text-lg mb-2">
                        Email: {adminEmail}
                     </p>
                  </div>
                  <div className="flex items-end justify-end">
                     <button className="border border-blue-600 text-blue-600 text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                        Update
                     </button>
                  </div>
               </div>
            </div>

            {/* Job Seekers and Companies Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Job Seekers Section */}
               <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                     <FaUser className="text-blue-600 text-3xl mr-4" />
                     <h2 className="text-2xl font-semibold text-gray-800">
                        Job Seekers
                     </h2>
                  </div>
                  <div className="flex justify-between items-center">
                     <p className="text-gray-600 text-lg">
                        {jobSeekersCount} registered
                     </p>
                     <button className="border border-blue-600 text-blue-600 text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                        View all
                     </button>
                  </div>
               </div>

               {/* Companies Section */}
               <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                     <FaBuilding className="text-green-600 text-3xl mr-4" />
                     <h2 className="text-2xl font-semibold text-gray-800">
                        Companies
                     </h2>
                  </div>
                  <div className="flex justify-between items-center">
                     <p className="text-gray-600 text-lg">
                        {companiesCount} registered
                     </p>
                     <button className="border border-blue-600 text-blue-600 text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300">
                        View all
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminDashboard;
