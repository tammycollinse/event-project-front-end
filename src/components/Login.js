import React, {useEffect, useState} from "react";
import {Navigate, useNavigate} from 'react-router-dom';
import Bookings from "./Bookings";
import HomeEvents from "./HomeEvents";

function Login({onHandleLogout} ){


    const [errors, setErrors] = useState(false)

    

    const [userToLogin , setUserToLogin] = useState({
        username: "",
        password: ""
    })


    function handleLoginOfUser(e){
    setUserToLogin({...userToLogin , [e.target.name]: e.target.value })
    }

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        
        fetch("/login" , {
            method: "POST" , 
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userToLogin)
        })
        .then(response => {
           if (response.ok){
               response.json()
        .then(userToLogin => {
            console.log(userToLogin)
            navigate("/events")
         })
           }
           else {
            response.json()  // I get what's happening here , there's not reference to the response in order to set those errors, okay will figure out later how to fix that
            setErrors(response.errors)
            console.log(errors)
           }
        })
       
    }
 

    function handleSignUp(){
    navigate("/sign-up-form")
    }


    return(
    <div className="login-wrapper">
        <h1 className="welcome-heading" >Welcome to Epic Events NYC</h1>
        <p className="login-description">{errors ? errors : ""}</p>
    
    <form onSubmit={handleSubmit}>
    <label for="uname"><b>Username</b></label>
    <input name="username" onChange={handleLoginOfUser} type="text" placeholder="Enter Username" required/>

    <label for="psw"><b>Password</b></label>
    <input onChange={handleLoginOfUser} name="password" type="password" placeholder="Enter Password" required/>

    <button type="submit">Login</button>
    <button onClick={handleSignUp} className="signup-button" >Sign Up</button>
    </form>
    {errors ? <div className="error-message ">{errors}</div>: null}
    {/* <Bookings currentUser={currentUser}/> */}
    </div>


      )
}

export default Login;


  



