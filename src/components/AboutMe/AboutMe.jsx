import styles from './aboutMe.module.scss'
import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.container}>
            <div className={styles.greetings}>
                <div className={styles.hello}>
                    {t('aboutMe.name')}
                </div>
                <div>
                    <div className={styles.welcome}>
                        <div>
                            {t('aboutMe.profession')}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutMe