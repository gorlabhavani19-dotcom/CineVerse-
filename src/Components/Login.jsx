import React, { useRef, useState } from 'react'
import Header from './Header.jsx'
import logo from '../netflix.jpg'
import { checkvalidatedata } from '../utils/validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const[showAuth,setShowAuth]=useState(false);
  const[isSign,setisSign]=useState(true);
  const[errorMessage,seterrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
 
  const handlebutton=()=>{
   //validate data
console.log("isSign",isSign);

  const message=checkvalidatedata(email.current.value,password.current.value,name.current?.value,isSign);
 seterrorMessage(message);
if(message)return;
if(!isSign){
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
 
   setShowAuth(false);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   seterrorMessage(errorCode+" "+errorMessage);
  });
}else{
//sign in logic
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setShowAuth(false);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage)
  })
 
}
}
  const togglesignform=()=>{
setisSign(!isSign)
  }
  return (
    <div>

    <Header/>   
     <div
      className="h-screen w-full relative flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* DARK BLUR OVERLAY */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-lg"></div>

      {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className='text-5xl font-bold mb-6'>
          AI Suggested Movies 🎬
        </h1>

        <p className='text-gray-300 mb-8'>
          Smarter movie recommendations powered by AI
        </p>

        <button
          onClick={() => setShowAuth(true)}
          className='px-8 py-3 rounded-xl cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 font-bold'
        >
          Get Started
        </button>
      </div>
</div>
      {showAuth && (
        <div className='fixed inset-0 bg-black/10 flex  items-center justify-center z-50'>

      <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute mx-auto right-0 left-0 my-40 p-12 w-3/12 rounded-lg '>

      <h1 className='text-white font-bold text-3xl m-2'>{isSign?"Sign In":"Sign up"}</h1>
       {!isSign&&(<input ref={name} type='text' placeholder='Full Name' className='p-2 my-2 bg-gray-700 w-full text-white border border-gray-500 rounded-md '/>)}
        <input ref={email} type="text" placeholder='Email Address' className='p-2 my-2 bg-gray-700 w-full text-white border border-gray-500 rounded-md '/>
      <input ref={password} type='password' placeholder='password' className='p-2 my-2 bg-gray-700 w-full text-white border border-gray-500 rounded-md '/>
      <p className='text-red-700 p-2 font-bold pb-0'>{errorMessage}</p>
      <button className='p-2 my-4 g-gray-50 cursor-pointer bg-pink-700 text-white w-full rounded-lg' onClick={handlebutton}>{isSign?"Sign In":"Sign up"}</button>
        <p className='text-white cursor-pointer' onClick={togglesignform}>{isSign?"New to CineVersa?please sign up":"Already registered Sign in"}</p>
      </form>
         </div>
      )}
    </div>
  )
}

export default Login