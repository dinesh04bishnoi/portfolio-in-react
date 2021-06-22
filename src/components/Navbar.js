import React from 'react';
import logo from '../logo.jpg';
import logo2 from '../color.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBars}  from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            
        <div className="container-fluid">
          <a className="navbar-brand text-white p-3" href="#"><img src={logo2} alt="logo.." width="100" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            {/* < FontAwesomeIcon icon = {faBars} style={{color:"#fff"}} /> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
              <li className="nav-item px-4">
                <a className="nav-link active text-white text-uppercase" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link text-white text-uppercase" href="#">About Me</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link text-white text-uppercase" href="#">Services</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link text-white text-uppercase" href="#">How work</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link text-white text-uppercase" href="#">portfolio</a>
              </li>
              <li className="nav-item px-4">
                <a className="nav-link text-white text-uppercase" href="#">contact me</a>
              </li>
             
              
            </ul>
          
          </div>
        </div>
      </nav>
    )
}

export default Navbar
