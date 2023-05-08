import { useTranslation } from 'next-i18next';
import ServiceCard from '../../UI/ServiceCard/ServiceCard';
// import {informations} from '../cardsStyle'
// import {informations2} from '../cardsStyle'
// import {informations3} from '../cardsStyle'
// import {informations4} from '../cardsStyle'
import {divStyle} from '../cardsStyle'
import {divStyle2} from '../cardsStyle'
import {divStyle3} from '../cardsStyle'
import {divStyle4} from '../cardsStyle'


const PakageCards = ({props }) => {
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
     let informations4 = [
        { name: `${t("ChooseYourPackage.packages.card_4.duration")}`, img: "watch.png" },
        { name: `${t("ChooseYourPackage.packages.card_4.service")}`, img: "calendar.png" },
        { name: `${t("ChooseYourPackage.packages.card_4.cost")}`, img: "bankCard.png" }
    ];
    return (
        <>
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
        </>

    )
}

export default PakageCards