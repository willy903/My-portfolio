import React from "react";
import "./hero.css";
import heroImage from "./../assets/portfolio.png";
import arrow from "./../assets/arrow.png";
import fblogo from "./../assets/fblogo.png";
import ln from "./../assets/linklogo.png";
import hub from "./../assets/hublogo.png";

const Hero = () => {
  return (
    <div className="herosection">
      <div className="hero">
        <div className="row">
          <div className="col col-1">
            <img src={heroImage} alt="" width={"100%"} height={"auto"} />
          </div>
          <div className="col col-2">
            <h5>Hello, I'm Willy</h5>
            <h1>
              Professional <br />
              UI/UX designer <br />& Web developper
            </h1>
            <div className="container-button">
              <button className="arrowButt">
                <img src={arrow} alt="" width={"30px"} height={"auto"} />
              </button>
              <h3>Hire me now</h3>
            </div>
            <div className="divider"></div>
            <div className="social-network">
              <div>
                <img src={fblogo} alt="" width={"100%"} height={"auto"} />
              </div>

              <div>
                <img src={ln} alt="" width={"100%"} height={"auto"} />
              </div>
              <div>
                <img src={hub} alt="" width={"100%"} height={"auto"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
