import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import SearchBuses from './components/SearchBuses';
import AvailableBuses from './components/AvailableBuses';
import BookSeats from './components/BookSeats';
import PaymentDetails from './components/PaymentDetails';
import NavBar from './components/NavBar';
import RoutesLink from './components/RoutesLinks';
import Header from './components/Header';


function App() {
  return (
    <div className="container App">
      {/* <div>
      <Header/>
      </div> */}
  
      <div className='row'>
      <RoutesLink/>
      </div>
          
            
            
          </div>
        
      
   
            
    
    
    
  );
}

export default App;
