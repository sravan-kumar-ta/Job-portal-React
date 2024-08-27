import { axiosInstance } from "./_axiosInstance";

export const fetchUserCompany = async () => {
   const response = await axiosInstance.get("company/user-company/");
   return response.data;
};

export const updateUserCompany = async (companyData) => {
   const response = await axiosInstance.patch(
      "company/user-company/",
      companyData
   );
   return response.data;
};

export const fetchJobList = async () => {
   const response = await axiosInstance.get("company/jobs/");
   return response.data;
};
