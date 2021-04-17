import React from "react";
import feather from "../img/feather.png";
import temperature from "../img/temperature.png";
import ribon from "../img/ribon.png";
const Activity = () => {
  return (
    <div>
      <div className="section4">
        <h5>Recent Activity</h5>

        <div className="">
          <ul className="">
            <li className="center">
              <img src={ribon} alt="Blood test" />
            </li>
            <li>
              <b>HIV Blood Draw Test</b>
            </li>
            <li>
              <b>A100</b>{" "}
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="">
            <li className="center pr-3">
              <img src={feather} alt="Radiology" />
            </li>
            <li>
              <b>TB Radiology XRay</b>{" "}
            </li>
            <li>
              <b>A30</b>{" "}
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="">
            <li className="center">
              <img src={temperature} alt="Pressure" />
            </li>
            <li>
              <b>Blood Pressure Check</b>{" "}
            </li>
            <li>
              <b>A10</b>{" "}
            </li>
          </ul>
          <p className="h-gray"></p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
