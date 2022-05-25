import React , {useState} from "react";
import EventCard from "./EventCard";
import {Navigate, useNavigate} from 'react-router-dom';

function NewEvent(){


        const [errors , setErrors] = useState([])
        const [formData , setFormData] = useState({
        name : "",
        location : "" ,
        description: "", 
        attendance: 0 ,
        likes: 0 ,
        venue: "", 
        price: 0.00, 
        image: "", 
        category: ""

        })
        
        function handleChange(event){
        setFormData({...formData, [event.target.name]:
          event.target.value})
        };

    const something = "something"



    function handleSubmit(){
     
        fetch("http://localhost:3000/events", {
         method: "POST", 
         headers: { "Content-Type": "application/json"},
         body: JSON.stringify(formData)  // reference labs on how to do post again... very confusing lol

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

const navigate = useNavigate();

    function handleBackButton(){
        navigate("/event-manager")
     }


    return(
    <div>

    <form onSubmit={handleSubmit}>
    <label><b>Event Name</b></label>
    <input onChange={handleChange} name="name" type="text" placeholder="Enter New Event Name" />

    <label ><b>Location</b></label>
    <input onChange={handleChange} type="text" name="location" placeholder="Enter Event Location" />

    <label ><b>Description</b></label>
    <input onChange={handleChange} type="text" name="description" placeholder="Enter Event Description" />

    <label ><b>Attendance </b></label>
    <input onChange={handleChange} type="number" name="attendance" placeholder="Enter expected event attendance " />

   <label ><b>Event Likes</b></label>
    <input onChange={handleChange} type="number" name="likes" placeholder="Enter the event's likes" />

    <label ><b>Event Venue</b></label>
    <input onChange={handleChange} type="text" name="venue" placeholder="Enter Event Venue" />

    <label ><b>Pricing of tickets to be sold</b></label>
    <input onChange={handleChange} type="number" name="price" placeholder="Enter Ticket Price " />

    <label ><b>Image</b></label>
    <input onChange={handleChange} type="text" name="image" placeholder="Enter Event Poster Image " />

    <label className="input-label">
          Select Event Category: 
          <select onChange={handleChange} className="category" name="type">
            <option value="Outdoor">Outdoor</option>
            <option value="Fashion">Fashion</option>
            <option value="Professional">Professional</option>
            <option value="Miscellaneous">Misc</option>
            <option value="Sports">Sports</option>
            <option value="Party">Party</option>
          </select>
        </label> 


    <button type="submit">Submit New Event</button>
    <button onClick={handleBackButton} className="signup-button" >Back</button>
    </form>

            
    </div>
    )
    
}

export default NewEvent;