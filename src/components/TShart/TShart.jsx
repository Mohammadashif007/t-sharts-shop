import React from "react";
import "./TShart.css";

const TShart = ({ tshart, handleAddToCart }) => {
    const { picture, name, gender, price, _id } = tshart;
    return (
        <div className="tshart-info">
            <img src={picture} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Price : ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(tshart)}>Buy Now</button>
        </div>
    );
};

export default TShart;
