import React from "react";
import JobCard from "../components/JobCard";
import { useFetchJobsbyCompanyQuery } from "../services/companyService";

const Home = () => {
   const { data: jobsData, error, isLoading } = useFetchJobsbyCompanyQuery();

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6 md:gap-y-20 p-6 mt-4 mx-0 lg:mx-20">
         {jobsData?.map((job) => (
            <JobCard
               key={job.id}
               title={job.title}
               type={job.employment_type}
               company={job.company.title}
               salary={job.salary}
               description={job.description}
               location={job.company.location}
               last_date_to_apply={job.last_date_to_apply}
            />
         ))}
      </div>
   );
};

export default Home;
