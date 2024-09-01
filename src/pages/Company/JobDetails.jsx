import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchJobQuery } from "../../services/companyService";
import UpdateJob from "../../components/UpdateJob";

const JobDetails = () => {
   const { jobId } = useParams();
   const [showUpdation, setShowUpdation] = useState(false);

   const { data, isLoading, isError, error } = useFetchJobQuery(jobId);

   if (isLoading) {
      return <div>Loading job details...</div>;
   }

   if (isError) {
      return <div>Error: {error.message}</div>;
   }

   return (
      <>
         {!showUpdation ? (
            <div className="flex justify-center">
               <div className="w-2/6 bg-white shadow-md rounded-lg p-6 my-4 relative">
                  <div className="flex justify-between">
                     <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        {data.title}
                     </h2>
                     <p className="text-lg text-gray-600 mb-2">
                        {data.company.title}
                     </p>
                  </div>
                  <div className="mx-20">
                     <p className="text-md text-gray-600 mb-2">
                        <strong className="mr-2">Date Posted:</strong>
                        {new Date(data.date_posted).toLocaleDateString()}
                     </p>
                     <p className="text-md text-gray-600 mb-2">
                        <strong className="mr-2">Last Date to Apply:</strong>
                        {new Date(data.last_date_to_apply).toLocaleDateString()}
                     </p>
                     <p className="text-md text-gray-600 mb-2">
                        <strong className="mr-2">Employment Type:</strong>
                        {data.employment_type}
                     </p>
                     <p className="text-md text-gray-600 mb-2">
                        <strong className="mr-2">Salary:</strong> {data.salary}
                     </p>
                     <p className="text-md text-gray-600 mb-2">
                        <strong className="mr-2">Vacancy:</strong>{" "}
                        {data.vacancy}
                     </p>
                     <p className="text-md text-gray-600 mb-2">
                        <strong className="mr-2">Description:</strong>
                        {data.description}
                     </p>
                  </div>

                  <div className="flex items-end justify-center absolute bottom-3 right-3">
                     <button
                        onClick={() => setShowUpdation(true)}
                        className="text-sm sm:text-base bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                     >
                        Update User
                     </button>
                  </div>
               </div>
            </div>
         ) : (
            <UpdateJob jobDetails={data} toggle={setShowUpdation} />
         )}
      </>
   );
};

export default JobDetails;
