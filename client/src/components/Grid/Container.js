import React from "react";

export const Container = ({ fluid, children, idName }) => (
  <div style={{}}className={`container${fluid ? "-fluid" : ""}`} id={`${idName}`}>
    {children}
  </div>
);
