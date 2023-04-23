import styles from './header.module.scss'
import { useTranslation } from "react-i18next";
import Image from 'next/image';

import MenuButton from './Menu/MenuButton';

const Header = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.header_1}>
                <MenuButton/>

            {/* <Image className={styles.logo} src='/logo.png' alt='' width={299} height={303}/> */}
            <div className={styles.header}>
                <div className={styles.logoConteiner}>
                    <div className={styles.logo}>
                        <h1 className={styles.logo_text}>
                            {t('header.logo')}
                        </h1>
                    </div>
                </div>
                <div className={styles.tarot}>
                    <p>{t('header.personal')}</p>
                    <h2>{t('header.tarot')}</h2>
                </div>
            </div>
        </div>

    )
}

export default Header