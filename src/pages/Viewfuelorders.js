import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar3 from "../components/Navbar3";

const Viewfuelorders=()=>{
    return (
      <div>
        <Navbar3/>
    <div className="container">
        <form>
          <h1>View Fuel Order Details</h1>
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
            <button className="fluid ui button blue">Fetch Order</button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Viewfuelorders;