import React from "react";
import {furniture} from "../Data/furniture";
const Furniture=()=>{
  const setimage=furniture.slice(0,3);
  return(
    <>
      <h1 class="head">Furniture</h1>
    <div class="computer">
      {
        setimage.map((prop,index)=>(
        
          
   <div key={index}><img src={prop.image}/></div>
                ))}
              
  </div>
      </>
          
          )
        };
        
      export default Furniture;
      