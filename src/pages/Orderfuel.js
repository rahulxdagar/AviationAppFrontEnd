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
                <br></br>
                <label>Flight No</label>
                <br></br>
                <input
                  type="text"
                  name="flightno"
                />
              </div>
              <div className="field">
                <br/>
                <label>Amount of Fuel</label>
                <input
                  type="text"
                  name="amt"
                />
              </div>
              <div className="field">
                <br></br>
                <label>Preferred Delivery Date</label>
                <br></br>
                <br></br>
                <input
                  type="date"
                  name="preferreddeldate"
                />
              </div>
              <div className="field">
                <br></br>
                <label>Fuel Type</label>
                <br></br><br></br>
                <select name="fuels" id="fuels">
                  <option value="jetfuel">Jet Fuel</option>
                  <option value="Kgm">Kerosene Gasoline Mixture</option>
                  <option value="ag">Aviation Gasoline</option>
                  <option value="biofuel">Biofuel</option>
                </select>
              </div>
                <button className="fluid ui button blue">Submit</button>
              </div>
            </form>
          </div>
          </div>
        )
    
    }

export default Orderfuel;