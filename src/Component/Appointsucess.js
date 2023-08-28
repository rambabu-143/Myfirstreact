import React from "react";

const Appointsucess = () => {
  return (
    <div className="appointsucess section__container">
      <img src="./icons/tick.png" alt="" />
      <br />
      <br />
      <p>
        <span style={{ textAlign: "center" }}>
          Your Appointment has been scheduled{" "}
        </span>
      </p>
      <br />
      <br />
      <p style={{ textAlign: "center" }}>
        You will recieve a text message regarding your appointment
      </p>
      <br />
      <br />
      <button id="Homebutton">Home</button>
    </div>
  );
};

export default Appointsucess;
