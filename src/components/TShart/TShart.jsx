import React from 'react';
import './TShart.css';

const TShart = ({tshart}) => {
    const {picture, name, gender,price} = tshart;
    return (
        <div className='tshart-info'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
        </div>
    );
};

export default TShart;