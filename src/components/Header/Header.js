// import styles from '../../styles/Home.module.scss'
import styles from '../../assets/styles/Home.module.scss'

// import './sss.scss'
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation('common');
    return (
        // <><div className="sss">fdfsdfsdfsdf</div></>
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.sss}>sdasdasd</div>
                {/* <h1>{t("header.personal")}</h1>
                <h2>{t("header.tarot")}</h2> */}
            </div>
        </div>
    )
}

export default Header