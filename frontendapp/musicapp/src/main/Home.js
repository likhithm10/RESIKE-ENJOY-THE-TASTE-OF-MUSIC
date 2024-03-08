import React from 'react'

import './navbar.css'
import mainlogo from '../images/mainlogo.png'
import '../images/mainlogo.png'

export default function Home() {
  return (
    <div class="main_content">
        <h2 class="header" >Listen to your favorite music anytime,anywhere </h2>  
        <div class="info">
          <img className="bgimg" src={mainlogo} alt='mainlogo'/><br/>

        <h1 align="center">✯ TRENDING MUSIC ✯ TRENDING MUSIC ✯ TRENDING MUSIC</h1>
          
      </div>
      
    </div>
  )
}
