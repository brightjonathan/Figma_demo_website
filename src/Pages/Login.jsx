import React from 'react';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth, provider} from '../Firebase/Firebase-config';

const Login = ({setIsAuth}) => {


  const navigate = useNavigate();

  //google signup functionality
  const GoogleSignUp = () =>{

    try {
      signInWithPopup(auth, provider).then((result)=>{
        localStorage.setItem("is-Auth", true);
        setIsAuth(true)
        navigate('/')
       })
    } catch (error) {
      console.log(error);
      
    }

  };



  return (
    <div className='loginPage'>
      <p>Sign in with Google</p>
      <button className='login-with-google-btn' onClick={GoogleSignUp} >Sign in with Google </button>
    </div>
  )
}

export default Login;
