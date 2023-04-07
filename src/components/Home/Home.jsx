import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShart from "../TShart/TShart";
import "./Home.css";
import Cart from "../Cart/Cart";
import { Toaster, toast } from "react-hot-toast";

const Home = () => {
    const tsharts = useLoaderData();

    const notify = () => toast('Item already added');

    const [cart, setCart] = useState([]);

    const handleAddToCart = (id) => {
        const exist = cart.find(item => item._id === id._id);
        if(exist){
            notify;
        }
        else {
            const newCart = [...cart, id];
            setCart(newCart);
        }

    };

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(item => item._id !== id)
        setCart(remaining);
    };

    return (
        <div className="home-container">
            <div className="tshart-container">
                {tsharts.map((tshart) => (
                    <TShart
                        key={tshart._id}
                        tshart={tshart}
                        handleAddToCart={handleAddToCart}
                    ></TShart>
                ))}
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Home;
