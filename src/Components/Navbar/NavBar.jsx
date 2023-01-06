import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
import './Navbar.css'
export default function NavBar() {
  return (
    <div><nav className="navbar  navbar-expand-lg">
    <div className="container-fluid">
      <Link className="navbar-brand" to="home"><img src={Logo} alt='main logo'/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <Link className="nav-link " to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="movies">Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="people">People</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="tvshowes">Tv shows</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">Contact</Link>
          </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="register">Register</Link>
          </li>
  
        </ul>
      </div>
      
    </div>
  </nav>
  
  
        
</div>

  )
}
