//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './main/NavBar';
import UserNavBar from './user/UserNavBar';
import AdminNavBar from './admin/AdminNavBar';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     
        <NavBar/>
        {/* <UserNavBar/> */}
        {/* <AdminNavBar/> */}
         
      </BrowserRouter>
    </div>
  );
}

export default App;
