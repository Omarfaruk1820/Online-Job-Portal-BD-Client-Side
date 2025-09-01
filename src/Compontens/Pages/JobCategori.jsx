import { useEffect, useState } from "react";
import JobCard from "./JobCard";


const JobCategori = () => {
    const [jobs,setJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div className="max-w-5xl mx-auto">
          
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
             jobs.map(jobsItems=> <JobCard key={jobsItems._id} jobsItems={jobsItems}></JobCard>)   
            }
           </div>
        </div>
    );
};

export default JobCategori;