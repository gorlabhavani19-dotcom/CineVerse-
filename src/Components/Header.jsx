import React from 'react'
import logo from "../Netflix_Logo_PMS.png";
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';
import { useSelector} from 'react-redux';
import { MdLogout } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { toggle } from '../utils/Gptslice';
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user);
  console.log("user", user);
  function handleSignout() {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/errorpage");
    });
  }
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      dispatch(addUser({uid: uid,email: email,displayname: displayName}));
      navigate("/browse")
     
    } else {
      dispatch(removeUser());
      navigate("/");
      
    }
  });
  //unsubscribr when the component unmount,this function will cann and this unsubscribe to the onauthstate
  return()=>unsubscribe();
      },[])
    const handleGpt=()=>{
      dispatch(toggle());
    }
  return (
     <div className={`absolute w-screen from-black flex px-4 justify-between z-10 ${user?"bg-gray-900/90 backdrop-blur-md" : "bg-transparent"} `}>
      {/*<img 
      className='w-72  px-8 py-2 bg-gradient-to-b from-black'
      src={logo} alt="logo" />*/}
      <h1 className='bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-5xl font-bold p-2 m-1'>CineVersa</h1>
      {user && (
        <div className="flex">
            <button className='font-bold m-6 b-2 text-pink-700 text-lg p-2 hover:bg-gray-700  rounded-lg flex items-center gap-2 cursor-pointer' onClick={handleGpt}> <FaRobot size={18} /> AI Search</button>
        <button className='font-bold m-6 b-2 text-white  p-2 bg-red-700 hover:bg-red-900 flex items-500center gap-2 rounded-lg cursor-pointer' onClick={handleSignout}> <MdLogout size={18} />Sign Out</button>
        </div>
      )}
      </div>
  )
}

export default Header