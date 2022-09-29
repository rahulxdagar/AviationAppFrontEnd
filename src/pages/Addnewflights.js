import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar from "../components/Navbar";

const Addnewflights=()=>{
    return (
      <div>
        <Navbar/>
    <div className="container">
        <form>
          <h1>Add New Flight</h1>
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
            <label>Origin</label>
            <br></br>
            <select name="origin" id="origin">
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div className="field">
            <label>Destination</label>
            <select name="Destination" id="Destination">
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <div className="field">
            <label>Aircraft Type</label>
            <select name="aircrafts" id="aircrafts">
                  <option value="Airbus A319neo">Airbus A319neo</option>
                  <option value="ATR Evo">ATR Evo</option>
                  <option value="Boeing 777X">Boeing 777X</option>
                  <option value="Cessna 408">Cessna 408</option>
                  <option value="Irkut MC-21">Irkut MC-21</option>
                  <option value="TVRS-44 Ladoga">TVRS-44 Ladoga</option>
                  <option value="CRAIC CR929">CRAIC CR929</option>
                  <option value="Comac C919">Comac C919</option>
            </select>
          </div>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Addnewflights;