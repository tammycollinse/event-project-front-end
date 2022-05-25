import React , {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Routes, Link, BrowserRouter} from "react-router-dom";
import {Navigate, useNavigate} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import EventCard from './EventCard';
import NewEvent from './NewEvent';



function EventManager(){
  const [eventData , setEventData] = useState([])

  useEffect(()=>{ //this is getting a list of all events from our database
    fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(data => setEventData(data))
    console.log(eventData)
  } , [])

  const navigate = useNavigate(); 

  function handleClick(){ //this is handling the editting of our data
    console.log("this is handling the edit")
    navigate("/edit-form")
}

  function handleNewEventClick(){
    navigate("/new-event")
  }

    return(
      
      <div >
          <NavBar className="nav-other-pages">
           <Link className="items" to="/"></Link> 
           <Link className="items" to="/bookings"></Link>
           <Link className="items" to="/event-manager"></Link>
         
      </NavBar> 
        <div className="event-man-page" >
         <div className='container'>
         <button onClick={handleNewEventClick} className='btn'>Add New Event</button>
          {eventData.map((item)=>{
         return  <EventCard

         onHandleClick={handleClick}
         eventData={eventData}
         key={item.id}
         id={item.id}
         image={item.image}
         event={item.name}
         price={item.price}
         description={item.description}
         location={item.location}
         venue={item.venue}
         likes={item.likes}
         />   
        })}
        </div>
        </div>
      </div>
    )
}

export default EventManager ;