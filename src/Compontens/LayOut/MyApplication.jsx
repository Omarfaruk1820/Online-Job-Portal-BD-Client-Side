import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";


const MyApplication = () => {
    const {user}=useAuth()
    
    const [jobs,setJobs]=useState([])
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/jobapplication?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        });
    }
  }, [user?.email]);
    return (
        <div className="py-24 px-4 relative">
           <div className="overflow-x-auto">
  <table className="md:table  ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
<th className="">Company Photo</th>
        <th>User Email</th>
        <th>Job Title</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
     
   {
      jobs.map((job,index)=>  <tr key={job._id}>
        <th>{index +1}</th>
        <td> <img className="w-12 h-12" src={job.company_logo} alt="" /> </td>
        <td>{job.applicat_email}</td>
        <td>{job.title}</td>
        <td>{job.company}</td>
      </tr> )
   }
   
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyApplication;