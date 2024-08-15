import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaLocationDot, FaIndustry } from "react-icons/fa6";

const ProfileCard = ({
   logoUrl = "https://via.placeholder.com/100",
   name = "Example Corp",
   description = "We are a leading company in the industry, providing top-notch services and products to our clients worldwide.",
   location = "Bangalore, India",
   industry = "Technology",
   companyWebsite = "https://example.com",
}) => {
   return (
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg p-6 mt-3">
         <div className="flex items-center">
            <img
               src={logoUrl}
               alt={`${name} Logo`}
               className="w-24 h-24 rounded-full object-cover mr-6"
            />
            <div>
               <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
               <div className="flex items-center mt-2 text-gray-600">
                  <FaLocationDot className="mr-2" />
                  <p>{location}</p>
               </div>
               <div className="flex items-center mt-1 text-gray-600">
                  <FaIndustry className="mr-2" />
                  <p>{industry}</p>
               </div>
            </div>
         </div>
         <p className="text-gray-700 mt-4">{description}</p>

         <div className="md:flex justify-between mt-4">
            <div className="flex items-center">
               <FaGlobe className="text-gray-600 mr-2" />
               <a
                  href={companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
               >
                  {companyWebsite}
               </a>
            </div>
            <div className="flex mt-4 md:mt-0 justify-between">
               <button className="text-sm sm:text-base mr-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Add Job
               </button>
               <button className="text-sm sm:text-base bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  Update Profile
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProfileCard;
