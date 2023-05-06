import Consultations from '../UI/Consultations/Consultations';
import styles from './onlineConsultations.module.scss';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const OnlineConsultations = () => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.onlineConsultations}>
            <Image src={"/onlineConsultations.jpg"} alt='' fill object-fit='cover' priority />
            <div className={styles.container}>
                <h4>{t('onlineConsultations.title')}</h4>
                <span className={styles.delimiter} />
                <div className={styles.consultationList}>
                    <Consultations stule={{ color: '#A0CAD7' }} stuleColor={{ color: '#A0CAD7' }} number={'1.'} name={`${t('onlineConsultations.paragraph_1')}`} />
                    <Consultations stule={{ color: '#D7A0C4' }} stuleColor={{ color: '#D7A0C4' }} number={'2.'} name={`${t('onlineConsultations.paragraph_2')}`} />
                    <Consultations stule={{ color: '#DF8282' }} stuleColor={{ color: '#DF8282' }} number={'3.'} name={`${t('onlineConsultations.paragraph_3')}`} />
                    <Consultations stule={{ color: '#F4CA99' }} stuleColor={{ color: '#F4CA99' }} number={'4.'} name={`${t('onlineConsultations.paragraph_4')}`} />
                </div>
            </div>


        </div>
    )
}

export default OnlineConsultations