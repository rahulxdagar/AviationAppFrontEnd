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
            <input
              type="text"
              name="origin"
            />
          </div>
          <div className="field">
            <label>Destination</label>
            <input
              type="text"
              name="destination"
            />
          </div>
          <div className="field">
            <label>Aircraft Type</label>
            <input
              type="text"
              name="aircrafttype"
            />
          </div>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Addnewflights;