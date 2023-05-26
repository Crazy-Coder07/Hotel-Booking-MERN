import React from 'react'
import { toast } from 'react-toastify';
import { login } from '../actions/auth';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
        let res=await login ({email,password});
        console.log("LOGIN RESPONSE",res);
        if(res.data){
          console.log("SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===>");
          console.log(res.data);
        }
    }catch(err){
      console.log(err);
      if(err.response.status===400){
        toast.error(err.response.data);
      }
    }
  }

  return (
    <>
      <div className='container-fluid bg-secondary p-5 text-center'>
        <h1>Login</h1>
      </div>
    
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <LoginForm 
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
        
    </>
  )
}

export default Login;
