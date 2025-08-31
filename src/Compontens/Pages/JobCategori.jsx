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
        <div>
          
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-5 '>
            {
             jobs.map(jobsItems=> <JobCard key={jobsItems._id} jobsItems={jobsItems}></JobCard>)   
            }
           </div>
        </div>
    );
};

export default JobCategori;