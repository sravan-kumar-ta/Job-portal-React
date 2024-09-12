import React from "react";
import { FaBuilding, FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { GrEdit } from "react-icons/gr";
import { LuTimer } from "react-icons/lu";

const Experience = ({ exp }) => {
   const formatDate = (dateString) => {
      const [year, month] = dateString.split("-");
      const date = new Date(year, month - 1);
      return date.toLocaleString("default", {
         month: "short",
         year: "numeric",
      });
   };

   return (
      <div className="flex justify-between bg-slate-100 p-2 my-2 relative">
         <div className="flex items-center space-x-1">
            <HiOutlineBadgeCheck className="text-sky-800" />
            <div className="border-l-2 border-l-zinc-400 pl-1">
               <strong className="text-zinc-600">{exp.job_title}</strong>
               <div className="flex items-center">
                  <FaBuilding className="mr-1 text-zinc-600" size={14} />
                  <p className="text-zinc-500">{exp.company}</p>
               </div>
               <div className="flex items-center">
                  <LuTimer className="mr-1 text-zinc-600" size={14} />
                  <div className="flex">
                     <p className="text-zinc-500">
                        {formatDate(exp.start_date)}
                     </p>
                     <p className="text-zinc-500 mx-2">to</p>
                     <p className="text-zinc-500">{formatDate(exp.end_date)}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute flex items-start space-x-3 right-2">
            <GrEdit className="text-yellow-500 cursor-pointer" />
            <FaRegTrashAlt className="text-red-500 cursor-pointer" />
         </div>
      </div>
   );
};

export default Experience;
