import stules from './consultations.module.scss'
import React, { useState } from 'react'
import Image from 'next/image';


const Consultations = ({ number, name, stule, stuleColor }) => {
    const [classArrow, setClassArrow] = useState(false);
    return (
        <div style={stule} className={stules.container}>
            <p>{number}</p>
            <p>{name}</p>
            <button className={stules.button}>
                <Image style={stuleColor}  className={stules.image} src={"/arrowButtonConsultation.svg"} alt='' fill object-fit='contain' />
            </button>
        </div>
    )
}

export default Consultations