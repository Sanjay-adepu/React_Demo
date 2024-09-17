import React from "react";
import Computers from "../Components/Computers";
import Furniture from "../Components/Furniture";
import Mobile from "../Components/Mobile";
import Laptops from "../Components/Laptops";
import Malefashion from "../Components/Malefashion";
import Femalefashion from "../Components/Femalefashion";

import {Link } from "react-router-dom";
const Sidebar = () => {
  
  

  return (
    <div>
     
      
      
      
      
      <div className="box">
        <img src="./Colorful Abstract Online Shop Free Logo_20240721_164228_0000.png" id="img" alt="Logo" />
        <ul className="list">
          <li>Login</li>
          <li>Offers</li>
          <li>About</li>
          <li>Fashion</li>
        </ul>

        <label htmlFor="v">
          <img src="22152.png" id="i" alt="Icon" />
        </label>
        <i>Deal_Mart</i>
        <input type="checkbox" id="v" />

        <div className="list1">
          <ul>
            <li>Login</li>
            <li>Offers</li>
       <div class="products" id="drop">
        <select name="dropdown">
      <option>Products</option>
 
        <option>menFashion</option>
        <option>femaleFashion</option>
        <option>Laptops</option>
        <option>Furniture</option>
        <option>Computers</option>
        </select>

</div>
      
      
          </ul>
        </div>
      </div>




      
       <div className="search">
        <input type="text" placeholder="search" id="se" />
      </div>

      <div className="banner">
        <img src="./banner.png" alt="Banner" />
      </div>

      <div className="products">
        <ul className="list2">
          <Link to="/mobile"><li>mobiles</li></Link>
          <li>menFashion</li>
          <li>femaleFashion</li>
          <li>Laptops</li>
          <li>Furniture</li>
          <li>Computers</li>
        </ul>
      </div>

 <Computers />
 <Furniture/>
 
 <Mobile/>
 
 <Laptops/>
 <Malefashion/>
 <Femalefashion/>
 </div>
  );
}
export default Sidebar;