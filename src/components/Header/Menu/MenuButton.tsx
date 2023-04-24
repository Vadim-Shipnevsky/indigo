import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Image from 'next/image';


import stules from './menuButton.module.scss'

const MenuButton = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <div className={stules.containerMenu}>
            <div className={stules.buttonMenu}>
                <button className={stules.button} onClick={() => activeMenu ? setActiveMenu(false) : setActiveMenu(true)}>
                    menu
                </button>
            </div>
            {activeMenu ? <Menu/> : <></>}
        </div>



    )
}

export default MenuButton