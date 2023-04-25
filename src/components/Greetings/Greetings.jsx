import styles from './greetings.module.scss'
import { useTranslation } from "react-i18next";

const Greetings = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.container}>
            <div className={styles.greetings}>
                <div className={styles.hello}>
                    {t('greetings.hello')}
                </div>
                <span className={styles.delimiter} />
                <div className={styles.welcome}>
                    {t('greetings.welcome')}
                </div>
            </div>
        </div>

    )
}

export default Greetings