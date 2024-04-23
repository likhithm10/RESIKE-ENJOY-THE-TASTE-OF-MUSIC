import React, { useEffect, useState } from 'react'
import './viewuser.css'
import CreateAlbum from './CreateAlbum'
import { Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import ViewAlbum from './ViewAlbum';
import AddSongs from './AddSongs';

export default function AdminAlbums() {
 const i=0;

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

  return (
  <div className="main_content">
  {/* <h2 class="header" > I am in View Users page</h2>   */}
  <div className="info">
    <div align="right">
    <Link to="/createalbum" className='button'>Create Album</Link>
    
    </div>
    
    <Routes>
        <Route path="/createalbum" element={<CreateAlbum/>}/>
    </Routes>
    
    
  

      <h2 align="left">Albums</h2><br/>
      <table >

      <tbody>
          {events.length > 0 ? (
            events.map((event, index) => (
              <tr key={index}>
               {
        
       
        
        <td >
          <div className="card">
        

    <img src={`${config.url}/albumimage/${event.file}`} alt={event.name} width="50%" className='imgcd' />
 
        
        <h4>{event.name}</h4>
        <div align="center">
    <Link to="/viewalbum" className='button'>View Album</Link>&nbsp;&nbsp;&nbsp;
    <Link to="/addsongs" className='button'>Add Songs</Link>
    </div>
    
    <Routes>
        <Route path="/viewalbum" element={<ViewAlbum/>}/>
        <Route path="/addsongs" element={<AddSongs/>}/>
    </Routes>
        </div></td>
        
} 

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" align="center">No Albums found</td>
            </tr>
          )}
        </tbody>

  
        </table>
        
        </div>


      

    </div>
    
  )
}

  
