import styles from './header.module.scss'
import { useTranslation } from "react-i18next";
import Image from 'next/image';

import MenuButton from './Menu/MenuButton';

const Header = () => {
    const { t } = useTranslation('common');
    let text = t('header.logo').split('');
    let text_logo = text.map((e) => <p key={text.e + 1}>{e}</p>);
    return (
        <div className={styles.header_1}>
            <MenuButton />
            {/* <Image className={styles.logo} src='/logo.png' alt='' width={299} height={303}/> */}
            <div className={styles.header}>
                <div className={styles.logoConteiner}>
                    <div className={styles.logo}>
                        <div className={styles.logo_text}>
                            {text_logo}
                        </div>
                    </div>
                </div>
                <div className={styles.tarot}>
                    <p>{t('header.personal')}</p>
                    <h2>{t('header.tarot')}</h2>
                </div>
                <button className={styles.button_footer}></button>
            </div>
        </div>

    )
}

export default Header