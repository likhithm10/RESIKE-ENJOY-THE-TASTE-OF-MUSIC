import React from 'react'

import './usernavbar.css'
import logo from '../images/logo.png'
import '../images/mainlogo.png'
import './userhome.css'
import hinana from '../images/hinana.jpg'
import sidsriram from '../images/sidsriram.jpg'

export default function userHome() {
  return (
    <div class="main_content">
      <h2 align="right">
        <input type="text"  name="search" placeholder="Search Albums,Artists, Geners etc..."/>&nbsp
        </h2>
        <div class="info">
        
<table>


  {/* Albums */}

<h2 align="left">Albums</h2><br/>
  <tr>
  
    <td colSpan={10}>
        <div className="card">
        
        <img src={hinana} alt='profile' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        
        
        <td colSpan={2}><div className="card">
        
        <img src={hinana} alt='profile' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        <td><div className="card">
        
        <img src={hinana} alt='profile' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        <td><div className="card">
        
        <img src={hinana} alt='profile' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        
        </tr>


{/* Artists */}

        <h2 align="left">Artists</h2><br/>
  <tr>
  
    <td colSpan={10}>
        <div className="card">
        
        <img src={sidsriram} alt='profile' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        
        
        <td colSpan={2}><div className="card">
        
        <img src={sidsriram} alt='profile' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        <td><div className="card">
        
        <img src={sidsriram} alt='profile' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        <td><div className="card">
        
        <img src={sidsriram} alt='profile' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        
        </tr>



{/* Language */}

        <h2 align="left">Language</h2><br/>
  <tr>
  
    <td colSpan={10}>
        <div className="card">
        
        <img src={logo} alt='profile' width="50%"/>
        
        <h4>Telugu</h4>
        </div></td>
        
        
        <td colSpan={2}><div className="card">
        
        <img src={logo} alt='profile' width="50%"/>
        
        <h4>Hindi</h4>
        </div></td>
        <td><div className="card">
        
        <img src={logo} alt='profile' width="50%"/>
        
        <h4>Tamil</h4>
        </div></td>
        <td><div className="card">
        
        <img src={logo} alt='profile' width="50%"/>
        
        <h4>Kannada</h4>
        </div></td>
        
        </tr>
        </table>

        </div>


      

    </div>
  )
}
