import { useTranslation } from 'next-i18next';
import styles from './spendTimeOn.module.scss';

const SpendTimeOn = ({props }) => {
    const { t } = useTranslation('common');

    return (
        <div className={styles.spendTimeOn}>
            <span>{t('ChooseYourPackage.packages.card_4.addition.title')}</span>
            
                <p>{t('ChooseYourPackage.packages.card_4.addition.text_1')}</p>
                <p>{t('ChooseYourPackage.packages.card_4.addition.text_2')}</p>
                <p>{t('ChooseYourPackage.packages.card_4.addition.text_3')}</p>
            
        </div>
    )
}

export default SpendTimeOn