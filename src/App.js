import "./App.css";
import React from "react";
import Homepage from "./Component/Homepage";
import Bookappointent from "./Component/Bookappointment";
import Appointsucess from "./Component/Appointsucess";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Homepage />

      <Bookappointent />

      <Appointsucess />
    </>
  );
}

export default App;
