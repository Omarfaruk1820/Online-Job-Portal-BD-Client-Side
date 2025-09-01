import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";


const AddJob = () => {
    const navigate=useNavigate()
const {user}=useAuth()
    const handlepostingJob=(event)=>{
event.preventDefault()
const formData=new FormData(event.target)

const initalData=Object.fromEntries(formData.entries())

const {min, max, currency, ...newJob}=initalData

newJob.salaryRange={min,max,currency}

newJob.requirements=newJob.requirements.split('\n')

newJob.responsibilities= newJob.responsibilities.split('\n')
console.log(newJob)
fetch('http://localhost:5000/jobs',{
    method:"POST",
    headers:{
        'content-type':"application/json"
    },
    body:JSON.stringify(newJob)

})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.insertedId){
        
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Job Post  has been Successfully Done ",
  showConfirmButton: false,
  timer: 1500
});
    }
    navigate('/mypostedjob')
})




    }
    return (
       <div className="hero bg-base-200 min-h-screen">
   <div className="card bg-base-100 w-full  shadow-2xl">
      <form onSubmit={handlepostingJob} className="card-body">
        <fieldset className="fieldset">
          <input type="text" name='title' className="input w-full" placeholder="title" />
         <input type="text" name='location' className="input w-full" placeholder="location" />
          
        <input type="date"  name='applicationDeadline' className="input w-full" placeholder="applicationDeadline" />
<div className='flex'>
      <div className='flex-1'>
          <select defaultValue="Pick a color" className="select w-full">
    <option disabled={true}>Job Type</option>
  <option>Full-Time</option>
  <option>Part-Time</option>
  <option>Hybrid</option>
  <option>Intern</option>
  <option>Remote</option>
</select>
  </div>
<div className='flex-1'>
        <select defaultValue="Pick a color" className="select w-full">
  <option disabled={true}>Job Category</option>
  <option>Engineering</option>
  <option>Finance</option>
  <option>Teaching</option>
  <option>Marketing</option>
  <option>Data Science</option>
  <option>Development</option>
</select>
</div>
</div>
<div className='grid grid-col-1 md:grid-cols-3 gap-4 w-full'>
 <input type="text" name='min' className="input w-full" placeholder="min" />
<input type="text" name='max' className="input w-full" placeholder="Max" />
<select name='currency' defaultValue="Pick a color" className="select">
  <option disabled={true}>currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>INR</option>
</select>
</div>

<input type="text" name='company' className="input w-full" placeholder="company" />
 <input type="text" name='status' className="input w-full" placeholder="status" />
<input type="email" defaultValue={user?.email} name='hr_email' className="input w-full" placeholder="email" />
 <input type="text" name='hr_name' className="input w-full" placeholder="hr_name" />
<input type="photo" name='company_logo' className="input w-full" placeholder="company_logo" />

<div className='space-y-2'>
    <textarea type='text' name='requirements' className="textarea w-full" placeholder="requirements"></textarea>
    <textarea type='text' name='description' className="textarea w-full" placeholder="description"></textarea>
    <textarea type='text' name='responsibilities' className="textarea w-full" placeholder="responsibilities"></textarea>
</div>

         
         
     
         
          <button className="btn cosmic-button mt-4">Post JOb</button>
        </fieldset>
      </form>
    </div>
  </div>

    );
};

export default AddJob;