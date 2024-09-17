import React from "react";
import { computers } from "../Data/computer";
const imageslide=computers.slice(0,3);
const Computers = () => {
  return (
    <>
      <h1 class="head">Computers</h1>
    <div class="computer">
      {imageslide.map((prop, index) => (
        <div key={index} >
          <img src={prop.image} alt={`Computer model ${prop.Model}`} />
          
        </div>
      ))}
    </div>
    </>
  );
};

export default Computers;