import React, { useState } from 'react'
import './login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//import UserNavBar from './../user/UserNavBar';

export default function AdminLogin({ onAdminLogin }) {

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
      const response = await axios.post('http://localhost:2032/checkadminlogin', formData);
      if (response.data!=null) 
      {
        onAdminLogin(); 

        localStorage.setItem('admin', JSON.stringify(response.data));
        
        navigate("/adminhome");
     
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
    <h1 align="center">Admin Login Form</h1><br/><br/><br/><br/>
    <div align="center">
    <div >

    {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      
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
          </form>
    </div>
    
    </div>
    </div>
    
    </div>
    

  )
}
