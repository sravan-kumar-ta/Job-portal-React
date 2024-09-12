import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./_axiosInstance";

// --------------------
// API Functions
// --------------------

const fetchJobs = async () => {
   const response = await axiosInstance.get("company/jobs/");
   return response.data;
};

const createProfile = async () => {
   ///// pending
   const response = await axiosInstance.post("seeker/profile/");
   return response.data;
};

const fetchProfile = async () => {
   const response = await axiosInstance.get("seeker/profile/my_profile/");
   return response.data;
};

const fetchResumes = async () => {
   const response = await axiosInstance.get("seeker/resume/");
   return response.data;
};

const fetchExperiences = async () => {
   const response = await axiosInstance.get("seeker/experience");
   return response.data;
};

// --------------------
// Custom Hooks
// --------------------

const useFetchJobsQuery = () => {
   return useQuery({
      queryKey: ["allJobs"],
      queryFn: fetchJobs,
      staleTime: 5 * 60 * 1000,
   });
};

const useFetchProfileQuery = () => {
   return useQuery({
      queryKey: ["profile"],
      queryFn: fetchProfile,
      staleTime: 5 * 60 * 1000,
   });
};

const useFetchResumesQuery = () => {
   return useQuery({
      queryKey: ["resumes"],
      queryFn: fetchResumes,
      staleTime: 5 * 60 * 1000,
   });
};

const useFetchExperiencesQuery = () => {
   return useQuery({
      queryKey: ["experiences"],
      queryFn: fetchExperiences,
      staleTime: 5 * 60 * 1000,
   });
};

export {
   useFetchJobsQuery,
   useFetchProfileQuery,
   useFetchResumesQuery,
   useFetchExperiencesQuery,
};
