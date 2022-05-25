import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function CreateForm(){

      const [formData, setFormData] = useState({
        name : " ",
        location: " ",
        description: " ",
        attendance: 0 ,
        likes: 0 ,
        location: " ",
        venue: " ",
        price: 0, 
        image: " ",
        category: " "
        })

    function handleChange(event){
    setFormData({...formData , [event.target.name]:
    event.target.value})
    }

    function handleSubmit(event){
     event.preventDefault();
     fetch(`http://localhost:3000/events/`,{
     method: "POST",
     headers: {
         "Content-Type": "application/json"
     },
     body: JSON.stringify(formData)   
     })
     .then(response=>response.json())
     .then(data =>console.log(data))
    }


    function alertFunction(){
        alert("Your suggestion has been added to `Things To Do In Cape Town!` 🤩 ")
    }

    return(
      <div>

        <form onSubmit={handleSubmit}>
         <label for="fname">First Name</label>
         <input onChange={handleChange} type="text" placeholder="Your name.."/>

        <label for="lname">Last Name</label>
        <input  onChange={handleChange} type="text" placeholder="Your last name.."/>

        <label for="country">Country</label>
        <label className="input-label">
          Type of Event (Category):
          <select name="type">
            <option value="Outdoor">Outdoor</option>
            <option value="Fashion">Fashion</option>
            <option value="Professional">Professional</option>
            <option value="Miscellaneous">Tours</option>
            <option value="Sports">Sports</option>
            <option value="Party">Party</option>
          </select>
        </label>
 

        <input type="submit" value="Submit"/>
       </form>
      </div>
    )
}

export default CreateForm;