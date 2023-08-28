import React from "react";
import Navbar from "../Component/Navbar";

const Bookappointment = () => {
  return (
    <>
      <Navbar />

      <div className="section__container">
        <div className="card">
          <h1>Book Appointment</h1>
          <br />
          <label htmlFor="Name" required>
            Name *
          </label>
          <input type="text" name="Name" placeholder="Full Name *" />
          <br />
          <label htmlFor="email" required>
            Email Address *
          </label>
          <input type="text" name="email" placeholder="example@gmail.com" />
          <br />
          <label htmlFor="dropdown">Date</label>
          <div className="dropdown">
            <button
              id="datebutton"
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Please Select
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
          <label htmlFor="dropdown">Time</label>
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
        </div>
      </div>
    </>
  );
};

export default Bookappointment;
