import { createContext, useEffect, useState } from "react";
import auth from './Firebase.config';
import {  createUserWithEmailAndPassword, onAuthStateChanged,
   signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
  const provider = new GoogleAuthProvider();
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)
  const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const userLogIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userLogOut=()=>{
    return signOut(auth)
  }
  const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }
  useEffect(()=>{
    const unSubScribe=onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser)
     setLoading(false)
    })
    return ()=>{
return unSubScribe;
    }
  },[])

  const userInfo={
    user,
    loading,
    createUser,
    userLogIn,
    userLogOut,
    loginWithGoogle,


  }
  return (
    <AuthContext.Provider value={userInfo}>
      {
        children
      }
      
    </AuthContext.Provider>
  );
};

export default AuthProvider;