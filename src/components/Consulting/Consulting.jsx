import { useTranslation } from "react-i18next";
import stules from './consulting.module.scss';
import Questions from '../UI/Questions/Questions'

const Consulting = ({ questions }) => {
    const { t } = useTranslation('common');
    const text = t("ConsultingTopics.BusinessConsulting");
    

    return (
        <div className={stules.container}>
            <Questions/>
        </div>
    )
}

export default Consulting