import React from "react";
import EventCard from "./EventCard";
import {Navigate, useNavigate} from 'react-router-dom';

function EditForm(){

    const navigate = useNavigate();

    function handleSubmit(){
        console.log('something in our function for the time being')
    }

    function handleBackButton(){
        navigate("/event-manager")
     }

    return(
        <div>

    <form onSubmit={handleSubmit}>

    <label><b>Event Name</b></label>
    <input name="name" type="text" placeholder="Enter New Event Name" />

    <label ><b>Location</b></label>
    <input type="text" name="location" placeholder="Enter Event Location" />

    <label ><b>Description</b></label>
    <input type="text" name="description" placeholder="Enter Event Description" />

    <label ><b>Attendance </b></label>
    <input type="text" name="attendance" placeholder="Enter possible event attendance " />

    <label ><b>Event Venue</b></label>
    <input type="text" name="venue" placeholder="Enter Event Venue" />

    <label ><b>Pricing of tickets to be sold</b></label>
    <input  type="text" name="price" placeholder="Enter Ticket Price " />

    <label ><b>Image</b></label>
    <input type="text" name="image" placeholder="Enter Event Poster Image " />

    <label className="input-label">
          Type of Event :
          <select  className="category" name="type">
            <option value="Outdoor">Outdoor</option>
            <option value="Fashion">Fashion</option>
            <option value="Professional">Professional</option>
            <option value="Miscellaneous">Misc</option>
            <option value="Sports">Sports</option>
            <option value="Party">Party</option>
          </select>
        </label> 


    <button type="submit">Submit Changes</button>
    <button onClick={handleBackButton} className="signup-button" >Back</button>
    </form>

          
        </div>
    )
}

export default EditForm;