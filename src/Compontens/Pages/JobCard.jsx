
import { Link } from "react-router-dom";
import team from "../../assets/officeimage/happy.jpg"

const JobCard = ({jobsItems}) => {
    const {_id,title,location,jobType,category,currency,min,max,description,company,requirements,
        applicationDeadline,salaryRange,responsibilities,status,hr_email,hr_name,company_logo}=jobsItems
    return (
       <div className="card bg-base-100  shadow-sm">

    <div className='flex gap-3'>
  
      {/* <figure className="">
    <img
      src={company_logo}
      alt="company_logo"
      className="rounded-xl w-14" />
  </figure> */}
   <figure>
          {company_logo ? (
            <img
              src={company_logo}
              alt="Company Logo"
              className="rounded-xl w-14"
            />
          ) : (
            <img
              src={team }
              alt="No Logo"
              className="rounded-xl w-14"
            />
          )}
        </figure>
  

<div>
    <h1>{company}</h1>
<p>{location}</p>
</div>
</div>

  <div className="card-body space-y-3 ">
    <h2 className="card-title">{title}</h2>
    <h1>{jobType}</h1>
    <p>{description}</p>
 <div className='flex flex-wrap gap-1'>
  {
   requirements.map((skill,index)=> <p key={index} className='rounded-2xl text-center hover:text-green-500 border'>{skill}</p> ) 
  }
 </div>
   
    <div className="card-actions">
      <p>Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency} </p>
      <Link to={`/jobDetails/${_id}`} ><button className="btn btn-primary">Job Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;