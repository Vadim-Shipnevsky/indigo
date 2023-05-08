import styles from './socialsContact.module.scss';
import Image from 'next/image';
import Socials from '../UI/Socials/Socials'
import { useTranslation } from 'next-i18next';

const SocialsContact = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.onlineConsultations}>
            <Image src={"/socialsFon.jpg"} alt='' fill object-fit='cover' priority />
            <div className={styles.container}>
                <p>{t('Socials')}</p>
                <span className={styles.delimiter} />
                <div className={styles.socialsContainer}>
                    <Socials props={'YouTube'} />
                    <Socials props={'Instagram'} />
                    <Socials props={'TikTok'} />
                    <Socials props={'Yappy'} />
                </div>
                <p className={styles.socials}>{t('Contact')}</p>
                <span className={styles.delimiter} />
                <div className={styles.contactContainer}>
                    <Socials props={'Telegram'} />
                    <Socials props={'Whatsapp'} />
                </div>
            </div>
        </div>
    )
}

export default SocialsContact