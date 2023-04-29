import styles from './aboutIndigo.module.scss'
import Image from 'next/image';
import { useTranslation } from "react-i18next";
import ServiceCard from "../UI/ServiceCard/ServiceCard"

const AboutIndigo = () => {
    const { t } = useTranslation('common');
    let informations = [
        { name: `${t("cardService.myServices.tarotReading")}`, img: "sticker1.png" },
        { name: `${t("cardService.myServices.tarotReading.content")}`, img: "sticker2.png" },
        { name: `${t("cardService.myServices.tarotReading.content.creativeProjects")}`, img: "sticker3.png" }
    ];
    const divStyle = {
        background: 'rgba(0, 16, 78, 0.52)',
        backdropFilter: 'blur(1.375rem)',
    };
    return (
        <div className={styles.container}>
            <Image src={"/bgAboutIndigo.jpg"} alt='' fill objectFit='cover' />
            <div className={styles.aboutIndigo}>
                <h3>{t("aboutIndigoFlow.aboutIndigoFlow")}</h3>
                <samp className={styles.delimiter} />
                <div className={styles.info}>
                    <div className={styles.blockInfo}>
                        <p className={styles.firstLitter}>{t("aboutIndigoFlow.changes")}</p>
                        <p>{t("aboutIndigoFlow.myProfessionalExperience")}</p>
                        <p>{t("aboutIndigoFlow.myProfessionalExperience2")}</p>
                    </div>
                    <div className={styles.blockInfo}>
                        <p>{t("aboutIndigoFlow.myProfessionalExperienceContinuation")}</p>
                        <p>{t("aboutIndigoFlow.myProfessionalExperienceContinuation2")}</p>
                    </div>
                </div>
                <ServiceCard service={`${t('cardService.services')}`} aboutService={`${t('cardService.activities')}`} information={informations} style={divStyle} />
            </div>
        </div>

    )
}

export default AboutIndigo