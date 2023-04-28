import styles from './aboutMe.module.scss'
import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.container}>
            <div className={styles.aboutMe}>
                <div className={styles.myName}>
                    {t('aboutMe.name')}
                </div>
                <div>
                    <div className={styles.myWay}>
                        <div className={styles.text}>
                            <p>{t('aboutMe.professionP1')}</p>
                            <p>{t('aboutMe.professionP2')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe