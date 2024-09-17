import React from "react";
import {maleFashion} from "../Data/maleFashion";
const Malefashion=()=>{
  const setimage=maleFashion.slice(0,3);
  return(
    <>
      <h1 class="head">Male_Fashion</h1>
    <div class="computer">
      {
        setimage.map((prop,index)=>(
        
          
   <div key={index}><img src={prop.image}/></div>
                ))}
              
  </div>
      </>
          
          )
        };
        
      export default Malefashion;
      