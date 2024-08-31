import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "./_axiosInstance";

// --------------------
// API Functions
// --------------------

const fetchUserCompany = async () => {
   const response = await axiosInstance.get("company/user-company/");
   return response.data;
};

const fetchJobList = async () => {
   const response = await axiosInstance.get("company/jobs/");
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

const useFetchJobsQuery = () => {
   return useQuery({
      queryKey: ["jobs"],
      queryFn: fetchJobList,
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
         queryClient.invalidateQueries({ queryKey: ["jobs"] });
         console.log("Job created successfully:", data);
      },
      onError: (error) => {
         console.error("Error creating job:", error);
      },
   });
};

export {
   useFetchJobsQuery,
   useFetchUserCompanyQuery,
   useUpdateCompanyMutation,
   useCreateJobMutation,
};

// to be done....

// useFetchJobQuery

// useAddJobMutation
// useUpdateJobMutation
