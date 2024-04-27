import React, { useEffect, useState } from 'react'
import './useralbum.css'
//import logo from '../images/logo.png'
import '../images/mainlogo.png'
// import hinana from '../images/hinana.jpg'
import { Route, Routes, useNavigate } from 'react-router-dom';
import config from '../config';
import axios from 'axios';
import ViewSongs from './ViewSongs';
// import sidsriram from '../images/sidsriram.jpg'
// import moreicon from '../images/moreicon.jpeg'

export default function UserAlbums() {
  const navigate = useNavigate();
 const [events, setEvents] = useState([]);

 const fetchEvents = async () => {
   try {
     const response = await axios.get(`${config.url}/viewalbums`);
     setEvents(response.data);
   } catch (error) {
     console.error(error.message);
   }
 };

 useEffect(() => {
   fetchEvents();
 }, []);

 const handlesongs = async (moviename) => {
  try 
  {
    navigate(`/viewsongs/${moviename}`)
    // window.location.reload()
  } 
  catch (error) 
  {
    console.error(error.message);
  }
}


  return (
  <div className="main_content">
  {/* <h2 class="header" > I am in View Users page</h2>   */}
  <div className="info">
    
    
      <h2 align="left">Albums</h2><br/>
      <table >

      <tbody>
        <tr>
          {events.length > 0 ? (
            events.map((event, index) => (
              <td key={index}>
               {

        
          <div className="card" onClick={() => handlesongs(event.name)}>
    <img src={`${config.url}/albumimage/${event.file}`} alt={event.name} width="50%" className='imgcd' />
 
        <h4>{event.name}</h4>
        <div align="center">
        {/* <button onClick={() => handlesongs(event.name)} className='button'>View Album</button>&nbsp;&nbsp;&nbsp; */}

    </div>
    
    <Routes>
    <Route path="/viewsongs/:moviename" element={<ViewSongs/>} />
    </Routes>
        </div>
} 
              </td>
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">No Albums found</td>
            </tr>
          )}
          </tr>
        </tbody>
        </table>
        </div>
    </div>
  )
}
