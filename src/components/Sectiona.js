import React from "react";
import { AiFillBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import cross from "../img/cross.png";

const Sectiona = () => {
  return (
    <div>
      <nav className="sectiona">
        <div className="icon-secA">
          <img src={cross} alt="cross" />
          <h6>ribbon</h6>
        </div>
        <div className=" icon-sec">
          <i className="">
            <FaUserCircle />
          </i>
          <i className="">
            <AiFillBell />
          </i>
        </div>
      </nav>
    </div>
  );
};

export default Sectiona;
