import React , {useState} from "react";
import App from '../App';


function FilterCategory({onHandleFilter , eventData , setEventData}){
  const [searchTerm , setSearchTerm] = useState("")
  const [searchData, setSearchData] = useState([])
  console.log( " console log from filter ", searchTerm)

  console.log("event data passed into filter category" , eventData)

  // function handleFilter(e){
  //   fetch(`http://localhost:3000/events/category/${e.target.value}`)
  //   .then(response=> response.json())
  //   .then(data=>setSearchData(data))
  //   setSearchTerm(e.target.value)

  //   const newFilteredArray = eventData.map((item) =>{
  //   if (item.category === searchTerm) {
  //   return item
  //    }
  //    })
  //   setEventData(newFilteredArray)
    
  //   console.log("New event data after the filter", eventData)
  //   }

    return (
      
        <label className="input-label">
       Filter Events According to Category  
          <select  onChange={()=>onHandleFilter()} className="category" name="type">
            <option value="all">All Events</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Fashion">Fashion</option>
            <option value="Professional">Professional</option>
            <option value="Miscellaneous">Misc</option>
            <option value="Sports">Sports</option>
            <option value="Party">Party</option>
          </select>
        </label> 
  
    )

}

export default FilterCategory; 