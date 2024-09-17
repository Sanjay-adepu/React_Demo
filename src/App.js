import React from "react";
import Sidebar from "./DealMart/Pages/Sidebar";
import "./DealMart/Style.css";
import {Routes,Route} from "react-router-dom";
import Mobilespage from "./DealMart/Pages/Mobilespage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/mobile" element={<Mobilespage/>}/>
        
        
        
        
      </Routes>
      
      
      
      
      <Sidebar />
    </div>
  );
}

export default App;