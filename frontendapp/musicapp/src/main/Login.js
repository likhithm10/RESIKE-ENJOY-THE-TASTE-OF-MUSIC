import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div class="main_content">
{/* <h2 class="header" > I am in About page</h2>   */}
<div class="info">
  
{/* 
<h1 align="center">I am in Login page</h1> */}
<h1 align="center">Login Form</h1><br/><br/><br/><br/>
<div align="center">
<div >
  
  <form>
    <br/>
        <div>
          <h4 align="left">Username</h4>
          <input type="text" id="username" required/>
        </div>
        <div>
          <h4 align="left">Password</h4>
          <input type="password" id="password" required/>
        </div>
        <button type="submit" className="button">Login</button>
        <br/><br/>
        <h3>Don’t have an account? <a href='./Signup.js'>Signup</a></h3>
      </form>
</div>

</div>
</div>

</div>

  )
}
