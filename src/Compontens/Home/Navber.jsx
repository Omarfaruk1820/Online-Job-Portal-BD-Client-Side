
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';


const Navber = () => {
  const {user,userLogOut}=useContext(AuthContext)

  const hadleLogout=()=>{
userLogOut()
.then(()=>{
         Swal.fire({
   position: "top-end",
   icon: "success",
   title: "Your Log Out Succeessfully",
   showConfirmButton: false,
   timer: 1500
 });
})
.catch(error=>{
  console.log(error.message)
})
  }
 
  

    const navLinks=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to="mypostedjob">My Posted Job</NavLink></li>
    <li><NavLink to='addjob'>Add Job</NavLink></li>
    <li><NavLink to="myApplication">My Application</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
{
  user?<>
  <span className='text-black'>{user?.email}</span>
  <button onClick={hadleLogout} className='btn btn-secondary'>Log out</button>
  </>: <>
  <Link to='/login'> <button className='btn btn-primary' >Login</button> </Link>
  </>
}
  </div>
</div>
        </div>
    );
};

export default Navber;