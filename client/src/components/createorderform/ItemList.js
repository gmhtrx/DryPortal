import React from "react";
import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";

export const ItemList = props => (
<div className='product-list-item'>
    {console.log(props.items.name)}
    <h3>{ props.items.name }</h3>
    <img
      height={100}
      title={ props.items.name }
      src={props.items.image}
    />
    <div>${ props.items.price }</div>
    <div>
      <AddBtn
        cartItem={props.cartItem}
        item={props.items}
        addToCart={props.addToCart}
      />

      {
        props.cartItem
          ? <RemoveBtn
            cartItem={props.cartItem}
            item={props.items}
            removeFromCart={props.removeFromCart}
          />
          : null
      }
      
    </div>
  </div>
  );
  