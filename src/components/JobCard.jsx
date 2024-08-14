import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";

const JobCard = ({
   type = "Full-Time",
   title = "Software Developer",
   company = "Example Corp",
   experience = "2-4 years",
   salary = "₹5,00,000 - ₹10,00,000",
   location = "Bangalore, India",
   description = "We are looking for a talented software developer to join our team.",
}) => {
   const excerpt = (text, length) => {
      if (text.length <= length) return text;
      return text.substring(0, length) + "...";
   };

   return (
      <div className="md:w-9/12 w-full mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
         <span className="text-gray-600 bg-gray-100 py-1 px-2 rounded-bl-lg absolute top-0 right-0">
            {type}
         </span>

         <header className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
         </header>
         <hr />

         <div className="flex items-center ml-4 mt-2">
            <FaRegBuilding className="text-gray-700 mr-1" />
            <p className="text-gray-600">{company}</p>
         </div>

         <div className="flex items-center ml-4">
            <MdCalendarMonth className="text-gray-700 mr-1" />
            <p className="text-gray-500">{experience}</p>
         </div>

         <div className="flex items-center ml-4">
            <MdCurrencyRupee className="text-gray-700 mr-1" />
            <p className="text-gray-500">{salary}</p>
         </div>
         <div className="flex items-center ml-4 mb-2">
            <FaLocationDot className="text-gray-600 mr-1" />
            <p className="text-gray-600">{location}</p>
         </div>
         <hr />

         <section className="px-4 pb-4 mt-2">
            <p className="text-gray-700">
               {excerpt(description, 75)}
               <a href="" className="text-blue-600 hover:text-blue-800"> Read more...</a>
            </p>
         </section>

         <footer className="px-4 py-2 bg-gray-100 border-t border-gray-200 text-center">
            <button className="bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
               Apply Now
            </button>
         </footer>
      </div>
   );
};

export default JobCard;
