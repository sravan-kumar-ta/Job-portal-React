import React, { useState } from "react";
import ProfileCard from "../../components/company/ProfileCard";
import JobCard from "../../components/JobCard";
import {
   useFetchUserCompany,
   useFetchJobsQuery,
} from "../../services/companyService";
import CompanyForm from "../../components/company/CompanyForm";
import UserCard from "../../components/UserCard";
import { useAuth } from "../../context/AuthContext";
import UpdateUserForm from "../../components/company/UpdateUserForm";
import JobForm from "../../components/company/JobForm";

const CompanyProfile = () => {
   const [activeSection, setActiveSection] = useState("jobs");

   const handleSectionChange = (section) => {
      setActiveSection(section);
   };
   const {
      data: companyData,
      error: companyError,
      isLoading: companyLoading,
   } = useFetchUserCompany();

   const { user } = useAuth();

   const {
      data: jobsData,
      error: jobsError,
      isLoading: jobsLoading,
   } = useFetchJobsQuery();

   const companyDetails = {
      title: companyData?.title || "",
      location: companyData?.location || "",
      website: companyData?.website || "",
      established_date: companyData?.established_date || "",
      description: companyData?.description || "",
   };

   if (companyLoading || jobsLoading) return <div>Loading...</div>;
   if (companyError) return <div>Error: {companyError.message}</div>;
   if (jobsError) return <div>Error: {jobsError.message}</div>;

   return (
      <>
         <div className="lg:flex justify-evenly">
            <ProfileCard
               initialValues={companyDetails}
               onEdit={() => handleSectionChange("updateCompany")}
               onAddJob={() => handleSectionChange("addJob")}
            />
            <UserCard
               user={user}
               onEdit={() => handleSectionChange("updateUser")}
            />
         </div>
         {activeSection === "jobs" && (
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
         )}
         {activeSection === "updateCompany" && (
            <CompanyForm
               initialValues={companyDetails}
               onClick={() => handleSectionChange("jobs")}
            />
         )}
         {activeSection === "updateUser" && (
            <UpdateUserForm
               user={user}
               onClick={() => handleSectionChange("jobs")}
            />
         )}
         {activeSection === "addJob" && (
            <JobForm onClick={() => handleSectionChange("jobs")} />
         )}
      </>
   );
};

export default CompanyProfile;
