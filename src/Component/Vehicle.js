import React from "react";

const Vehicle = () => {
  return (
    <div id="selectvehicle__section">
      <h1 id="selectvehicle">Select Vehicle</h1>
      <div className="allvehicles">
        <VechileCard
          price={"1000"}
          type={"Bike"}
          desc={"(800cc-1200cc)"}
          imagePath={require("../images/bike.jpg")}
        />
        <VechileCard
          price={"1000"}
          type={"Car"}
          desc={"(800cc-1200cc)"}
          imagePath={require("../images/car1.jpg")}
        />
        <VechileCard
          price={"1000"}
          type={"Car"}
          desc={"(1250cc-1500cc)"}
          imagePath={require("../images/car2.jpg")}
        />
      </div>
    </div>
  );
};

export default Vehicle;

const VechileCard = ({ type, price, desc, imagePath }) => {
  return (
    <div
      className={"vechileCard"}
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <div id="overlay" />
      <div className="vechileCard-content">
        <h4 id="bikehead">{type}</h4>
        <h2>₹{price}</h2>
        <h3>{desc}</h3>
        <button id="Booknow">Book now to get discount</button>
      </div>
    </div>
  );
};
