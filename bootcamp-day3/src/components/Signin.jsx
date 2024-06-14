import React, {useState} from 'react'
//import React from 'react'
import "../styles/Signin.css"
import google from "../assets/google.png"
import today from "../assets/today.jpg"
import { useNavigate} from 'react-router-dom'
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from './firebase'

function Signin() {

    const [redirect, setRedirect]=useState(false)
    const navigate=useNavigate()

    const handleClick=()=>{
        signInWithPopup(auth, provider).then(()=>{
            setRedirect(true)
        })
    }
  return (
    <div className='signcontent'>
        <div className='signdiv'>
            <h1 className='ss'>Sign-In</h1>
            <img src={today} width='400px' alt="" className='today'/ >
            
            <button onClick={handleClick}>
                <img src={google} alt="" className='google'/>
                Continue with Google
            </button>
            

        </div>
        {redirect?navigate("/home"):console.log("error")}
    </div>
  )
}

export default Signin