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
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
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
