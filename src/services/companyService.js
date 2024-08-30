import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "./_axiosInstance";

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

// Hooks -----

const useFetchUserCompany = () => {
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
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["userCompany"] });
      },
   });
};

export { useFetchJobsQuery, useFetchUserCompany, useUpdateCompanyMutation };

// useFetchJobsQuery
// useFetchJobQuery
// useAddJobMutation
// useUpdateJobMutation
// useDeleteJobMutation
