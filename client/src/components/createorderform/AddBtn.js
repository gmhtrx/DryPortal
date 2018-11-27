import React from 'react'

export default function AddBtn(props) {
  return <button

  onClick={() => props.addToCart(props.item)}
  >Add to cart ({
    (props.cartItem && props.cartItem.quantity) || 0
  })</button>
}