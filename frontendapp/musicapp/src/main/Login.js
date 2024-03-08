import React from 'react'
import './login.css'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'

export default function Login() {
  return (
    <div class="main_content">
{/* <h2 class="header" > I am in About page</h2>   */}
<div class="info">
  
{/* 
<h1 align="center">I am in Login page</h1> */}
<h1>Login Form</h1><br/><br/>
<div align="center">
<div class="container">
  <h2 >Login</h2>
  <form>
        <div>
          <label>Username</label>
          <input type="text" id="uname" required/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="pwd" required/>
        </div>
        <button type="submit" className="button">Login</button>
      </form>
</div>

</div>
</div>

</div>



  )
}
