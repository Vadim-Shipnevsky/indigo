import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './consulting.module.scss';
import Questions from '../UI/Questions/Questions'
import Button from '../UI/Button/Button';

const Consulting = ({props }) => {
    const { t } = useTranslation('common');
    const divStyle = {
        bottom: '6.4375rem',
        left: '19.6875rem'
    };
    return (
        <div className={styles.container}>
            <h5>{t('consultingTopics.title')}</h5>
            <span className={styles.delimiter}></span>
            <p>{t('consultingTopics.title2')}</p>
            <Questions />
            {/* <div className={styles.buttonPositioning}>
                <Button stulesButton={divStyle} text={t('consultingTopics.button')} />
            </div> */}
            {/* <Image className={styles.cards} src={"/cards.png"} alt='' width={321.82} height={321.82} /> */}
        </div>
    )
}

export default Consulting