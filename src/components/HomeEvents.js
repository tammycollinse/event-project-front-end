import React , {useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import EventCard from './EventCard';
import App from '../App';
import FilterCategory from './FilterCategory';
import Bookings from "./Bookings"
import {BrowserRouter as Router, Route,Routes, Link, BrowserRouter} from "react-router-dom";
import NavBar from './NavBar/NavBar';

function HomeEvents({ eventData , setEventData , onHandleLogout}){


const [toggleEventMan, setToggleEventMan] = useState(true)
const [clickMan , setClickMan] = useState(false )

const [searchTerm , setSearchTerm] = useState("")
const [searchData, setSearchData] = useState([])

console.log(eventData)
console.log(searchTerm)
console.log("")

const [userBookings, setUserBookings] = useState([])

  const {id , name , location, descrption , attendance , likes , venue , price  , image , category} = eventData    
  // useEffect(()=>{ //this is getting a list of all events from our database
  //   fetch("http://localhost:3000/events")
  //   .then(response => response.json())
  //   .then(data => setEventData(data))
  //   console.log(eventData)
  // } , [])


  // function handleBookings(id){
  //   fetch(`http://localhost:3000/events/${id}`)
  //  .then(response => response.json())
  //  .then(data => setUserBookings([...userBookings, data]))
  //   console.log(userBookings)
  //   }


  function handleEventManager(){
     if (clickMan = false){
         setToggleEventMan(!toggleEventMan)
     } else {
         setToggleEventMan(false)
     }
  }

  function handleFilter(e){
    fetch(`http://localhost:3000/events/category/${e.target.value}`)
    .then(response=> response.json())
    .then(data=>setSearchData(data))
    setSearchTerm(e.target.value)

    const newFilteredArray = eventData.filter((item) =>{
      console.log(searchTerm)
      console.log(item.category)
    if (item.category === e.target.value) {
    return item
     }
     })
    setSearchData(newFilteredArray)
    
    console.log("this is the new filtered array", newFilteredArray)
    

    }

    return(
     <div > 
       <NavBar>
           <Link onClick={()=>setClickMan(true)} className="items" to="/home"></Link> 
           <Link className="items" to="/bookings"></Link>
           <Link onClick={handleEventManager} className="items" to="/event-manager"></Link>
      </NavBar> 

      <div className='log-out-container'>
      <button onClick={()=>onHandleLogout()} className="log-out-button">Logout</button>
      </div>

    <div className='container'>
       
       <div className="filter-cat">
          
        <label className="input-label">
          Filter Events According to Category  
          <select  onChange={handleFilter} className="category" name="type">
            {/* <option value="all">All Events</option> */}
            <option value="Outdoor">Outdoor</option>
            <option value="Fashion">Fashion</option>
            <option value="Professional">Professional</option>
            <option value="Miscellaneous">Misc</option>
            <option value="Sports">Sports</option>
            <option value="Party">Party</option>
          </select>
        </label> 
       </div>
       
        
         {searchData.map((item)=>{
         return  <EventCard
         
         userBookings={userBookings}
         setUserBookings={setUserBookings}
        //  onHandleBookings={handleBookings}
         toggleEventMan={toggleEventMan}
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
 {/* <FilterCategory/>
 <Bookings eventData={eventData} setEventData={setEventData}/> */}

</div>

</div>
    )}

export default HomeEvents;