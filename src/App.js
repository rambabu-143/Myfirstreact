import "./App.css";
import React from "react";
import Homepage from "./Component/Homepage";
import Bookappointent from "./Component/Bookappointment";
import Appointsucess from "./Component/Appointsucess";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Vehicle from "./Component/Vehicle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/book-appointment" element={<Bookappointent />} />
          <Route path="/appointment-success" element={<Appointsucess />} />
          <Route path="/*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
