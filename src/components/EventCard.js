import React , {useState} from 'react';
import ReactDOM from 'react-dom';

function EventCard({ onHandleBookings, toggleEventMan,id, eventData ,image, location , venue , event , likes, description , price , dateTime }){

    // function handleBookings(id){
    //     fetch(`http://localhost:3000/events/${id}`)
    //    .then(response => response.json())
    //    .then(data => setUserBookings([...userBookings, data]))
    //     console.log(userBookings)
    //     }

   return(
    <div>
    <li className="card-items">
         <div class="item-container">
           <div class="img-container">
            <img className="event-img"  src={image} alt="Event image"/>
            </div>

            <div class="body-container">
                <div class="overlay"></div>
                <div class="event-info">
                    <p class="title">{event}</p>
                    <div class="separator"></div>
                    <p class="info">{location}</p>
                    <p class="price">{`$${price}`}</p>

                    <div class="additional-info">
                        <p class="info">
                            <i class="fas fa-map-marker-alt"></i>
                           {venue}
                        </p>
                        <p class="info">
                            <i class="far fa-calendar-alt"></i>
                            {dateTime}
                        </p>

                        <p class="info description">
                          {description}
                        </p>
                    </div>
                </div>
                <button onClick={()=>onHandleBookings()} class="action"
                >{toggleEventMan ? "Book it" : "edit"}</button>
                {/* {toggleEventMan ? " " : <button onClick={handleDelete} className="delete-button">delete</button>} */}
            </div>
        </div>
      
    </li>
</div>
    )
}

export default EventCard;