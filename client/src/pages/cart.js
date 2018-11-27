import React, { Component } from "react";
import Cartforms from "../components/cartform"
import { Link } from 'react-router-dom'
class Cartform extends Component {
  render() {

    return (
    <div>
        <Cartforms/>
        <Link to="/checkout">Confirm Order </Link>
    </div>    
       
    )
    }
  }

export default Cartform;