import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    return (
        <div>
            <h1>Cart section <i class="fas fa-shopping-cart"></i> {cart.length} </h1>
            <ul>
                {
                    cart.map(item => <li>{item.strMeal}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;