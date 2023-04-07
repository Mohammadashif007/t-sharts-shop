import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>please added some product</p>
    }
    else {
        message = <div>
            <p>thanks for waste your money</p>
        </div>
    }
    return (
        <div>
            <h3>Order summary:{cart.length}</h3>
            {message}
            {cart.map((item) => (
                <p key={item._id}>
                    {item.name}{" "}
                    <button onClick={() => handleRemoveFromCart(item._id)}>
                        X
                    </button>
                </p>
            ))}
        </div>
    );
};

export default Cart;
