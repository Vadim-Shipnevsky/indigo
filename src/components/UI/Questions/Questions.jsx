import stules from './questions.module.scss'
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Questions = ({ props }) => {
    const { t } = useTranslation('common');
    let consultationinformation = [
        { text: `${t("consultingTopics.businessConsulting.title")}` },
        { text: `${t("consultingTopics.businessConsulting.text_1")}` },
        { text: `${t("consultingTopics.businessConsulting.text_2")}` },
        { text: `${t("consultingTopics.businessConsulting.text_3")}` },
        { text: `${t("consultingTopics.businessConsulting.text_4")}` },
        { text: `${t("consultingTopics.businessConsulting.text_5")}` },
        { text: `${t("consultingTopics.businessConsulting.text_6")}` },
        { text: `${t("consultingTopics.businessConsulting.text_7")}` },
    ];
    let consultationinformation2 = [
        { text: `${t("consultingTopics.studies&Work.title")}` },
        { text: `${t("consultingTopics.studies&Work.text_1")}` },
        { text: `${t("consultingTopics.studies&Work.text_2")}` },
        { text: `${t("consultingTopics.studies&Work.text_3")}` },
        { text: `${t("consultingTopics.studies&Work.text_4")}` },
        { text: `${t("consultingTopics.studies&Work.text_5")}` },
    ];
    let consultationinformation3 = [
        { text: `${t("consultingTopics.loveRelationships.title")}` },
        { text: `${t("consultingTopics.loveRelationships.text_1")}` },
        { text: `${t("consultingTopics.loveRelationships.text_2")}` },
        { text: `${t("consultingTopics.loveRelationships.text_3")}` },
        { text: `${t("consultingTopics.loveRelationships.text_4")}` },
    ];
    let consultationinformation4 = [
        { text: `${t("consultingTopics.society.title")}` },
        { text: `${t("consultingTopics.society.text_1")}` },
        { text: `${t("consultingTopics.society.text_2")}` },
        { text: `${t("consultingTopics.society.text_3")}` },
    ];
    let consultationinformation5 = [
        { text: `${t("consultingTopics.personalDevelopment.title")}` },
        { text: `${t("consultingTopics.personalDevelopment.text_1")}` },
        { text: `${t("consultingTopics.personalDevelopment.text_2")}` },
        { text: `${t("consultingTopics.personalDevelopment.text_3")}` },
        { text: `${t("consultingTopics.personalDevelopment.text_4")}` },
    ];
    let consultationinformation6 = [
        { text: `${t("consultingTopics.relocation.title")}` },
        { text: `${t("consultingTopics.relocation.text_1")}` },
        { text: `${t("consultingTopics.relocation.text_2")}` },
        { text: `${t("consultingTopics.relocation.text_3")}` },
        { text: `${t("consultingTopics.relocation.text_4")}` },
    ];
    let consultationinformation7 = [
        { text: `${t("consultingTopics.otherTopics.title")}` },
        { text: `${t("consultingTopics.otherTopics.text_1")}` },
        { text: `${t("consultingTopics.otherTopics.text_2")}` },
        { text: `${t("consultingTopics.otherTopics.text_3")}` },
    ];
    return (
        <>
            <div className={stules.container}>
                <div>
                    {consultationinformation.map((_, e) => <><p>{_.text}</p></>)}
                </div>
                <div>
                    {consultationinformation2.map((_, e) => <><p>{_.text}</p></>)}
                </div>
                <div>
                    {consultationinformation3.map((_, e) => <><p>{_.text}</p></>)}
                </div>
                <div>
                    {consultationinformation4.map((_, e) => <><p>{_.text}</p></>)}
                </div>
                <div>
                    {consultationinformation5.map((_, e) => <><p>{_.text}</p></>)}
                </div>
                <div className={stules.consultationinformation6}>
                    {consultationinformation6.map((_, e) => <><p>{_.text}</p></>)}
                </div>
            </div>
            <div className={stules.containerFooters}>
                <div className={stules.consultationinformation7}>
                    {consultationinformation7.map((_, e) => <><p>{_.text}</p></>)}
                    <div className={stules.containerButton}>
                        <button className={stules.button}>{t("consultingTopics.button")}</button>
                    </div>
                </div>
                <div className={stules.imageContain}>
                    <Image className={stules.cards} src={"/cards.png"} alt='' fill object-fit="contain" />
                </div>
            </div>

        </>
    )
}
// width={321.82} height={321.82}
export default Questions