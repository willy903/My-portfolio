import React from "react";
import "./footer.css";
import logo from './../assets/logo.png'
import fb from './../assets/fblogo.png'
import linkedin from './../assets/linklogo.png'
import hublogo from './../assets/hublogo.png'
import call from './../assets/call.png'
import address from './../assets/address.png'
import messenger from './../assets/messenger.png'

function Footer() {
  return (
    <div className="footer">
      <div className="potfolio-presentation">
        <div className="mePresentation">
          <div className="logo-footer">
            <img src={logo} width={'80px'} height={'auto'} alt="" />
            <h4>Web and softwar developper</h4>
          </div>
          <p>Experienced web developer proficient in HTML, CSS, and JavaScript. Specializing in intuitive frontend design, I excel in collaborative environments, ensuring technical excellence to enhance your digital projects efficiently.</p>
        </div>
        <div className="identity">
          <h1>identity</h1>
          <a href="https://wa.me/342812462" rel="noreferrer" target="_blank" className="identity-icon">
            <img src={call} alt="" width={'30px'} height={'30px'} />
            <span>+261 34 28 124 62</span>
          </a>
          <div className="identity-icon">
            <img src={address} alt="" width={'30px'} height={'30px'} />
            <span>Itaosy, Antananarivo, Madagascar</span>
          </div>
          <a href="mailto:willyjacquino@gmail.com" className="identity-icon">
            <img src={messenger} alt="" width={'30px'} height={'30px'} />
            <span>willyjacquino@gmail.com</span>
          </a>
        </div>
        <div className="social">
          <h1>social</h1>
          <a href="https://www.facebook.com/willy1jh/" rel="noreferrer" target="_blank" className="social-icon">
            <img src={fb} alt="" width={'30px'} height={'30px'} />
            <span>Facebook</span>
          </a>
          <a href="https://www.linkedin.com/in/willy-jacquino-heriniaina-6b6465111/" rel="noreferrer" target="_blank" className="social-icon">
            <img src={linkedin} alt="" width={'30px'} height={'30px'} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/willy903" rel="noreferrer" target="_blank" className="social-icon">
            <img src={hublogo} alt="" width={'30px'} height={'30px'} />
            <span>GitHub</span>
          </a >
        </div>
      </div>
    </div>
  );
}

export default Footer;
