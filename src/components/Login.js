import React, { useState } from "react";
import "../styles/login.css";
import logo from './images/Amazon_logo.png'
import {  useNavigate, Link } from 'react-router-dom';
import { auth } from "./firebaseConfig";
function Login() {
    const navigate =  useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
const signIn = (e)=> {
e.preventDefault()
auth.signInWithEmailAndPassword(email, password)
.then(auth => {
    navigate('/')
})
.catch((error) => alert(error.message))

}
const signUp = (e)=> {
    e.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth =>{
        if(auth) {
             navigate('/')
        }
       
    })
    .catch((error) => alert(error.message))


    }

  return (
    <div className="login">
        <Link to='/'>
    <img className="login_logo" src={logo}/>
      </Link>
     
     <div className="login_container">
         <h1>sign in</h1>
          <form>
        <label>E-mail</label>
        <input className="input"  
       type="text" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}} /> <label>password</label>
        <input className="input" type="password" placeholder="**********"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="form_button" type="submit" onClick={signIn}>sign in</button>
        </form>
        <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button className="button_create" type="submit" onClick={signUp}>create your Amazon account</button>
      
      </div>
    </div>
  );
}

export default Login;
