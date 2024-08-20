import React from "react";
import ProfileCard from "../../components/company/ProfileCard";
import JobCard from "../../components/JobCard";

const CompanyProfile = () => {
   return (
      <>
         <ProfileCard />
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-y-20 gap-y-6 p-6 mt-4 mx-0 md:mx-10">
            <JobCard />
            <JobCard btn_text="Edit Job"/>
            <JobCard type="Half-Time" />
            <JobCard />
            <JobCard />
         </div>
      </>
   );
};

export default CompanyProfile;
