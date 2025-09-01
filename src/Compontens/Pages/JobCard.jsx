
import { Link } from "react-router-dom";
import team from "../../assets/officeimage/happy.jpg"

const JobCard = ({jobsItems}) => {
    const {_id,title,location,jobType,category,currency,min,max,description,company,requirements,
        applicationDeadline,salaryRange,responsibilities,status,hr_email,hr_name,company_logo}=jobsItems
    return (
       <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover space-y-2 p-4">

    <div className='flex gap-1'>
  <figure className="">
          {company_logo ? (
            <img
              src={company_logo}
              alt="Company Logo"
              className="rounded-xl w-14 object-cover transition-transform duration-500 group-hover:scale-110"
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
    <h1 className="text-start">{company}</h1>
<p>{location}</p>
</div>
</div>

  <div className="">
    <h2 className="text-xl font-semibold mb-1">{title}</h2>
    {/* <h1>{jobType}</h1> */}
    <p className="text-wrap text-muted-foreground text-sm mb-4">{description}</p>
 <div className='flex flex-wrap justify-evenly items-center gap-1'>
  {
   requirements.map((skill,index)=> <p key={index} className='rounded-2xl border-2 text-muted-foreground text-sm '>{skill}</p> ) 
  }
 </div>
   
    <div className="flex justify-evenly items-center p-2">
      <p>Salary:{salaryRange.min}-{salaryRange.max} {salaryRange.currency} </p>
      <Link to={`/jobDetails/${_id}`} ><button className="btn cosmic-button btn-sm">Job Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;