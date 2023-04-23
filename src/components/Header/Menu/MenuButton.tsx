import React, { useState, useEffect } from 'react';
import Menu from './Menu';

import stules from './menuButton.module.scss'

const MenuButton = () => {
    const [activeMenu, setActiveMenu] = useState(false)

    return (

        <div className={stules.buttonMenu}>
            <button className={stules.button} onClick={() => activeMenu ? setActiveMenu(false) : setActiveMenu(true)}>menu</button>
            {activeMenu ? <Menu /> : <></>}
        </div>


    )
}

export default MenuButton