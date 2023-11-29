import React from "react";
import "./navbar.css";
import logo from "./../assets/logo.png"

function NavBar() {
  return (
    <div className="navbar">
      <div className="container top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navContent">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="navContent">
            <button>Let's talk</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
