import React from "react";

import { FaHome, FaWallet } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { AiFillGift, AiTwotoneShop } from "react-icons/ai";
import { Link } from "react-router-dom";
import Sectiona from "./Sectiona";
import Activity from "./Activity";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <Sectiona />
      <div className="first">
        <div className="first-ul">
          <ul className="">
            <div className="d-flex justify-content-center">
              <li>
                <b>AFYA</b>{" "}
              </li>
            </div>
            <li>143.00</li>
            <li>Balance</li>
          </ul>
        </div>
        <div className="second-ul">
          <ul className="">
            <div className="d-flex justify-content-center">
              <li>
                <b>ZAR</b>{" "}
              </li>
            </div>
            <li>R21.00</li>
            <li>Equlvalent</li>
          </ul>
        </div>
      </div>
      <div className="section3">
        <h6>Select Currency:</h6>
        <div className="d-flex">
          <div>
            <i class="" aria-hidden="true">
              {IoIosArrowDown}
            </i>
          </div>
          <select className="d-flexx">
            <option value="AFYA">AFYA</option>
            <option value="ZAR">ZAR</option>
          </select>
          <input type="text" name="" id="" placeholder="0.00000001"  />
        </div>
        <div className="btn-box">
          <button className="btn btn-primary">SEND</button>
          <button className="btn btn-primary">RECEIVE</button>
        </div>
      </div>
      <div className="">
        <Activity />
      </div>

      <div className="footer">
        <ul>
          <Link to="/intro" className="iconBa links">
            <i className="iconB" aria-hidden="true">
              <FaHome />
            </i>
            <b>Home</b>
          </Link>
          <Link to="/intro" className="onBx links">
            <div className="conbx">
              <i className="iconB activit">
                {" "}
                <HiOutlineMenu />
              </i>
            </div>

            <b className="iconBx">Activity</b>
          </Link>

          <Link to="/intro" className="iconBx links">
            <i className="iconB">
              <FaWallet />
            </i>
            <b>Wallet</b>
          </Link>
          <Link to="/intro" className="iconBx links">
            <i className="iconB">
              <AiTwotoneShop />
            </i>
            <b>Market</b>
          </Link>
          <Link to="/intro" className="iconBx links">
            <i className="iconB">
              <AiFillGift />
            </i>{" "}
            <b>Earn</b>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
