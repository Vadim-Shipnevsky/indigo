
import React from "react";
import { useTranslation } from "react-i18next";

const App = () => {
    const { t } = useTranslation('common');
    return <>
        
        <div>
            <h1>{t("aboutMe.profession")}</h1>
            
        </div>
    </>
}

export default App
