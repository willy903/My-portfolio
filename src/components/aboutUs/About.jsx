import React from "react";
import "./about.css";
import aboutImg from "./../assets/about.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container collapse">
        <div className="description">
          <h4>about us</h4>
          <p>
            you can imagine <br />I can do
          </p>
          <h6>trust us for you web developpement project</h6>
          <div className="separate"></div>
        </div>
        <div className="illustration">
          <img src={aboutImg} alt="" width={"100%"} height={"auto"} />
        </div>
      </div>
      <div className="about-me">
        <div className="boite">
          <div>
            <h1>About me</h1>
            <p>Web developer with advanced skills in HTML, CSS, and JavaScript, specializing in intuitive frontend design. Committed to technical excellence, I thrive in collaborative environments. Ready to enhance your digital project.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
