import React from "react";
import cross from "../img/cross.png";

const Intro = () => {
  return (
    <div>
      <div
        className="introb"
        style={{
          position: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="introc">
          <div class="wordCarousel">
            <span>Ribbon </span>
            <div>
              <ul class="flip3">
                <li>
                  <div className="icon-secA">
                    <img src={cross} alt="cross" />
                    <h6>ribbon</h6>
                  </div>
                </li>
                <li>
                  <div className="icon-secA">
                    <img src={cross} alt="cross" />
                    <h6>ribbon</h6>
                  </div>
                </li>
                <li>
                  <div className="icon-secA">
                    <img src={cross} alt="cross" />
                    <h6>ribbon</h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
