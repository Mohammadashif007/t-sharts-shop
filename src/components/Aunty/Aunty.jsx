import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { DollarContext } from '../Grandpa/Grandpa';

const Aunty = ({ring}) => {
    const [dollar, setDollar] = useContext(DollarContext);
    return (
        <div>
            <h1>Aunty</h1> 
            <p><small>Grandpa dollar : {dollar}</small></p>
            <button onClick={() => setDollar(dollar + 1000)}>send 1000$</button>
            <button onClick={() => setDollar((dollar > 0)? dollar - 500 : dollar)}>Receive 500$</button>
            <section className='flex'>
                <Cousin>Abir</Cousin>
                <Cousin hasFriend={true} ring = {ring}>Nibir</Cousin>
            </section>
        </div>
    );
};

export default Aunty;