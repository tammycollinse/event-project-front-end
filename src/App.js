import logo from './logo.svg';
import './App.css';
import React, {useState , useEffect} from 'react';
import HomeEvents from './components/HomeEvents';
import {BrowserRouter as Router, Route,Routes, Link, BrowserRouter} from "react-router-dom";
import Auth from "./components/Auth.js"
import EventManager from "./components/EventManager"
import CreateForm from "./components/CreateForm"
import Bookings from './components/Bookings';
import NavBar from './components/NavBar/NavBar';
import "./components/NavBar/NavBar.css"
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import EditForm from './components/EditForm';
import {Navigate, useNavigate} from 'react-router-dom';
import NewEvent from './components/NewEvent';
import FilterCategory from './components/FilterCategory';



function App() {

  const [currentUser , setCurrentUser] = useState(null)
  const [eventData , setEventData] = useState([])
  const [userBookings, setUserBookings] = useState([])
  
  //  useEffect(()=>{
  //   fetch("/me")
  //   .then(response=> response.json())
  //   .then(data=> setCurrentUser(data))
  //   console.log(currentUser)
  //  }, [])

   useEffect(()=>{ //this is getting a list of all events from our database
    fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(data => setEventData(data))
    console.log(eventData)
  } , [])


   function handleLogOut(){
     fetch("/logout", {
       method: "DELETE"
     })
     .then(response=>response.json())
     .then( deletedRes => setCurrentUser(null))
    console.log("lets just test with a console log and see what happens")
  }
  



  return (
    
    <div className="App">
      
    
  <BrowserRouter>
   
        <Routes>
          <Route path="/login" element={<Login onHandleLogout={handleLogOut} />}/>
          <Route path="/event-manager" element={<EventManager />}/>
          <Route path="/create-event" element={<CreateForm/>}/>
          <Route path="/events" element={<HomeEvents userBookings={userBookings} setUserBookings={setUserBookings} eventData={eventData} setEventData={setEventData} onHandleLogout={handleLogOut}/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/sign-up-form" element={<SignupForm/>}/>
          <Route path="/edit-form" element={<EditForm/>}/>
          <Route path="/new-event" element={<NewEvent/>}/>

        </Routes>
   </BrowserRouter>

   
    </div>
    
  );
}

export default App;

