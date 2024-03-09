//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './main/NavBar';
import UserNavBar from './user/UserNavBar';

function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     
        <NavBar/>
        {/* <UserNavBar/> */}
         
      </BrowserRouter>
    </div>
  );
}

export default App;
