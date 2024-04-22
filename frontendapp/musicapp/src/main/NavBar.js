import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Contact from './Contact'
// import UserNavBar from '../user/UserNavBar'
import logo from '../images/logo.png'
import './navbar.css'
import AdminLogin from './AdminLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faSignInAlt, faUserPlus, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import AdminNavBar from '../admin/AdminNavBar'

export default function MainNavBar({ onAdminLogin,onUserLogin}) {
  return (
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
        <div >
    <ul className='navbar'>
    <li><Link to="/"><FontAwesomeIcon icon={faHome} className='fontIcon'/>Home</Link></li>
    <li><Link to="/about"><FontAwesomeIcon icon={faInfoCircle} className='fontIcon'/>About</Link></li>
    <li><Link to="/login"><FontAwesomeIcon icon={faSignInAlt} className='fontIcon'/>Login</Link></li>
    <li><Link to="/signup"><FontAwesomeIcon icon={faUserPlus} className='fontIcon'/>Sign Up</Link></li>
    <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} className='fontIcon'/>Contact Us</Link></li>
    </ul>
    </div>
    </div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login onUserLogin={onUserLogin}/> }/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin}/>}/>
    </Routes>
    


    </div>
  )
}