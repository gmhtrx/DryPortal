import React from "react";

export const Row = ({ fluid, children }) => (
  <div className={`justify-content-md-center row${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
