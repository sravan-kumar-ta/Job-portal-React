import React from "react";
import JobCard from "../components/JobCard";

const Home = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-y-20 gap-y-6 p-6 mt-4 mx-0 md:mx-10">
         <JobCard />
         <JobCard />
         <JobCard type="Half-Time" />
         <JobCard />
         <JobCard />
      </div>
   );
};

export default Home;
