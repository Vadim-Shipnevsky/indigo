import styles from './aboutIndigo.module.scss'
import Image from 'next/image';
import { useTranslation } from "react-i18next";

const AboutIndigo = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.container}>
            <Image src={"/bgAboutIndigo.jpg"} alt='' fill objectFit='cover'/>
            <div className={styles.aboutIndigo}>
                <h3>{t("aboutIndigoFlow.aboutIndigoFlow")}</h3>
                <samp className={styles.delimiter}/>
                <div className={styles.info}>
                    <div className={styles.leftBlock}>
                        <p>{t("aboutIndigoFlow.changes")}</p>
                        <p>{t("aboutIndigoFlow.myProfessionalExperience")}</p>
                        <p>{t("aboutIndigoFlow.myProfessionalExperience2")}</p>
                    </div>
                    <div className={styles.rightBlock}></div>
                </div>
            </div>
        </div>

    )
}

export default AboutIndigo