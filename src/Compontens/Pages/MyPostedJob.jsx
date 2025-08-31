import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router-dom";


const MyPostedJob = () => {
    const {user}=useAuth()
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/jobs?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))

    },[user?.email])
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Job</th>
        <th>Application Count</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
      {
        jobs.map((job,index)=> <tr key={job._id}>
        <th>{index +1}</th>
        <td>{job.title}</td>
        <td>{job.applicationDeadline}</td>
        <td>{job.applicationCount}</td>
        <td>
            <Link to={`/viewapplication/${job._id}`}>
            <button className='btn btn-accent'>View Application</button>
            </Link>
        </td>
      </tr> )
      }
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedJob;