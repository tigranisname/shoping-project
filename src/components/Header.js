import React, { useState } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
  let Sum = 0
  props.orderes.forEach(el => Sum += Number.parseFloat(el.price));
  return (
    <div>
       {props.orderes.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el}/>
                  ))}
                  <p className='sum'> Sum: {Sum}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h1>lack of goods</h1>
    </div>
  )
}

export default function Header(props) {

  let [cartopen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className="nav">
                <li>About us</li>
                <li>Contact</li>
                <li>Room</li>
            </ul>
            <FaShoppingBasket onClick={() => setCartOpen(cartopen = !cartopen)} className={`shop-bascet-button ${cartopen && 'active'}`}/>

            {cartopen && (
              <div className='shop-cart'>
                 {props.orderes.length > 0 ?
                    showOrders(props) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
