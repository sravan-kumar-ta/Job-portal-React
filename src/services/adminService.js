import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./_axiosInstance";

// --------------------
// API Functions
// --------------------

const fetchJobSeekers = async ({ page = 1 }) => {
   const response = await axiosInstance.get("admin/job-seekers/", {
      params: { page },
   });
   return response.data;
};

const fetchCompanies = async () => {
   const response = await axiosInstance.get("admin/companies/");
   return response.data;
};

// --------------------
// Custom Hooks
// --------------------

const useFetchJobSeekersQuery = ({ page = 1 }) => {
   return useQuery({
      queryKey: ["jobSeekers", page],
      queryFn: () => fetchJobSeekers({ page }),
      staleTime: 5 * 60 * 1000,
   });
};

const useFetchCompaniesQuery = () => {
   return useQuery({
      queryKey: ["companies"],
      queryFn: fetchCompanies,
      staleTime: 5 * 60 * 1000,
   });
};

export { useFetchJobSeekersQuery, useFetchCompaniesQuery };
