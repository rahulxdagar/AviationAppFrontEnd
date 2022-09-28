import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar from "../components/Navbar";

const Orderfuel=()=>{
    return (
        <div>
            <Navbar/>
        <div className="container">
            <form>    
              <h1>Order Fuel</h1>
              <div className="ui divider"></div>
              <div className="ui form">
              <div className="field">
                <label>Flight No</label>
                <br></br>
                <input
                  type="text"
                  name="flightno"
                />
              </div>
              <div className="field">
                <label>Amount of Fuel</label>
                <br></br>
                <input
                  type="text"
                  name="amt"
                />
              </div>
              <div className="field">
                <label>Preferred Delivery Date</label>
                <input
                  type="text"
                  name="preferreddeltype"
                />
              </div>
              <div className="field">
                <label>Fuel Type</label>
                <input
                  type="text"
                  name="fueltype"
                />
              </div>
                <button className="fluid ui button blue">Submit</button>
              </div>
            </form>
          </div>
          </div>
        )
    
    }

export default Orderfuel;