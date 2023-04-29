import Image from 'next/image';
import React from 'react';
import stules from './serviceCard.module.scss';
import Button from '../Button/Button.jsx'

// import styles from './header.module.scss'

const ServiceCard = ({ service, aboutService, information, style, styleP}) => {
    let informations = information.map((e) => <div style={styleP} className={stules.information}>
        <Image src={`/${e.img}`} alt='' width={30} height={39} />
        <p>{e.name}</p>
    </div>)

    return (
        <div style={style} className={stules.container}>
            <p>{service}</p>
            <p>{aboutService}</p>
            <div style={styleP} className={stules.informations}>
                {informations}
            </div>
            <Button text={'Learn More'}/>
        </div>

    )
}

export default ServiceCard