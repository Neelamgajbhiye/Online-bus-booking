import React from 'react'
import { Link } from 'react-router-dom'
import App from '../App'

function NavBar() {
  return (
    <div className="container App"> 
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
  <Link className="navbar-brand" to='/'>NG</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav my-2 my-lg-0">
      <li className="nav-item active">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/SignUp">Sign Up</Link>
      </li>
      <li className="nav-item mr-sm-2">
      <Link className="nav-link" to="/SignIn">Sign In</Link>
      </li>
      <li className="nav-item my-2 my-sm-0 ">
      <Link className="nav-link" to="/Profile">Profile</Link>
      </li>
      
    </ul>
  </div>
</nav>
</div>
  )
}

export default NavBar