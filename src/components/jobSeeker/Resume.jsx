import React from "react";
import { GrEdit } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRectangleList } from "react-icons/fa6";

const Resume = ({ link, title }) => {
   return (
      <div className="flex items-center justify-between bg-slate-100 p-2 my-2">
         <div className="flex items-center">
            <FaRectangleList className="mr-2 text-sky-800" />
            <a
               href={link}
               className="text-blue-600 hover:underline"
               target="_blank"
            >
               {title}
            </a>
         </div>
         <div className="flex items-center">
            <GrEdit className="text-yellow-500 cursor-pointer" />
            <FaRegTrashAlt className="ml-3 text-red-500 cursor-pointer" />
         </div>
      </div>
   );
};

export default Resume;
