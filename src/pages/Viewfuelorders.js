import {react,Component} from "react";
import { useState, useEffect } from "react";
import "../styles/login.css"
import Navbar3 from "../components/Navbar3";

const Viewfuelorders=()=>{
    return (
      <div>
      <Navbar3/>
      <div className="container1">
        <form>    
            <h1>Enter order ID</h1>
            <div className="ui divider"></div>
            <div className="ui form">
            <div className="field">
              <label >Order ID</label>
              <br></br><br></br>
              <input type="text"
                name="orderid"
              />
            </div>
            </div>
            <button className="fluid ui button blue">View Status</button>
          </form>
      <table class="table table-dark">
<thead>
  <tr>
    <th scope="col">Order ID</th>
    <th scope="col">Flight Number</th>
    <th scope="col">Amount of Fuel</th>
    <th scope="col">Order Place Date</th>
    <th scope="col">Order Delivery Date</th>
    <th scope="col">Status</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>Sup</td>
    <td>Sup</td>
    <td>Sup</td>
  </tr>
</tbody>
</table>
<br></br><br></br>
</div>
</div>
    )
}

export default Viewfuelorders;