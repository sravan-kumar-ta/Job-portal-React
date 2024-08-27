import React from "react";
import ProfileCard from "../../components/company/ProfileCard";
import JobCard from "../../components/JobCard";
import { useQuery } from "@tanstack/react-query";
import { fetchUserCompany, fetchJobList } from "../../services/companyService";

const CompanyProfile = () => {
   const {
      data: companyData,
      error: companyError,
      isLoading: companyLoading,
   } = useQuery({
      queryKey: ["userCompany"],
      queryFn: fetchUserCompany,
   });

   const {
      data: jobsData,
      error: jobsError,
      isLoading: jobsLoading,
   } = useQuery({
      queryKey: ["jobs"],
      queryFn: fetchJobList,
   });

   if (companyLoading || jobsLoading) return <div>Loading...</div>;
   if (companyError) return <div>Error: {companyError.message}</div>;
   if (jobsError) return <div>Error: {jobsError.message}</div>;

   return (
      <>
         <ProfileCard
            name={companyData?.title}
            location={companyData?.location}
            description={companyData?.description}
            companyWebsite={companyData?.website}
         />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-y-20 gap-y-6 p-6 mt-4 mx-0 md:mx-10">
            {jobsData?.map((job) => (
               <JobCard
                  key={job.id}
                  title={job.title}
                  type={job.employment_type}
                  company={job.company.title}
                  salary={job.salary}
                  description={job.description}
                  location={job.company.location}
               />
            ))}
         </div>
      </>
   );
};

export default CompanyProfile;
