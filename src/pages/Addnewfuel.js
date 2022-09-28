import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar from "../components/Navbar";

const Addnewfuel=()=>{
    return (
      <div>
        <Navbar/>
    <div className="container">
        <form>
          <h1>Add New Fuel</h1>
          <div className="ui divider"></div>
          <div className="ui form">
          <div className="field">
            <label>fuel Name</label>
            <br></br>
            <input
              type="text"
              name="fuelname"
            />
          </div>
          <div className="field">
            <label>Cost</label>
            <br></br>
            <input
              type="text"
              name="cost"
            />
          </div>
          <div className="field">
            <label>Last Updated</label>
            <input
              type="text"
              name="lastupdated"
            />
          </div>
          <div className="field">
            <label>Place</label>
            <input
              type="text"
              name="place"
            />
          </div>
            <button className="fluid ui button blue">Submit</button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Addnewfuel;