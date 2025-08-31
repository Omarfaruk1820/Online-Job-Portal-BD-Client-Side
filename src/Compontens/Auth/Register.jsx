import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
 import lotteFilte from "../../assets/login.json"
import Lottie from "lottie-react";
import SocilaLogin from "../Pages/SocilaLogin";
const Register = () => {
    const {createUser}=useContext(AuthContext)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name=form.name.value
    const email=form.email.value
    const password=form.password.value
    const users={name,email,password}
    console.log(users)
    createUser(email,password)
    .then(result=>{
        (result.user)
         form.reset()
         Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your Regitration has been successfully done",
  showConfirmButton: false,
  timer: 1500
});
    })
    .catch(error=>{
        console.log(error.message)
       
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="text-center lg:text-left ">
     <Lottie className='py-10' animationData={lotteFilte }></Lottie>
     
    </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         
          <form onSubmit={handleRegister} className="card-body">
             <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <h1 className="text-center">
            {" "}
            Already have an account{" "}
            <Link className="text-orange-500" to="/login">
              Please Login
            </Link>
          </h1>
           <div className="divider">OR</div>
          <SocilaLogin></SocilaLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
