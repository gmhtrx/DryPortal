import React, { Component } from "react";
import { Col, Container, Row } from "../Grid/"
import { Nav, NavItem, NavLink } from "reactstrap";
import ItemList from "./ItemList"
import axios from "axios";
import { connect } from 'react-redux'
import Auth from "../../modules/auth";
import API from "../../utils/API"

class Itemlisting extends Component {

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    const { loadProducts } = this.props
    axios.get('/api/items')
      .then(items => {
        loadProducts( items.data )
      } )
      .catch((error) => {
        if (error) throw error
      });
  }


  render() {
    const { addToCart, removeFromCart, items, cart } = this.props
    return (
        <Row>

          <Col size="md-6">
          <div className='item-listing'>
          {console.log(this.props.items)}
          {
            items.map( item => 
              <ItemList
              item={ item }
              image={item.image}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItem={cart.filter(cartItem => cartItem._id === item._id)[0]}
              />)
          }
          </div>
          </Col>
        </Row>


    );
  }
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
    items: state.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: (items) => {
      dispatch({ type: 'LOAD', payload: items })
    },
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itemlisting);