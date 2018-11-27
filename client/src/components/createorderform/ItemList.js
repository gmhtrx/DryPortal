import React from "react";
import AddBtn from "./AddBtn";
import RemoveBtn from "./RemoveBtn";

const ItemList = props => (
<div className='product-list-item'>
    <h3>{ props.item.name }</h3>
    <img
      height={100}
      title={ props.item.name }
      src={props.item.image}
    />
    <div>${ props.item.price }</div>
    <div>
      <AddBtn
        cartItem={props.cartItem}
        item={props.item}
        addToCart={props.addToCart}
      />

      {
        props.cartItem
          ? <RemoveBtn
            cartItem={props.cartItem}
            item={props.item}
            removeFromCart={props.removeFromCart}
          />
          : null
      }
      
    </div>
  </div>
  );
  
  export default ItemList;