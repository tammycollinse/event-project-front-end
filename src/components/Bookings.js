import React , {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';import {BrowserRouter as Router, Route,Routes, Link, BrowserRouter} from "react-router-dom";
import NavBar from './NavBar/NavBar';
import Login from './Login';
import EventCard from './EventCard';

function Bookings({ eventData , setEventData}){


   const [currentUser , setCurrentUser] = useState(null)
   const [userBookings , setUserBookings] = useState([])
   const [bookingsData , setBookingsData] = useState([])
   console.log("these are our bookings", bookingsData)


  //  useEffect(()=>{
  //   fetch("/me")
  //   .then(response=> response.json())
  //   .then(data=> setCurrentUser(data))
  //   console.log(currentUser)
  //  }, [])

   console.log(currentUser)
   console.log(currentUser)

 useEffect(()=> {

  fetch("/me")
  .then(response=> response.json())
  .then(data=> setCurrentUser(data))
   
  if (currentUser) {
    console.log(currentUser)
  fetch("/bookings")
  .then(response => response.json())
  .then(data => {
    setBookingsData(data )
   console.log(data)
  let filterBookingsData = data.filter((item)=>{

    console.log("current user ", currentUser )
  if (item.user.id == currentUser.id){
    return item
  }
  })  
  console.log(filterBookingsData)
  
  setUserBookings(filterBookingsData)
  console.log("This is our final filtered data", userBookings)
  })
  }

}, [])


// let filterBookingsData = bookingsData.filter((item)=>{
//   if (item.user.id == currentUser.id){
//     return item
//   }
// })  
// console.log(filterBookingsData)

// setUserBookings(()=>filterBookingsData)
// console.log("This is our final filtered data", userBookings)


  
//   useEffect(()=>{
//     fetch("/bookings")
//     .then(response => response.json())
//     .then(data => setBookingsData(data ))
//     console.log("these are our bookings",bookingsData)


// let filterBookingsData = bookingsData.filter((item)=>{
//   if (item.user.id == currentUser.id){
//     return item
//   }
// })  
// console.log(filterBookingsData)

// setUserBookings(()=>filterBookingsData)
// console.log("This is our final filtered data",userBookings)

// }, [])// this whole component is dependent on the current user that is logged in

  //in our return portion , our event card needs to be rendered
    return(
      <div>
       <div className="bookings-div">
          <NavBar className="nav-other-pages">
           <Link className="items" to="/"></Link> 
           <Link className="items" to="/bookings"></Link>
           <Link className="items" to="/event-manager"></Link>
         </NavBar> 
        </div>
         
 
     <div>
      {userBookings.map((item)=>{
        return <EventCard
        key={item.event.id}
         id={item.event.id}
         image={item.event.image}
         event={item.event.name}
         price={item.event.price}
         description={item.event.description}
         location={item.event.location}
         venue={item.event.venue}
         likes={item.event.likes}
        
        />
      })}
     </div>
  
      </div>
    )
}

export default Bookings;