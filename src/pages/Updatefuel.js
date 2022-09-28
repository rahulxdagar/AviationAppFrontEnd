import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar from "../components/Navbar";

const Updatefuel=()=>{
    return (
      <div>
        <Navbar/>
    <div className="container">
        <form>
          <h1>Update Fuel Details</h1>
          <div className="ui divider"></div>
          <div className="ui form">
          <div className="field">
            <label>Fuel ID</label>
            <br></br>
            <input
              type="text"
              name="fuelid"
            />
          </div>
          <div className="field">
            <label>Fuel Name</label>
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
            <br></br>
            <input
              type="text"
              name="place"
            />
          </div>
            <button className="fluid ui button blue">Update</button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Updatefuel;