import React , {useState} from 'react';
import {MenuItems} from "./MenuItems"
import "./NavBar.css"


function NavBar(){
 const [clicked, setClicked] = useState(false)

 function handleClick(){
     console.log("hi there")
     setClicked(!clicked)
 }

    return (
      <nav className="navBarItems">
          <h1 className='navbar-logo'>Epic Events</h1>
   
          
          <div className='menu-icon' onClick={handleClick}>
              <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
               
          </div>
          <ul className={clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) =>{
                  return(
                    <li key={index}><a className={item.cName} href={item.url}>
                        {item.title}
                        </a>
                    </li>
                    
                    )
              })}
          
          </ul>
      </nav>
    )
}
export default NavBar;