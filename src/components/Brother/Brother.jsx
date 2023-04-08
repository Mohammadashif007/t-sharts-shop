import React, { useContext } from 'react';
import { DollarContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const [money] = useContext(DollarContext);
    return (
        <div>
            <h2>Brother</h2>
            {money && <p>{money}</p>}
        </div>
    );
};

export default Brother;