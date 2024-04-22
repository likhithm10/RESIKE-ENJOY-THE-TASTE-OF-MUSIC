import React from 'react'
import {Routes,Route,Link, useNavigate} from 'react-router-dom'
import logo from '../images/logo.png'
import AdminHome from './AdminHome'
 import AdminPlaylist from './AdminPlaylist'
import AdminAlbums from './AdminAlbums'
import AdminArtists from './AdminArtists'
import ViewUsers from './ViewUsers'
import './adminnavbar.css'

export default function AdminNavBar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };


  return (
    <div className="wrapper">
    <div className="sidebar">
        <img className='row' src={logo} alt='logo' />
        <br/> <br/> <br/>
    <ul className='navbar'>
    <li><Link to="/adminhome">Home</Link></li>
    <li><Link to="/adminplaylist">Playlists</Link></li>
    <li><Link to="/adminalbums">Albums</Link></li>
    <li><Link to="/adminartists">Artists</Link></li>
    <li><Link to="/viewusers">Users</Link></li>
    <li><Link className="logoutButton" onClick={handleLogout}>Logout</Link></li>
    </ul>
    </div>
    <Routes>
        <Route path="/adminhome" Component={AdminHome}/>
        <Route path="/adminplaylist" Component={AdminPlaylist}/>
        <Route path="/adminalbums" Component={AdminAlbums}/>
        <Route path="/adminartists" Component={AdminArtists}/>
        <Route path="/viewusers" element={<ViewUsers/>}/>
    </Routes>

    </div>
  )
}