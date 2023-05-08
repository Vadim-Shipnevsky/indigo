import Image from 'next/image';
import React from 'react';
import stules from './serviceCard.module.scss';
import Button from '../Button/Button.jsx'
import SpendTimeOn from './components/SpendTimeOn'
import { useRouter } from 'next/router';


const ServiceCard = ({ props, service, aboutService, information, style, styleP, buttonText, number }) => {
    let informations = information.map((e) => <div key={Math.random()} style={styleP} className={stules.information}>
        <Image className={stules.image} key={Math.random()} src={`/${e.img}`} alt='' width={30} height={39} />
        <p key={Math.random()} >{e.name}</p>
    </div>)
    let classNameContainer = null;
    const router = useRouter();
    let g = router;
    if(g.locale == 'ru'){
        classNameContainer = stules.containerRu 
    }else{
        classNameContainer = stules.container 
    }
    return (
        <div style={style} className={classNameContainer}>
            <p>{service}</p>
            <p>{aboutService}</p>
            <div style={styleP} className={stules.informations}>
                {informations}
            </div>
            {props ? <SpendTimeOn /> : <></>}
            {number ? <span className={stules.number}>{number}</span> : <></>}
            <Button className={stules.buttonContainer} text={buttonText} />

        </div>

    )
}

export default ServiceCard