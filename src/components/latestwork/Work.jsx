import React from "react";
import "./work.css";
import project1 from "./../assets/houseniture.jpg";
import project2 from "./../assets/aip.jpg";
import arrownext from "./../assets/arrow-next.png";
const Work = () => {
  return (
    <div className="work-container">
      <h1>My creativity and personal project</h1>
      <div className="principalwork">
        <div className="card-work">
          <img src={project1} alt="" width={"100%"} height={"280px"} />
          <div className="button-project">
            <span>Web site HouseNiture</span>
            <div>
              <a href="https://houseniture.netlify.app/" target="_blank">
                Learn more <img src={arrownext} alt="" width={"16px"} />
              </a>
            </div>
          </div>
        </div>
        <div className="card-work">
          <img src={project2} alt="" width={"100%"} height={"280px"} />
          <div className="button-project">
            <span>Web site AIP</span>
            <div>
              <a
                href="https://willy903.github.io/STAGE-INVERSE-AIP/"
                target="_blank"
              >
                Learn more <img src={arrownext} alt="" width={"16px"} />
              </a>
            </div>
          </div>
        </div>
        <div className="card-work">
          <img src={project1} alt="" width={"100%"} height={"280px"} />
          <div className="button-project">
            <span>UX/UI</span>
            <div>
              <a href="https://www.figma.com/proto/9s6R8K7ZtWn9ekvheZPgqU/HouseNiture?type=design&node-id=11-2&t=4zFKRHJ5QrNf5DEl-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=11%3A2&mode=design" target="_blank">
                <span>Learn more </span><img src={arrownext} alt="" width={"16px"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
