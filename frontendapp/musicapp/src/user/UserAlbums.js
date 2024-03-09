import React from 'react'
import './useralbum.css'
//import logo from '../images/logo.png'
import '../images/mainlogo.png'
import hinana from '../images/hinana.jpg'
// import sidsriram from '../images/sidsriram.jpg'
// import moreicon from '../images/moreicon.jpeg'

export default function UserAlbums() {
  return (
    
    <div className="main_content">
      <br/><br/><br/>
        <div className="info">
        

      <h2 align="left">Albums</h2><br/>
      <table >
  <tr>
  
      
        <div className="card1">
        
        <td><img src={hinana} alt='Album' width="50%" className='imgcd'/></td>
        
        <td><h4 align="top">Hi Nanna </h4></td>
        </div>
        </tr>
        </table>
        
        </div>


      

    </div>
    
  )
}
