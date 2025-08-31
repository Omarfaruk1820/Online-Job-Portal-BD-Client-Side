import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import reactLottie from "../../assets/Setting.json"
import Lottie from "lottie-react";
import SocilaLogin from "../Pages/SocilaLogin";

const Login = () => {
  const {userLogIn}=useContext(AuthContext)
  const location=useLocation()
  const from =location.state||"/"
  const navigate=useNavigate()
    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event .target
        const email=form.email.value
        const password=form.password.value
        const userLogin={email,password}
        console.log(userLogin)
        userLogIn(email,password)
        .then(result=>{
          (result.user)
                  Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You Logged  successfully done",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset()
          navigate(from)
        })
        .catch(error=>{
          console.log(error.message)
          
        })

    }
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie animationData={reactLottie} ></Lottie>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
       <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
     <h1 className='text-center'> New to Job Portal  <Link className='text-green-500' to='/register'>Please Register</Link></h1>
      <div className="divider">OR</div>
     <SocilaLogin></SocilaLogin>
    </div>
  </div>
  
</div>
    );
};

export default Login;