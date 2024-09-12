import React, { useState } from "react";
import { IoAddCircleOutline, IoDocumentText } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ImMail4 } from "react-icons/im";
import { MdWork } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import AddResume from "../../components/jobSeeker/AddResume";
import Resume from "../../components/jobSeeker/Resume";
import Experience from "../../components/jobSeeker/Experience";
import AddExperience from "../../components/jobSeeker/AddExperience";
import {
   useFetchExperiencesQuery,
   useFetchProfileQuery,
   useFetchResumesQuery,
} from "../../services/seekerService";

const Profile = () => {
   const { user } = useAuth();
   const [isAddingResume, setIsAddingResume] = useState(false);
   const [isAddingExp, setIsAddingExp] = useState(false);
   const { data: profile, isLoading, isError, error } = useFetchProfileQuery();
   const {
      data: resumes,
      isLoading: resumeIsLoading,
      isError: resumeIsError,
      error: resumeError,
   } = useFetchResumesQuery();

   const {
      data: experiences,
      isLoading: isLoadingExp,
      isError: isErrorExp,
      error: errorExp,
   } = useFetchExperiencesQuery();

   const formatDate = (dateString) => {
      const [year, month] = dateString.split("-");
      const date = new Date(year, month - 1);
      return date.toLocaleString("default", {
         month: "short",
         year: "numeric",
      });
   };

   const toggleAdd = () => {
      setIsAddingResume((prev) => !prev);
   };

   const toggleExp = () => {
      setIsAddingExp((prev) => !prev);
   };

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div className="p-6 bg-gray-100 min-h-screen">
         <div className="lg:w-3/5 xl:w-2/5 mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
               My Profile
            </h1>

            {/* User Details Section */}
            <div className="flex bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6 relative">
               <img
                  className="w-32 h-32 rounded-full my-auto"
                  src={
                     profile?.profile_photo ||
                     "https://loremflickr.com/320/320/girl"
                  }
                  alt="Profile photo"
               />
               <div className="ml-6">
                  <p className="font-medium leading-none text-gray-900">
                     {user.get_full_name}
                  </p>
                  <div className="flex text-gray-700 py-2">
                     <div className="flex items-center">
                        <FaUserCircle className="mr-1" />
                        <p>{user.username}</p>
                     </div>
                     <div className="flex items-center">
                        <ImMail4 className="ml-4 mr-1" />
                        <p>{user.email}</p>
                     </div>
                  </div>

                  <p className="mt-2 text-sm text-gray-900">{profile.bio}</p>
                  <div className="absolute right-6 bottom-6">
                     <NavLink
                        to={"update-admin"}
                        className="border border-blue-600 text-blue-600 text-sm font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
                     >
                        Update
                     </NavLink>
                  </div>
               </div>
            </div>

            {/* Resumes and Experience Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
               {/* Resumes Section */}
               <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                     <div className="flex">
                        <IoDocumentText className="text-blue-600 text-3xl mr-4" />
                        <h2 className="text-2xl font-semibold text-gray-800">
                           {isAddingResume ? "Add Resume" : "Resumes"}
                        </h2>
                     </div>
                     {isAddingResume ? (
                        <IoMdCloseCircleOutline
                           onClick={toggleAdd}
                           className="text-red-600 cursor-pointer transition-all duration-300"
                           size={21}
                        />
                     ) : (
                        <button
                           onClick={toggleAdd}
                           className="flex items-center border border-blue-600 text-blue-600 text-sm font-semibold py-1 px-4 rounded hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                           Add
                           <IoAddCircleOutline className="ml-1" />
                        </button>
                     )}
                  </div>

                  {isAddingResume ? (
                     <AddResume />
                  ) : (
                     <>
                        {resumes?.map((resume) => (
                           <Resume
                              key={resume.id}
                              title={resume.resume_title}
                              link={resume.resume}
                           />
                        ))}
                     </>
                  )}
               </div>

               {/* Experience Section */}
               <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                     <div className="flex">
                        <MdWork className="text-green-600 text-3xl mr-4" />
                        <h2 className="text-2xl font-semibold text-gray-800">
                           {isAddingExp ? "Add Experience" : "Experiences"}
                        </h2>
                     </div>
                     {isAddingExp ? (
                        <IoMdCloseCircleOutline
                           onClick={toggleExp}
                           className="text-red-600 cursor-pointer transition-all duration-300"
                           size={21}
                        />
                     ) : (
                        <button
                           onClick={toggleExp}
                           className="flex items-center border border-blue-600 text-blue-600 text-sm font-semibold py-1 px-4 rounded hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                           Add
                           <IoAddCircleOutline className="ml-1" />
                        </button>
                     )}
                  </div>
                  {isAddingExp ? (
                     <AddExperience />
                  ) : (
                     <>
                        {experiences.map((exp) => (
                           <Experience
                              jobRole={exp.job_title}
                              company={exp.company}
                              start={formatDate(exp.start_date)}
                              end={formatDate(exp.end_date)}
                           />
                        ))}
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;
