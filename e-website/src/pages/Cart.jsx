import React, { useState } from 'react'
import { useContext } from 'react'
import { cartContext } from '../Context/CartContext'
import {Link} from 'react-router-dom'

const Cart = () => {
  const {cart} = useContext(cartContext);
  console.log(cart);
  return (
    <div>
      <ul style={{listStyle: "none"}}> {cart.map((item,i) => <li key={i}>
       <img src={item.image} style={{width:'30%'}}></img>
       <p> {item.title}</p>
       
        </li>)}</ul>
      
      <Link to='/checkout'><button>Checkout</button></Link>
    </div>
  )
}

export default Cart