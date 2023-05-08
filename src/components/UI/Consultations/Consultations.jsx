import stules from './consultations.module.scss'
import React, { useState, useEffect, useRef } from 'react'

import ConsultationsSvg from './ConsultationsSvg/ConsultationsSvg'


const Consultations = ({ information, number, name, stule, stuleColor }) => {
    const [toggle, setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();
    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, []);
    const toggleState = () => {
        setToggle(!toggle)
    }
    console.log(toggle);

    return (
        <div className={stules.consultations}>
            <div style={stule} className={stules.container}>
                <p>{number}</p>
                <p>{name}</p>
                <button onClick={toggleState} className={stules.button}>
                    <ConsultationsSvg props={stuleColor} />
                </button>

            </div>
            <div
                className={toggle ? stules.accordion : stules.accordionNan}
                style={{ height: toggle ? `${heightEl}` : "0px" }}
                ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    {information}
                </p>
            </div>
        </div>

    )
}

export default Consultations