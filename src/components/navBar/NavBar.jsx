import React, { useState } from "react";
import "./navbar.css";
import logo from "./../assets/logo.png"
import { IoCloseOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

function NavBar() {
  const [first, setFirst] = useState(false);
  return (
    <div className="navbar">
      <div className="container top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navContent hide">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="navContent">
            <button>Let's talk</button>
        </div>
        <div className="icon-menu">
            
            {first ? (
              <IoCloseOutline size={30} onClick={() => setFirst(false)} />
            ) : (
              <IoMenuOutline size={30} onClick={() => setFirst(true)} />
            )}
          </div>
      </div>
      {first ? (
      <div className="nav-mobile">
      <ul>
                <li onClick={() => setFirst(false)}><a href="#Home">Home</a></li>
                <li onClick={() => setFirst(false)}><a href="#services">Services</a></li>
                <li onClick={() => setFirst(false)}><a href="#about">About Us</a></li>
                <li onClick={() => setFirst(false)}><a href="#contact">Contact</a></li>
            </ul>
      </div>
       ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
