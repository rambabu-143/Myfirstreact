import React from "react";

const Homepage = () => {
  return (
    <>
      <section id="heading">
        <h1>
          <span>A</span>K<span>A</span>SH <span>T</span>R<span>A</span>DERS
        </h1>
      </section>
      <div id="heading2">
        <h2 id="place">💥NOW IN HYDERABAD💥</h2>
        <h3>Revitalize Your Vehicle's Performance and Efficiency</h3>
      </div>
      <div className="quotes">
        <p className="quote">🚀 Is Your Car's Mileage Dropping?</p>

        <p className="quote">💥 Decrease in Engine Power?</p>

        <p className="quote">⚙ Experiencing Poor Acceleration?</p>

        <p className="quote">🌍 Worried About Harmful Emissions?</p>
      </div>
      <div className="dont">
        <div className="para">
          <p>
            Don’t worry. We have a solution that is <span>Affordable</span>&{" "}
            <span>Efficient.</span>
          </p>
        </div>
      </div>
      <div className="schedule">
        <h1>
          <span id="book">Book </span>a slot to get a{" "}
          <span id="Discount">Discount</span>
        </h1>
        <button id="outer">
          <button id="inner">SCHEDULE VISIT</button>
        </button>
        <p id="sp">ONE STOP SOLUTION FOR ALL YOUR CAR PROBLEMS</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="whyus">
        <h1>
          <span>WHY</span> US <span>?</span>
        </h1>
        <p>
          Our HHO Carbon Cleaning Machine employs cutting-edge hydrogen
          technology to effectively remove carbon deposits from engines.
        <br /><br />
          This innovative process leads to cleaner engines, improved combustion
          efficiency, and a host of benefits.
        </p>
        <dic className="images">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </dic>
      </div>
      <div className="whoarewe">
        <h1>
          <span>WHO</span> ARE <span>WE</span>
        </h1>
        <p>
          We're dedicated to providing cutting-edge carbon cleaning solutions
          that not only enhance engine performance but also contribute to a
          cleaner environment.
          <br />
          <br />
          Our HHO Carbon Cleaning Machine is a breakthrough technology designed
          to combat carbon build-up effectively.
        </p>
      </div>
      <hr />
      <br />
      <div className="follow">
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Follow US</h1>
        <div className="icons">
          <div className="icons-container">
            <img className="social-media" src="./icons/insta.png" alt="" />
          </div>
          <div className="icons-container">
            <img className="social-media" src="./icons/twitter.png" alt="" />
          </div>
          <div className="icons-container">
            <img className="social-media" src="./icons/facebook.png" alt="" />
          </div>
        </div>
      </div>
      <div className="footer">
        <h6>ALL RIGHTS RESERVED &copy; NEXUSIO</h6>
      </div>
    </>
  );
};

export default Homepage;
