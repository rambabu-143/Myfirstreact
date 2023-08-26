import React from "react";

const navbar = () => {
  return (
    <div className="navbar">
      <nav>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;
