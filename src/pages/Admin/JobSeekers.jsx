import React from "react";

const jobSeekers = [
   {
      id: 1,
      name: "John Doe",
      profession: "Software Engineer",
      location: "San Francisco, CA",
      experience: "5 years",
   },
   {
      id: 2,
      name: "Jane Smith",
      profession: "Data Scientist",
      location: "New York, NY",
      experience: "3 years",
   },
   {
      id: 3,
      name: "David Johnson",
      profession: "UI/UX Designer",
      location: "Austin, TX",
      experience: "4 years",
   },
   {
      id: 4,
      name: "Emily Brown",
      profession: "Product Manager",
      location: "Seattle, WA",
      experience: "6 years",
   },
   {
      id: 5,
      name: "Michael Davis",
      profession: "DevOps Engineer",
      location: "Boston, MA",
      experience: "7 years",
   },
   {
      id: 6,
      name: "Emma Wilson",
      profession: "Frontend Developer",
      location: "Chicago, IL",
      experience: "2 years",
   },
   {
      id: 7,
      name: "Olivia Martinez",
      profession: "Marketing Specialist",
      location: "Miami, FL",
      experience: "5 years",
   },
   {
      id: 8,
      name: "James Anderson",
      profession: "Full Stack Developer",
      location: "Denver, CO",
      experience: "8 years",
   },
   {
      id: 9,
      name: "Sophia Thomas",
      profession: "Business Analyst",
      location: "Los Angeles, CA",
      experience: "4 years",
   },
   {
      id: 10,
      name: "Liam Lee",
      profession: "Cybersecurity Analyst",
      location: "Dallas, TX",
      experience: "3 years",
   },
   {
      id: 11,
      name: "Isabella White",
      profession: "HR Manager",
      location: "Phoenix, AZ",
      experience: "9 years",
   },
   {
      id: 12,
      name: "Alexander Harris",
      profession: "Cloud Architect",
      location: "Houston, TX",
      experience: "6 years",
   },
   {
      id: 13,
      name: "Mason Walker",
      profession: "Backend Developer",
      location: "Philadelphia, PA",
      experience: "5 years",
   },
   {
      id: 14,
      name: "Mia King",
      profession: "Content Writer",
      location: "San Diego, CA",
      experience: "4 years",
   },
   {
      id: 15,
      name: "Charlotte Scott",
      profession: "Sales Manager",
      location: "Portland, OR",
      experience: "7 years",
   },
   {
      id: 16,
      name: "Benjamin Hall",
      profession: "QA Engineer",
      location: "Atlanta, GA",
      experience: "3 years",
   },
   {
      id: 17,
      name: "Amelia Young",
      profession: "Graphic Designer",
      location: "Las Vegas, NV",
      experience: "6 years",
   },
   {
      id: 18,
      name: "Elijah Allen",
      profession: "Network Engineer",
      location: "Minneapolis, MN",
      experience: "8 years",
   },
   {
      id: 19,
      name: "Harper Wright",
      profession: "Recruiter",
      location: "Salt Lake City, UT",
      experience: "2 years",
   },
   {
      id: 20,
      name: "Lucas King",
      profession: "SEO Specialist",
      location: "Orlando, FL",
      experience: "5 years",
   },
   {
      id: 21,
      name: "Ava Baker",
      profession: "Software Architect",
      location: "Charlotte, NC",
      experience: "10 years",
   },
   {
      id: 22,
      name: "William Green",
      profession: "Mobile Developer",
      location: "Nashville, TN",
      experience: "4 years",
   },
   {
      id: 23,
      name: "Evelyn Adams",
      profession: "Social Media Manager",
      location: "New Orleans, LA",
      experience: "5 years",
   },
   {
      id: 24,
      name: "Henry Perez",
      profession: "AI Engineer",
      location: "Pittsburgh, PA",
      experience: "6 years",
   },
   {
      id: 25,
      name: "Ella Campbell",
      profession: "Technical Writer",
      location: "Kansas City, MO",
      experience: "3 years",
   },
   {
      id: 26,
      name: "Logan Cooper",
      profession: "Blockchain Developer",
      location: "Columbus, OH",
      experience: "4 years",
   },
   {
      id: 27,
      name: "Scarlett Flores",
      profession: "Operations Manager",
      location: "Sacramento, CA",
      experience: "7 years",
   },
   {
      id: 28,
      name: "Sebastian Ramirez",
      profession: "System Administrator",
      location: "Detroit, MI",
      experience: "5 years",
   },
   {
      id: 29,
      name: "Luna Reed",
      profession: "Machine Learning Engineer",
      location: "Baltimore, MD",
      experience: "4 years",
   },
   {
      id: 30,
      name: "Jack Edwards",
      profession: "Digital Marketing Specialist",
      location: "Tampa, FL",
      experience: "6 years",
   },
   {
      id: 31,
      name: "Aiden Stewart",
      profession: "Data Engineer",
      location: "Indianapolis, IN",
      experience: "3 years",
   },
   {
      id: 32,
      name: "Chloe Morris",
      profession: "Web Developer",
      location: "Cleveland, OH",
      experience: "5 years",
   },
   {
      id: 33,
      name: "Daniel Price",
      profession: "IT Manager",
      location: "Raleigh, NC",
      experience: "9 years",
   },
   {
      id: 34,
      name: "Zoe Brooks",
      profession: "Cloud Engineer",
      location: "St. Louis, MO",
      experience: "7 years",
   },
   {
      id: 35,
      name: "Matthew Bell",
      profession: "Mobile App Developer",
      location: "Milwaukee, WI",
      experience: "6 years",
   },
   {
      id: 36,
      name: "Sofia Cox",
      profession: "HR Specialist",
      location: "Cincinnati, OH",
      experience: "4 years",
   },
   {
      id: 37,
      name: "Grayson Cook",
      profession: "Security Engineer",
      location: "Richmond, VA",
      experience: "5 years",
   },
   {
      id: 38,
      name: "Mila Rivera",
      profession: "UI Designer",
      location: "Jacksonville, FL",
      experience: "3 years",
   },
   {
      id: 39,
      name: "Ethan Powell",
      profession: "DevOps Specialist",
      location: "Louisville, KY",
      experience: "4 years",
   },
   {
      id: 40,
      name: "Avery Hughes",
      profession: "Project Manager",
      location: "Birmingham, AL",
      experience: "8 years",
   },
   {
      id: 41,
      name: "Lily Patterson",
      profession: "Content Strategist",
      location: "Buffalo, NY",
      experience: "5 years",
   },
   {
      id: 42,
      name: "Jackson Howard",
      profession: "Full Stack Engineer",
      location: "Rochester, NY",
      experience: "7 years",
   },
   {
      id: 43,
      name: "Grace Ward",
      profession: "AI Researcher",
      location: "Oklahoma City, OK",
      experience: "6 years",
   },
   {
      id: 44,
      name: "Wyatt Murphy",
      profession: "Product Designer",
      location: "Des Moines, IA",
      experience: "4 years",
   },
   {
      id: 45,
      name: "Victoria Rogers",
      profession: "UX Researcher",
      location: "Memphis, TN",
      experience: "3 years",
   },
   {
      id: 46,
      name: "Jayden Reed",
      profession: "Business Development",
      location: "Newark, NJ",
      experience: "7 years",
   },
   {
      id: 47,
      name: "Addison Morgan",
      profession: "Solutions Architect",
      location: "Omaha, NE",
      experience: "9 years",
   },
   {
      id: 48,
      name: "Levi Bailey",
      profession: "Systems Analyst",
      location: "Anchorage, AK",
      experience: "5 years",
   },
   {
      id: 49,
      name: "Aubrey Parker",
      profession: "Financial Analyst",
      location: "Madison, WI",
      experience: "4 years",
   },
   {
      id: 50,
      name: "Dylan Bryant",
      profession: "Data Analyst",
      location: "Boise, ID",
      experience: "2 years",
   },
   {
      id: 51,
      name: "Nora Russell",
      profession: "UI Developer",
      location: "Little Rock, AR",
      experience: "3 years",
   },
   {
      id: 52,
      name: "Carter Griffin",
      profession: "IT Support Specialist",
      location: "Harrisburg, PA",
      experience: "5 years",
   },
   {
      id: 53,
      name: "Ellie West",
      profession: "Cloud Security Engineer",
      location: "Baton Rouge, LA",
      experience: "6 years",
   },
];

const JobSeekers = () => {
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
                     <th className="px-4 py-2 border-b">Profession</th>
                     <th className="px-4 py-2 border-b">Location</th>
                     <th className="px-4 py-2 border-b">Experience</th>
                     <th className="px-4 py-2 border-b">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {jobSeekers.map((seeker) => (
                     <tr key={seeker.id}>
                        <td className="px-4 py-2 border-b">{seeker.name}</td>
                        <td className="px-4 py-2 border-b">
                           {seeker.profession}
                        </td>
                        <td className="px-4 py-2 border-b">
                           {seeker.location}
                        </td>
                        <td className="px-4 py-2 border-b">
                           {seeker.experience}
                        </td>
                        <td className="px-4 py-2 border-b">
                           <button className="bg-blue-500 text-white px-4 py-1 rounded">
                              View
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default JobSeekers;
