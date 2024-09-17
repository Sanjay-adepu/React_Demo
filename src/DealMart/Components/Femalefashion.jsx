import React from "react";
import {femaleFashion} from "../Data/femaleFashion";
const Femalefashion=()=>{
  const setimage=femaleFashion.slice(0,3);
  return(
    <>
      <h1 class="head">Ladies_Fashion</h1>
    <div class="computer">
      {
        setimage.map((prop,index)=>(
        
          
   <div key={index}><img src={prop.image}/></div>
                ))}
              
  </div>
      </>
          
          )
        };
        
      export default Femalefashion;
      