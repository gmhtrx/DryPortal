import React from 'react'
import { connect } from 'react-redux'
import axios from "axios";
import Cart from '../cartform'
import CheckoutForm from './form'

function submitOrder(values, cart) {
  const { email, name } = values.order
    const order = {
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.name,
        qty: item.quantity,
      }))
    }
    console.log(order);

  axios.post('/api/order', order)
    .then(console.log("~~~~~~~~DONE~~~~~~~"))
    .catch((error) => {
      if (error) throw error
    });
}

function Checkout(props) {
  const { cart } = props

  return <div>
       <Cart />

    <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}
export default connect(mapStateToProps)(Checkout)