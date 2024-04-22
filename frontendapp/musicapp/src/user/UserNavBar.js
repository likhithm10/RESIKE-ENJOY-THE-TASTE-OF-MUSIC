import React from 'react'
import {Routes,Route,Link, useNavigate} from 'react-router-dom'
import './usernavbar.css'
import logo from '../images/logo.png'
import '../images/Md.jpeg'
import UserHome from './UserHome'
import UserAlbums from './UserAlbums'
import UserArtists from './UserArtists'
import UserPlaylist from './UserPlaylist'
import UserProfile from './UserProfile'
import Home from '../main/Home'
//import MainNavBar from '../main/NavBar'


export default function UserNavBar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload()
  };

  return (
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
    <ul className='navbar'>
    <li><Link to="/userhome">Home</Link></li>
    <li><Link to="/useralbums">Albums</Link></li>
    <li><Link to="/userartists">Artists</Link></li>
    <li><Link to="/userplaylist">My Playlist</Link></li>
    <li><Link to="/userprofile">Profile</Link></li>
    <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>
    </ul>
    </div>
    <Routes>
        <Route path="/userhome" Component={UserHome}/>
        <Route path="/useralbums" Component={UserAlbums}/>
        <Route path="/userartists" Component={UserArtists}/>
        <Route path="/userplaylist" Component={UserPlaylist}/>
        <Route path="/userprofile" Component={UserProfile}/>
        <Route path="/logout" Component={Home}/>
    </Routes>
    <div className="main_content">
      {/* <h2 align="right">
       <input type="text"  name="search" placeholder="Search Albums,Artists, Geners etc..."/>
       `{"        "}`` </h2> */}
       </div>
    
</div>
  )
}

