import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Contact from './Contact'
import logo from '../images/logo.png'
import './navbar.css'


export default function MainNavBar() {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <img classNameName='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
        <div >
    <ul classNameName='navbar'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    </ul>
    </div>
    </div>
    <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    


    </div>
  )
}