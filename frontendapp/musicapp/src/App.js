//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './main/NavBar';
// import UserNavBar from './user/UserNavBar';
// import AdminNavBar from './admin/AdminNavBar';
import UserNavBar from './user/UserNavBar';
import AdminNavBar from './admin/AdminNavBar';
import { useEffect, useState } from 'react';

function App() {

    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    
  
    useEffect(() => {
      const adminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
      const userLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
      
      setIsAdminLoggedIn(adminLoggedIn);
      setIsUserLoggedIn(userLoggedIn);
    }, []);
  
    const onAdminLogin = () => {
      localStorage.setItem('isAdminLoggedIn', 'true');
      setIsAdminLoggedIn(true);
    };
  
    const onUserLogin = () => {
      localStorage.setItem('isUserLoggedIn', 'true');
      setIsUserLoggedIn(true);
    };
  

  return (
    <div className="App">
      
      <Router>
        {isAdminLoggedIn ? (
          <AdminNavBar />
        ) : isUserLoggedIn ? (
          <UserNavBar />
        ) : (
          <NavBar
            onAdminLogin={onAdminLogin}
            onUserLogin={onUserLogin}
          />
        )}
      </Router>
     
    </div>
  );
}

export default App;
