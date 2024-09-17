import React from "react";
import {mobile} from "../Data/mobile";
const Mobile=()=>{
  const setimage=mobile.slice(0,3);
  return(
    <>
      <h1 class="head">Mobiles</h1>
    <div class="computer">
      {
        setimage.map((prop,index)=>(
        
          
   <div key={index}><img src={prop.image}/></div>
                ))}
              
  </div>
      </>
          
          )
        };
        
      export default Mobile;
      