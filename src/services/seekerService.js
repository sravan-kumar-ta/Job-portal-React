import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

const createResume = async (data) => {
   const response = await axiosInstance.post("seeker/resume/", data, {
      headers: {
         "Content-Type": "multipart/form-data",
      },
   });
   return response.data;
};

const deleteResume = async (id) => {
   const response = await axiosInstance.delete(`seeker/resume/${id}/`);
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

const useCreateResumeMutation = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: createResume,
      onMutate: async (newResume) => {
         // optimistic updates
         await queryClient.cancelQueries({ queryKey: ["resumes"] }); // cancels any ongoing refetches
         const previousResumes = queryClient.getQueryData(["resumes"]);
         queryClient.setQueryData(["resumes"], (old) => [...old, newResume]);
         return { previousResumes };
         // If we use only invalidateQueries, there is a delay for server response
      },
      onError: (err, newResume, context) => {
         console.log(err);
         queryClient.setQueryData(["resumes"], context.previousResumes);
      },
      onSettled: () => {
         queryClient.invalidateQueries({ queryKey: ["resumes"] });
      },
   });
};

const useDeleteResumeMutation = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: deleteResume,
      onMutate: async (resumeId) => {
         // Optimistically update cache before mutation
         await queryClient.cancelQueries({ queryKey: ['resumes'] });
         const previousResumes = queryClient.getQueryData(['resumes']);
         queryClient.setQueryData(['resumes'], (oldResumes) => 
            oldResumes.filter((resume) => resume.id !== resumeId)
         );

         return { previousResumes };
      },
      onError: (err, resumeId, context) => {
         queryClient.setQueryData(['resumes'], context.previousResumes);
      },
      onSettled: () => {
         queryClient.invalidateQueries({ queryKey: ['resumes'] });
      },
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
   useCreateResumeMutation,
   useDeleteResumeMutation,
   useFetchExperiencesQuery,
};
