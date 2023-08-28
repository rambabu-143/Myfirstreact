import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar">
      <nav className="section__container">
        <div className="logo">
          <h2>AKASH TRADERS</h2>
        </div>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul id="items">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
