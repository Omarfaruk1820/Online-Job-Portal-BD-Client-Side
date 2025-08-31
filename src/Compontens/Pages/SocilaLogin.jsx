import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


const SocilaLogin = () => {
    const {loginWithGoogle}=useContext(AuthContext)
    const handleSignInGoogle=()=>{
        loginWithGoogle()
        .then((result)=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div>
          <h1 className='text-center'> <button className='btn btn-accent w-full' onClick={handleSignInGoogle}>Google</button></h1> 
        </div>
    );
};

export default SocilaLogin;