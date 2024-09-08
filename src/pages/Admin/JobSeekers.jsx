import React, { useEffect, useState } from "react";
import { useFetchJobSeekersQuery } from "../../services/adminService";
import LoadMoreButton from "../../components/admin/LoadMoreButton";

const JobSeekers = () => {
   const [page, setPage] = useState(1);
   const [allData, setAllData] = useState([]);
   const [loadMore, setLoadMore] = useState(false);
   const [hasFetched, setHasFetched] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const { isError, error, refetch } = useFetchJobSeekersQuery({ page });

   useEffect(() => {
      if (!hasFetched) {
         setIsLoading(true);
         refetch().then((res) => {
            setAllData([...allData, ...res.data.results]);
            setLoadMore(Boolean(res.data.next));
         });
         setHasFetched(true);
      }
      setIsLoading(false);
   }, [page]);

   const handleLoadMore = () => {
      setPage(page + 1);
      setHasFetched(false);
   };

   return (
      <div className="md:w-2/3 mx-auto mt-4 bg-white">
         <h2 className="text-2xl font-bold text-center mb-4 sticky top-0 bg-white py-2 z-10">
            Job Seekers
         </h2>
         <div className="md:max-h-[calc(100vh-13rem)] max-h-[calc(100vh-15rem)] overflow-y-auto">
            <table className="min-w-full table-auto border-collapse">
               <thead className="sticky top-0 bg-gray-200 z-10">
                  <tr>
                     <th className="px-4 py-2 border-b">Name</th>
                     <th className="px-4 py-2 border-b">Username</th>
                     <th className="px-4 py-2 border-b">Email</th>
                     <th className="px-4 py-2 border-b">Experience</th>
                     <th className="px-4 py-2 border-b">Action</th>
                  </tr>
               </thead>
               <tbody align="center">
                  {allData.map((seeker) => (
                     <tr key={seeker.id}>
                        <td className="px-4 py-2 border-b">
                           {seeker.get_full_name}
                        </td>
                        <td className="px-4 py-2 border-b">
                           {seeker.username}
                        </td>
                        <td className="px-4 py-2 border-b">{seeker.email}</td>
                        <td className="px-4 py-2 border-b">Experience</td>
                        <td className="px-4 py-2 border-b">
                           <button className="bg-blue-500 text-white px-4 py-1 rounded">
                              View
                           </button>
                        </td>
                     </tr>
                  ))}
                  <tr className="text-center">
                     <td colSpan={5} className="py-3">
                        {loadMore && (
                           <LoadMoreButton
                              onClick={handleLoadMore}
                              isLoading={isLoading}
                           />
                        )}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default JobSeekers;
