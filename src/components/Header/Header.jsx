import styles from './header.module.scss'
import { useTranslation } from "react-i18next";
import Image from 'next/image';

import MenuButton from './Menu/MenuButton';

const Header = () => {
    const { t } = useTranslation('common');
    let text = t('header.logo').split('');
    let text_logo = text.map((e) => <p key={text.length +e}>{e}</p>);
    return ( 
        <div className={styles.header_1}>
            <Image src={"/hatBackground.jpg"} alt='' fill objectFit='cover' priority />
            <MenuButton />
            <div className={styles.header}>
                <div className={styles.logoConteiner}>
                    <div className={styles.logo}>
                        <Image src={"/logo.png"} alt='logo' fill priority/>
                        <div className={styles.logo_text}>
                            {text_logo}
                        </div>
                    </div>
                </div>
                <div className={styles.tarot}>
                    <p>{t('header.personal')}</p>
                    <h2>{t('header.tarot')}</h2>
                </div>
                <a className={styles.arrow} href='#'>
                    <Image className={styles.arrow1} src='/arrow.png' alt='' width={45} height={23} />
                </a>
            </div>
        </div>

    )
}

export default Header