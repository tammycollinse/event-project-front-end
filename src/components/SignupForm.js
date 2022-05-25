import React ,{useState} from "react";
import {Navigate, useNavigate} from 'react-router-dom';

function SignupForm(){
    
    const [ errors , setErrors] = useState([])
    const [userSignUp , setUserSignUp] = useState({
        full_name: "",
        email: "",
        username: "",
        phone_number: "",
        password_digest: ""
      
    })
    const navigate = useNavigate();

    function handleChange(e){
        setUserSignUp({...userSignUp , [e.target.name]: e.target.value })
    }

    function handleSignUpSubmit(e){
        e.preventDefault();
        console.log("This is the sign up form ")
        fetch("http://localhost:3000/signup" , {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(userSignUp)
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
             response.json()
             setErrors(response.errors)
             console.log(errors)
            }
         })
      
    }

    function handleBackButton(){
       navigate("/login")
    }

    return(
    <div>
    <form onSubmit={handleSignUpSubmit}>

    <label for="full-name"><b>Full Name</b></label>
    <input onChange={handleChange} name="full_name" type="text" placeholder="Enter Full Name" required/>

    <label for="email"><b>Email</b></label>
    <input onChange={handleChange} name="email" type="text" placeholder="Enter Email" required/>

    <label for="uname"><b>Username</b></label>
    <input onChange={handleChange} name="username" type="text" placeholder="Enter Username" required/>

    <label for="psw"><b>Password</b></label>
    <input onChange={handleChange} name="password_digest" type="password" placeholder="Enter Password" required/>
{/* 
    <label for="psw-confirmation"><b>Confirm Password</b></label>
    <input onChange={handleChange} name="password_digest" type="password" placeholder="Confirm Password" required/> */}

    <button type="submit">Sign Up</button>
    <button onClick={handleBackButton}>Back</button>
    </form>

        </div>
    )
}

export default SignupForm;
