import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Aunty from "../Aunty/Aunty";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";
export const RingContext = createContext("golden");
export const DollarContext = createContext(0);

const Grandpa = () => {
    const ring = "Diamond";

    const [dollar, setDollar] = useState(0);
    return (
        <div className="grandpa">
            <h1>Grandpa</h1>
            <p>Grandpa han : {dollar}</p>
            <RingContext.Provider value="golden ring">
                <DollarContext.Provider value={[dollar, setDollar]}>
                    <section className="flex">
                        <Father ring={ring}></Father>
                        <Aunty ring={ring}></Aunty>
                        <Uncle></Uncle>
                    </section>
                </DollarContext.Provider>
            </RingContext.Provider>
        </div>
    );
};

export default Grandpa;
