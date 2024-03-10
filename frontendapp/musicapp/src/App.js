//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './main/NavBar';
// import UserNavBar from './user/UserNavBar';
// import AdminNavBar from './admin/AdminNavBar';
import userHome from './user/UserHome';
import UserAlbums from './user/UserAlbums';
import UserArtists from './user/UserArtists';
import UserPlaylist from './user/UserPlaylist';
import UserProfile from './user/UserProfile';
import Home from './main/Home';
import AdminHome from './admin/AdminHome';
import AdminPlaylist from './admin/AdminPlaylist';
import AdminAlbums from './admin/AdminAlbums';
import AdminArtists from './admin/AdminArtists';
import ViewUsers from './admin/ViewUsers';
import AdminLogin from './main/AdminLogin';
import About from './main/About';
import Signup from './main/Signup';
import Login from './main/Login';
import Contact from './main/Contact';
import UserNavBar from './user/UserNavBar';
import AdminNavBar from './admin/AdminNavBar';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     
  
        <NavBar/>
        {/* <UserAlbums/> */}
        {/* <UserNavBar/> */}
        {/* <AdminNavBar/> */}
        <Routes>
      {/* <Route path="/userhome" Component={userHome}/> */}
        <Route path="/useralbums" Component={UserAlbums}/>
        <Route path="/userartists" Component={UserArtists}/>
        <Route path="/userplaylist" Component={UserPlaylist}/>
        <Route path="/userprofile" Component={UserProfile}/>
        <Route path="/logout" Component={Home}/>
        <Route path="/" Component={AdminHome}/>
        <Route path="/adminplaylist" Component={AdminPlaylist}/>
        <Route path="/adminalbums" Component={AdminAlbums}/>
        <Route path="/adminartists" Component={AdminArtists}/>
        <Route path="/viewusers" Component={ViewUsers}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path="/contact" element={<Contact/>}/>
        {/* <Route path="/adminlogin" Component={AdminLogin}/> */}
        <Route path="/usernavbar" Component={UserNavBar}/>
        <Route path="/adminnavbar" Component={AdminNavBar}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
