import React from "react";
import "./hero.css";
import heroImage from "./../assets/portfolio.png";
import arrow from "./../assets/arrow.png";
import fblogo from "./../assets/fblogo.png";
import ln from "./../assets/linklogo.png";
import hub from "./../assets/hublogo.png";
import resume from "./../assets/HERINIAINA_WILLY_JACQUINO(CV).pdf"

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
            <div className="cv">
              <a href={resume} download="HERINIAINA WILLY JACQUINO(CV)" title="Pdf">
                <button className="arrowButt">
                  <img src={arrow} alt="" width={"30px"} height={"auto"} />
                </button>
                <h3>Download My CV</h3>
              </a>
            </div>
            <div className="divider"></div>
            <div className="social-network">
              <div
                onClick={() =>
                  window.open("https://www.facebook.com/willy1jh/")
                }
              >
                <img src={fblogo} alt="" width={"100%"} height={"auto"} />
              </div>

              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/willy-jacquino-heriniaina-6b6465111/"
                  )
                }
              >
                <img src={ln} alt="" width={"100%"} height={"auto"} />
              </div>
              <div onClick={() => window.open("https://github.com/willy903")}>
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
