import React from "react";
import { useFetchCompaniesQuery } from "../../services/adminService";

const Companies = () => {
   const { data, isLoading, isError, error } = useFetchCompaniesQuery();
   
   if (isLoading) {
      return <div>Loading...</div>;
   }
   if (isError) {
      return <div>Error: {error.message}</div>;
   }

   return (
      <div className="md:w-2/3 mx-auto mt-4 bg-white">
         <h2 className="text-2xl font-bold text-center mb-4 sticky top-0 bg-white py-2 z-10">
            Companies
         </h2>
         <div className="md:max-h-[calc(100vh-13rem)] max-h-[calc(100vh-15rem)] overflow-y-auto">
            <table className="min-w-full table-auto border-collapse">
               <thead className="sticky top-0 bg-gray-200 z-10">
                  <tr>
                     <th className="px-4 py-2 border-b">Name</th>
                     <th className="px-4 py-2 border-b">Location</th>
                     <th className="px-4 py-2 border-b">Since</th>
                     <th className="px-4 py-2 border-b">Status</th>
                     <th className="px-4 py-2 border-b">Action</th>
                  </tr>
               </thead>
               <tbody align="center">
                  {data.map((company) => (
                     <tr key={company.id}>
                        <td className="px-4 py-2 border-b">{company.title}</td>
                        <td className="px-4 py-2 border-b">
                           {company.location}
                        </td>
                        <td className="px-4 py-2 border-b">
                           {company.established_date || "--"}
                        </td>
                        <td className="px-4 py-2 border-b">
                           {company.is_active ? "Active" : "Not active"}
                        </td>
                        <td className="px-4 py-2 border-b">
                           <button className="bg-blue-500 text-white px-4 py-1 rounded">
                              View
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Companies;
