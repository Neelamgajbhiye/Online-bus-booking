import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,matchRoutes,
  } from 'react-router-dom';
  import SignIn from './SignIn';
  import SignUp from './SignUp';
  import SearchBuses from './SearchBuses';
  import AvailableBuses from './AvailableBuses';
  import BookSeats from './BookSeats';
  import PaymentDetails from './PaymentDetails';
  import Profile from './Profile';
import NavBar from './NavBar';
function RoutesLink() {
  //let match = matchRoutes();
  return (
    <Router>
      <div>
        <NavBar/>
      </div>
      <div>
      <Routes>
    {/* <Route  path="/">
        <Navigate to="/SearchBuses" />
      </Route> */}
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/" element={<SearchBuses/>}/>

    <Route path="/SignIn/SearchBuses" element={<SearchBuses/>}/>
    <Route path="/AvailableBuses" element={<AvailableBuses/>}/>

    <Route path="SignIn/SearchBuses/AvailableBuses" element={<AvailableBuses/>}/>
    <Route path="/BookSeats" element={<BookSeats/>}/>
    {/* <Route path="/AvailableBuses/BookSeats" element={<BookSeats/>}/> */}

    {/* <Route path="/BookSeats" element={<BookSeats/>}/> */}
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/PaymentDetails" element={<PaymentDetails/>}/>
    {/* <Route path="/AvailableBuses/BookSeats/PaymentDetails" element={<PaymentDetails/>}/>
    <Route path="SignIn/SearchBuses/AvailableBuses/BookSeats/PaymentDetails" element={<PaymentDetails/>}/> */}
  </Routes></div></Router>
  )
}

export default RoutesLink