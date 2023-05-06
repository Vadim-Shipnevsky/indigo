import styles from './aboutMe.module.scss';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';


const AboutMe = () => {
    const { t } = useTranslation('common');
    return (
        <div className={styles.container}>
            <Image src={"/backgroundMe.jpg"} alt='' fill objectFit='cover' priority />
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