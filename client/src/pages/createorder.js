import React, { Component } from "react";
import { Col, Container, Row } from "../components/Grid"
import { Nav, NavItem, NavLink } from "reactstrap";
import { ItemList } from "../components/createorderform"
import axios from "axios";
import { connect } from 'react-redux'
import Auth from "../modules/auth";
import API from "../utils/API"

class Createorder extends Component {

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
    console.log(this.props.items)
    return (
      
      <Container idName="main">
        <Nav tabs>
          <NavItem>
            <NavLink href="#" active>Create Order</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Track</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Account</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Cart: (0)</NavLink>
          </NavItem>
        </Nav>
        <Row>
          <Col size="md-6">
          <div className='item-listing'>
          {console.log(items)}
          {
            items.map( item => 
              <ItemList
              items={ item }
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItem={cart.filter(cartItem => cartItem.id === item.id)[0]}
              />)
          }
          </div>
          </Col>
        </Row>
      </Container>

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

export default connect(mapStateToProps, mapDispatchToProps)(Createorder);