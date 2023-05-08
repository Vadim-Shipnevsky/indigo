import { useTranslation } from 'next-i18next';
import styles from './chooseYourPackage.module.scss';
import { useRouter } from 'next/router';
import PakageCards from './components/PackageCards'
import Slider from './components/Slider'
import { useState, useEffect } from 'react';
import useWindowSize from "@rooks/use-window-size"

const ChooseYourPackage = ({ props }) => {
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    const [widthWindow , setWidthWindow] = useState(null)
    useEffect(() => setWidthWindow(innerWidth), [])
    const { t } = useTranslation('common');
    let classNameContainer = null;
    const router = useRouter();
    let g = router;
    if(g.locale == 'ru'){
        classNameContainer = styles.conteinerCardsRu 
    }else{
        classNameContainer = styles.conteinerCards 
    }
    return (
        <div className={styles.ChooseYourPackage}>
            <div className={styles.container}>
                <h6>{t('ChooseYourPackage.title')}</h6>
                <span className={styles.delimiter}></span>
                <div className={classNameContainer}>
                    {widthWindow <= 1080 ? <Slider /> : <PakageCards />}
                </div>
            </div>
        </div>

    )
}

export default ChooseYourPackage