import React from "react";
import {mobile} from "../Data/mobile";
const Mobilespage=()=>{
  return(
    <div class="photos">
      {
        mobile.map((prop,index)=>{
        return(
        <div key={index}><img src={prop.image}/></div>
          
      )  })
              }
    </div>
    
    
    )
  
  
}
export default Mobilespage;