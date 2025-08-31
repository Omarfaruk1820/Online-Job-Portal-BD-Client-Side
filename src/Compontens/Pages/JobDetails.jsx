import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const jobsLoad=useLoaderData()
    const {_id,title,location,jobType,category,min,max,
        applicationDeadline,salaryRange,company}=jobsLoad
    return (
        <div className='space-y-1'>
           <h1 className='text-2xl font-semibold'> job details: {jobsLoad.title} </h1> 
           <h1>Company Name: {jobsLoad.company} </h1> 
           <h1>applicationDeadline {jobsLoad.applicationDeadline}</h1>
          <Link to={`/applyjob/${_id}`} > <button className='btn btn-accent'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;