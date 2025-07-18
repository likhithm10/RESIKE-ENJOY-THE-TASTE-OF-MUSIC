import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import {  Link, Route, Routes, useNavigate } from 'react-router-dom';
import Signup from './Signup';
//import UserNavBar from './../user/UserNavBar';

export default function Login({ onUserLogin }) {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/checkuserlogin', formData);
      if (response.data!=null) 
      {
        onUserLogin(); 

        localStorage.setItem('user', JSON.stringify(response.data));
        
        navigate("/userhome");
     
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className="main_content">
    {/* <h2 class="header" > I am in About page</h2>   */}
    <div className="info">
      
    {/* 
    <h1 align="center">I am in Login page</h1> */}
    <h1 align="center">Login Form</h1><br/><br/><br/><br/>
    <div align="center">
    <div >

    {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <Routes>
        <Route path="/signup" element={<Signup/>} exact/>
        </Routes>
      <form onSubmit={handleSubmit}>
        <br/>
            <div>
              <h4 align="left">Email</h4>
              <input type="email" id="email"  value={formData.email} onChange={handleChange} required/>
            </div>
            <div>
              <h4 align="left">Password</h4>
              <input type="password" id="password" value={formData.password} onChange={handleChange} required/>
            </div>
            <button type="submit" className="button">Login</button>
            <br/><br/>
            <h3>Don’t have an account? <Link to="/signup">Signup</Link></h3>
          </form>
    </div>
    
    </div>
    </div>
    
    </div>
    

  )
}
