import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';

const navbar = () => {
  const fun = () => {
    $(".hambody").slideToggle();

  }
  return (
    <div className="navbar">
      <nav className="section__container">
        <div className="logo">
          <h2>AKASH TRADERS</h2>
        </div>
        <div className="hamburger" onClick={fun}>
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
      <div className="hambody">
        <ul>
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
      </div>

    </div>
  );
};

export default navbar;
