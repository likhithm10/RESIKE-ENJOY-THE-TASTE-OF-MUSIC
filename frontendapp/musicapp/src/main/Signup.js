import React from 'react'
import './signup.css'

export default function Signup() {
  return (
    <div className="main_content">
    {/* <h2 className="header" > I am in About page</h2>   */}
    <div className="info">
      
    {/* 
    <h1 align="center">I am in Login page</h1> */}
    <h1 align="center">Signup Form</h1><br/>
    <div align="center">
    <div >
      
      <form classNameName='signupbox'>
        <br/>
            <div>
              <h4 align="left">Name</h4>
              <input type="text" id="name" required/>
            </div>
            <div>
              <h4 align="left">Date of Birth</h4>
              <input type="date" id="password" required/>
            </div>
            <div>
              <h4 align="left">Mobile No</h4>
              <input type="text" id="mobileno" required/>
            </div>
            <div>
              <h4 align="left">email</h4>
              <input type="email" id="email" required/>
            </div>
            <div>
          <h4 align="left">Password</h4>
          <input type="password" id="password" required/>
        </div>
        <div>
          <h4 align="left">Confirm Password</h4>
          <input type="password" id="confirmpassword" required/>
        </div>
            <button type="submit" classNameName="button">Signup</button>
            <br/><br/>
            <h3>Already have an account? <a href='./Login.js'>Login</a></h3>
          </form>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}