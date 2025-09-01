import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const ApplyJob = () => {
  const { id } = useParams();
 const { user } = useAuth();
 const navigate=useNavigate()

  const handleApplyFromSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const resume = form.resume.value;
    const github = form.github.value;
    const link = form.link.value;
    const submitForm = { resume, github, link };
    console.log(submitForm);
    const jobApplication = {
      job_id: id,
      applicat_email: user.email,
      resume,
      github,
      link,
    };
    fetch("http://localhost:5000/jobapplication/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            form.reset()
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job Application Successfully Done",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/myApplication')
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">Job Apply Here!</h1>
        <form onSubmit={handleApplyFromSubmit} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Resume</label>
            <input
              type="url"
              name="resume"
              className="input w-full"
              placeholder="Resume"
            />
            <label className="label">GitHub</label>
            <input
              type="url"
              name="github"
              className="input w-full"
              placeholder="GitHub"
            />

            <label className="label">Linkdin</label>
            <input
              type="url"
              name="link"
              className="input w-full"
              placeholder="Linkdin"
            />

            <button className="btn cosmic-button mt-4">Apply</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ApplyJob;
