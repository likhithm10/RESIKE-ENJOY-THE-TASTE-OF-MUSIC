import React, { useState } from 'react'
import './signup.css'
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Login from './Login';

export default function Signup() {

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post('http://localhost:2032/insertuser', formData);
      if (response.status === 200) 
      {
        setFormData({
          name: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('') // set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  

  return (
    <div className="main_content">
    {/* <h2 class="header" > I am in About page</h2>   */}
    <div className="info">
      
    {/* 
    <h1 align="center">I am in Login page</h1> */}
    <h1 align="center">Signup Form</h1><br/><br/> 
    <div align="center">
    <div >
       {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
<Routes>
        <Route path="/login" element={<Login/>} exact/>
        </Routes>
      <form onSubmit={handleSubmit}>
        <br/>
            <div>
              <h4 align="left">Name</h4>
              <input type="text" id="name" value={formData.fullname} onChange={handleChange} required/>
            </div>
            <div>
            <h4 align="left">Gender</h4>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
            <div>
              <h4 align="left">Date of Birth</h4>
              <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required/>
            </div>
            <div>
              <h4 align="left">Contact No</h4>
              <input type="number" id="contact" value={formData.contact} onChange={handleChange} pattern="[6789][0-9]{9}" placeholder="MUST be 10 Digits " required/>
            </div>
            <div>
              <h4 align="left">email</h4>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required/>
            </div>
            
           
            <div>
          <h4 align="left">Password</h4>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required/>
        </div>
        
            <button type="submit" className="button">Signup</button>
            <br/><br/>
            <h3>Already have an account?  <Link to="/login">Login</Link></h3>
          </form>
    </div>
    
    </div>
    </div>
    
    </div>
  )
}