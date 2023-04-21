import styles from '../../styles/Home.module.scss'
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                {/* <h1>{t("header.personal")}</h1>
                <h2>{t("header.tarot")}</h2> */}
            </div>
        </div>
    )
}

export default Header