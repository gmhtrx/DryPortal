import React from "react";


const customers = props => (
  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Order:</strong> {props.order}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCustomers(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default customers;
