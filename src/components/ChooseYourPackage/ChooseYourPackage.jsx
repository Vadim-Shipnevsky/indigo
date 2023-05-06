import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from './chooseYourPackage.module.scss';
import ServiceCard from '../UI/ServiceCard/ServiceCard';

const ChooseYourPackage = ({ props }) => {
    const { t } = useTranslation('common');
    let informations = [
        { name: `${t("ChooseYourPackage.packages.card_1.duration")}`, img: "watch.png" },
        { name: `${t("ChooseYourPackage.packages.card_1.service")}`, img: "calendar.png" },
        { name: `${t("ChooseYourPackage.packages.card_1.cost")}`, img: "bankCard.png" }
    ];
    let informations2 = [
        { name: `${t("ChooseYourPackage.packages.card_2.duration")}`, img: "watch.png" },
        { name: `${t("ChooseYourPackage.packages.card_2.service")}`, img: "calendar.png" },
        { name: `${t("ChooseYourPackage.packages.card_2.cost")}`, img: "bankCard.png" }
    ];
    let informations3 = [
        { name: `${t("ChooseYourPackage.packages.card_3.duration")}`, img: "watch.png" },
        { name: `${t("ChooseYourPackage.packages.card_3.service")}`, img: "calendar.png" },
        { name: `${t("ChooseYourPackage.packages.card_3.cost")}`, img: "bankCard.png" },
        { name: `${t("ChooseYourPackage.packages.card_3.urgentResponse")}`, img: "bankCard.png" }
    ];
    let informations4= [
        { name: `${t("ChooseYourPackage.packages.card_4.duration")}`, img: "watch.png" },
        { name: `${t("ChooseYourPackage.packages.card_4.service")}`, img: "calendar.png" },
        { name: `${t("ChooseYourPackage.packages.card_4.cost")}`, img: "bankCard.png" }
    ];
    const divStyle = {
        background: '#A0CAD7',
        margin: '0 auto',
        color: "#002B66",
    };
    const divStyle2 = {
        background: '#D7A0C4',
        margin: '0 auto',
        color: "#002B66",
    };
    const divStyle3 = {
        background: '#DF8282',
        margin: '0 auto',
        color: "#002B66",
    };
    const divStyle4 = {
        background: '#F4CA99',
        margin: '0 auto',
        color: "#002B66",
    };
    return (
        <div className={styles.ChooseYourPackage}>
            <div className={styles.container}>
                <h6>{t('ChooseYourPackage.title')}</h6>
                <span className={styles.delimiter}></span>
                <div className={styles.conteinerCards}>
                    <ServiceCard 
                    service={t('ChooseYourPackage.packages.card_1.title')}
                    aboutService={t('ChooseYourPackage.packages.card_1.aboutThePackage')}
                    information={informations}
                    style={divStyle}
                    buttonText={t("ChooseYourPackage.packages.card_1.button")}
                    number={'1/4'}
                    />
                    <ServiceCard 
                    service={t('ChooseYourPackage.packages.card_2.title')}
                    aboutService={t('ChooseYourPackage.packages.card_2.aboutThePackage')}
                    information={informations2}
                    style={divStyle2}
                    buttonText={t("ChooseYourPackage.packages.card_2.button")}
                    number={'2/4'}
                    />
                    <ServiceCard 
                    service={t('ChooseYourPackage.packages.card_3.title')}
                    aboutService={t('ChooseYourPackage.packages.card_3.aboutThePackage')}
                    information={informations3}
                    style={divStyle3}
                    buttonText={t("ChooseYourPackage.packages.card_3.button")}
                    number={'3/4'}
                    />
                    <ServiceCard 
                    service={t('ChooseYourPackage.packages.card_4.title')}
                    aboutService={t('ChooseYourPackage.packages.card_4.aboutThePackage')}
                    information={informations4}
                    style={divStyle4}
                    buttonText={t("ChooseYourPackage.packages.card_4.button")}
                    props={true}
                    number={'4/4'}
                    /> 
                </div>
            </div>
        </div>

    )
}

export default ChooseYourPackage