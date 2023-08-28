import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Dates from "./Dates";

const Bookappointment = () => {
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  return (
    <>
      <div className="section__container">
        <form className="card">
          <h1>Book Appointment</h1>
          <br />
          <TextInputForm
            label={"Name *"}
            placeholder={"Enter full name"}
            value={appointmentData.name}
            onChange={(e) =>
              setAppointmentData({ ...appointmentData, name: e.target.value })
            }
          />
          <br />
          <TextInputForm
            label={"Email Address *"}
            placeholder={"example@gmail.com"}
            value={appointmentData.email}
            onChange={(e) =>
              setAppointmentData({ ...appointmentData, email: e.target.value })
            }
          />
          <br />

          <label htmlFor="dropdown">Date *</label>
          <Dates id="Dates" />

          <br />
          <label htmlFor="dropdown">Time *</label>
          <div className="dropdown">
            <button
              id="datebutton"
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              4,000 Available
            </button>
            <ul id="dateitem" className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <button id="bookappoin">Book Appointment</button>
        </form>
      </div>
    </>
  );
};

export default Bookappointment;

const TextInputForm = ({ onChange, value, label, placeholder, type }) => {
  return (
    <>
      <label htmlFor={label} required>
        {label}
      </label>
      <input
        type={type || "text"}
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};
