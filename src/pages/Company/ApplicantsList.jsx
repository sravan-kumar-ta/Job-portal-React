import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useFetchCompanyApplicationsQuery } from "../../services/companyService";

const ApplicantsList = () => {
   const { data, isLoading, error } = useFetchCompanyApplicationsQuery();

   if (error) return <p>Error: {error.message}</p>;

   const formattedDate = (appliedAt) => {
      const date = new Date(appliedAt);
      const day = date.getUTCDate();
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getUTCFullYear();
      const formattedDate = `${day} ${month} ${year}`;

      return formattedDate;
   };

   return (
      <table className="w-full text-sm text-left text-gray-500 mt-10">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
               <th scope="col" className="pl-6 py-3">
                  #
               </th>
               <th scope="col" className="px-6 py-3">
                  Applicant
               </th>
               <th scope="col" className="px-6 py-3 text-center">
                  Application Date
               </th>
               <th scope="col" className="px-6 py-3 text-center">
                  Status
               </th>
               <th scope="col" className="px-6 py-3 text-center">
                  Action
               </th>
            </tr>
         </thead>
         <tbody>
            {isLoading ? (
               <>
                  {[...Array(5)].map((_, index) => (
                     <tr key={index} className="bg-white border-b">
                        {Array(4)
                           .fill()
                           .map((_, idx) => (
                              <td key={idx} className="px-6 py-4">
                                 <Skeleton />
                              </td>
                           ))}
                     </tr>
                  ))}
               </>
            ) : (
               data.map((job, index) => (
                  <tr key={job.id} className="bg-white border-b">
                     <th
                        scope="row"
                        className="pl-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                     >
                        {index + 1}
                     </th>
                     <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                     >
                        {job.job.title}
                     </th>
                     <td className="px-6 py-4 text-center">
                        {formattedDate(job.applied_at)}
                     </td>
                     <td className="px-6 py-4 text-center">
                        {{
                           pending: (
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                 Pending
                              </span>
                           ),
                           accepted: (
                              <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                 Accepted
                              </span>
                           ),
                           rejected: (
                              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                 Rejected
                              </span>
                           ),
                        }[job.status] || ""}
                     </td>
                     <td className="px-6 py-4 text-center">
                        <button className="bg-sky-500 text-white px-2 rounded-md font-semibold shadow-sm hover:bg-gray-100 hover:text-sky-500 ease-in duration-100">
                           View
                        </button>
                     </td>
                  </tr>
               ))
            )}
         </tbody>
      </table>
   );
};

export default ApplicantsList;
