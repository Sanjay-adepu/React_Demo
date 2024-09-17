import React from "react";
import {laptop} from "../Data/laptop";
const Laptops=()=>{
  const setimage=laptop.slice(0,3);
  return(
    <>
      <h1 class="head">Laptops</h1>
    <div class="computer">
      {
        setimage.map((prop,index)=>(
        
          
   <div key={index}><img src={prop.image}/></div>
                ))}
              
  </div>
      </>
          
          )
        };
        
      export default Laptops;
      