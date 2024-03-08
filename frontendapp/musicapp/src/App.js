//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './main/NavBar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
        <NavBar/>
        {/* <userNavBar/> */}
         
      </BrowserRouter>
    </div>
  );
}

export default App;
