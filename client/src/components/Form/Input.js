import React from "react";

export const Input = props => (
  <div className="form-group row">
    <label>{props.children}</label>
    <input className="form-control row" {...props} />
  </div>
);
