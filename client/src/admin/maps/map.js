import React, { Component } from 'react';
import Map from "./mapLayout"

class Place extends Component {
  render() {
    return (
      <div className="Map">
        <header className="Map-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map/>
      </div>
    );
  }
}
export default Place;