import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    // let message;
    // if(cart.length < 4 ){
    //     message = <p>Please add some product.</p>
    // }
    // else {
    //     message = <p>Thanks for purchase</p>
    // }
    return (
        <div>
            <h3>Order summary:{cart.length}</h3>
            {cart.length < 4 ? <p>purchase</p>  : <p>Thank you for purchasing</p>}
            {cart.map((item) => (
                <p key={item._id}>
                    {item.name}{" "}
                    <button onClick={() => handleRemoveFromCart(item._id)}>
                        X
                    </button>
                </p>
            ))}
            {cart.length > 3 && <p>Stop adding</p>}
            {cart.length > 3 || <p>what is your name</p>}
        </div>
    );
};

export default Cart;
