import { section } from "framer-motion/client";
import { Link, useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const jobsLoad=useLoaderData()
    const {_id,title,location,jobType,category,min,max,
        applicationDeadline,salaryRange,company}=jobsLoad
    return (
      <section className="py-24 px-4 relative">
          <div className='space-y-1 '>
            <h1 className='text-2xl font-semibold'>All About the Job:</h1>
           <h1 className='text-2xl font-semibold'> {jobsLoad.title} </h1> 
           <h1>Company Name: {jobsLoad.company} </h1> 
           <h1>applicationDeadline {jobsLoad.applicationDeadline}</h1>
          <Link to={`/applyjob/${_id}`} > <button className='btn btn-accent'>Apply Now</button></Link>
        </div>
      </section>
    );
};

export default JobDetails;