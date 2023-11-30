import React from "react";
import "./about.css";
import aboutImg from "./../assets/about.jpg";

const About = () => {
  const separate = {
    width: "50%",
    borderBottom: "6px solid #e3801b",
    margin: "10px 0",
  }
  return (
    <div className="about" id="about">
      <div className="container collapse">
        <div className="description">
          <h4>about us</h4>
          <p className="small">
            you can imagine <br />I can do
          </p>
          <div style={separate}></div>
          <h6>trust us for you web developpement project</h6>
          <p className="long">Web developers are integral to creating and maintaining websites. They begin by understanding client needs, planning the site structure, and deciding on the technologies to use. The coding phase involves implementing designs using languages like HTML, CSS, and JavaScript. Developers ensure responsiveness and cross-browser compatibility. Debugging and testing are vital for identifying and fixing issues. Collaboration with designers and other team members is crucial for cohesive projects. Continuous learning about emerging technologies is essential in this dynamic field. Additionally, developers often work on optimizing site performance, security, and scalability. Their role extends beyond coding, encompassing problem-solving, creativity, and effective communication to deliver successful web projects.</p>
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
