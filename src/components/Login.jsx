import React,{useState,useEffect} from 'react'
import {auth,provider} from './firebase'
import { signInWithPopup } from 'firebase/auth';
import Feed from './Feed';
import { Navbar } from '.';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login () {
    const [value,setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth,provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem('email',data.user.email)
            
        })
    }
    

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    return (
      <div className="login-container">
        {value?<><Navbar user={value}/><Feed /></>:
            <button onClick={handleClick}  className="login-button">Signin With Google</button> 
       }
      </div>
    );
}

export default Login;
