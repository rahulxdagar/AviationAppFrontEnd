import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar from "../components/Navbar";

const Updateorder=()=>{
    return (
      <div>
        <Navbar/>
    <div className="container">
        <form>
          <h1>Update Fuel Details</h1>
          <div className="ui divider"></div>
          <div className="ui form">
          <div className="field">
            <label>Order ID</label>
            <br></br>
            <input
              type="text"
              name="orderid"
            />
          </div>
          <div className="field">
          <br/><br/>
            <label>Current Status: </label>
            <label name="currstatus">{}Pending</label>
            
            <br></br>    
          </div>
          <div className="field">
          <br/><br/> 
            <label>Enter New Status</label>
            <br></br>
            <input
              type="text"
              name="newstatus"
            />
          </div>
          
            <button className="fluid ui button blue">Update Order</button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Updateorder;