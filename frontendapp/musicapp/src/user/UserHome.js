import React from 'react'

import logo from '../images/logo.png'
import '../images/mainlogo.png'
import './userhome.css'
import hinana from '../images/hinana.jpg'
import sidsriram from '../images/sidsriram.jpg'
import moreicon from '../images/moreicon.jpeg'

export default function userHome() {
  return (
    <div className="main_content">
      <br/><br/><br/>
        <div className="info">
        
<table >


  {/* Albums */}

<h2 align="left">Albums</h2>
  <tr>
  
    <td style={{padding:30}}>
      
        <div className="card">
        
        <img src={hinana} alt='Album' width="50%" />
        
        <h4>Hi Nanna</h4>
        </div>
        </td>
        
        
        <td style={{padding:30}}>
          <div className="card">
        
        <img src={hinana} alt='Album' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={hinana} alt='Album' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={hinana} alt='Album' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={hinana} alt='Album' width="50%"/>
        
        <h4>Hi Nanna</h4>
        </div></td>
        <td style={{padding:30}}><div className='morecard'>
        
        <img src={moreicon} alt='Album' width="50%" className='moreimg'/>
        
        <h4 align="center">More</h4>
        </div></td>
        
        
        </tr>


{/* Artists */}

        <h2 align="left">Artists</h2>
  <tr >
  
    <td style={{padding:30}}>
        <div className="card">
        
        <img src={sidsriram} alt='Artist' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        
        
        <td style={{padding:30}}><div className="card">
        
        <img src={sidsriram} alt='Artist' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={sidsriram} alt='Artist' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={sidsriram} alt='Artist' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={sidsriram} alt='Artist' width="50%"/>
        
        <h4>Sidsriram</h4>
        </div></td>
        <td style={{padding:30}}><div className="morecard">
        
        <img src={moreicon} alt='Album' width="50%" className='moreimg'/>
        
        <h4 align="center">More</h4>
        </div></td>
        
        </tr>



{/* Language */}

        <h2 align="left">Language</h2>
  <tr>
  
    <td style={{padding:30}}>
        <div className="card">
        
        <img src={logo} alt='language' width="50%"/>
        
        <h4>Telugu</h4>
        </div></td>
        
        
        <td style={{padding:30}}><div className="card">
        
        <img src={logo} alt='language' width="50%"/>
        
        <h4>Hindi</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={logo} alt='language' width="50%"/>
        
        <h4>Tamil</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={logo} alt='language' width="50%"/>
        
        <h4>Kannada</h4>
        </div></td>
        <td style={{padding:30}}><div className="card">
        
        <img src={logo} alt='language' width="50%"/>
        
        <h4>Kannada</h4>
        </div></td>
        <td style={{padding:30}}><div className='morecard'>
        
        <img src={moreicon} alt='Album' width="50%" className='moreimg'/>
        
        <h4 align="center">More</h4>
        </div></td>
        
        </tr>
        </table>

        </div>


      

    </div>
  )
}
