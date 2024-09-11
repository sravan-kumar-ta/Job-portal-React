import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./_axiosInstance";

// --------------------
// API Functions
// --------------------

const fetchJobs = async () => {
   const response = await axiosInstance.get("company/jobs/");
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

export { useFetchJobsQuery };
