import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "./_axiosInstance";

// --------------------
// API Functions
// --------------------

const fetchUserCompany = async () => {
   const response = await axiosInstance.get("company/user-company/");
   return response.data;
};

const fetchJobListbyCompany = async () => {
   const response = await axiosInstance.get("company/company-jobs/");
   return response.data;
};

const updateUserCompany = async (companyData) => {
   const response = await axiosInstance.patch(
      "company/user-company/",
      companyData
   );
   return response.data;
};

const createJob = async (jobData) => {
   const response = await axiosInstance.post("company/jobs/", jobData);
   return response.data;
};

const fetchJob = async (jobId) => {
   const response = await axiosInstance.get(`company/jobs/${jobId}/`);
   return response.data;
};

const updateJob = async ({ jobId, jobData }) => {
   const response = await axiosInstance.patch(
      `company/company-jobs/${jobId}/`,
      jobData
   );
   return response.data;
};

const fetchApplicationsByJob = async (jobID) => {
   const response = await axiosInstance.get(
      "company/applications/list_by_job/",
      {
         params: { jobID },
      }
   );
   return response.data;
};

const updateApplication = async ({ id, data }) => {
   const response = await axiosInstance.patch(
      `company/applications/${id}/`,
      data
   );
   return response.data;
};

// --------------------
// Custom Hooks
// --------------------

const useFetchUserCompanyQuery = () => {
   return useQuery({
      queryKey: ["userCompany"],
      queryFn: fetchUserCompany,
      staleTime: 5 * 60 * 1000,
   });
};

const useFetchJobsbyCompanyQuery = () => {
   return useQuery({
      queryKey: ["company-jobs"],
      queryFn: fetchJobListbyCompany,
      staleTime: 5 * 60 * 1000,
   });
};

const useUpdateCompanyMutation = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: updateUserCompany,
      onSuccess: (data) => {
         queryClient.invalidateQueries({ queryKey: ["userCompany"] });
         console.log("Company updated successfully:", data);
      },
      onError: (error) => {
         console.error("Error updating company:", error);
      },
   });
};

const useCreateJobMutation = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: createJob,
      onSuccess: (data) => {
         queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
         console.log("Job created successfully:", data);
      },
      onError: (error) => {
         console.error("Error creating job:", error);
      },
   });
};

const useFetchJobQuery = (jobId) => {
   return useQuery({
      queryKey: ["job" + jobId],
      queryFn: () => fetchJob(jobId),
      staleTime: 5 * 60 * 1000,
      enabled: !!jobId, // Only run the query if jobId is truthy
   });
};

const useUpdateJobMutation = () => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: updateJob,
      onSuccess: (data, variables) => {
         queryClient.invalidateQueries({ queryKey: ["job" + variables.jobId] });
         queryClient.invalidateQueries({ queryKey: ["company-jobs"] });
      },
      onError: (error) => {
         console.error("Error updating job:", error);
      },
   });
};

const useApplicationsByJobQuery = (jobID) => {
   return useQuery({
      queryKey: ["applications", jobID],
      queryFn: () => fetchApplicationsByJob(jobID),
      enabled: !!jobID,
      staleTime: 5 * 60 * 1000,
   });
};

const useUpdateApplicationMutation = (jobID) => {
   const queryClient = useQueryClient();

   return useMutation({
      mutationFn: updateApplication,
      
      onMutate: async ({ id, data }) => {
         await queryClient.cancelQueries(["applications", jobID]);
         const previousApplications = queryClient.getQueryData(["applications", jobID]);
         
         queryClient.setQueryData(["applications", jobID], (oldApplications) => {
            return oldApplications.map((application) =>
               application.id === id ? { ...application, ...data } : application
            );
         });
         
         return { previousApplications };
      },

      onSuccess: (data) => {
         // console.log("successs", data);
      },
      
      onError: (err, variables, context) => {
         queryClient.setQueryData(["applications", jobID], context.previousApplications);
         console.error("error", err);
      },
   });
};

export {
   useFetchUserCompanyQuery,
   useUpdateCompanyMutation,
   useCreateJobMutation,
   useFetchJobsbyCompanyQuery,
   useFetchJobQuery,
   useUpdateJobMutation,
   useApplicationsByJobQuery,
   useUpdateApplicationMutation,
};
