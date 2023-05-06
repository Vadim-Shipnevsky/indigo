import styles from './greetings.module.scss'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const Greetings = () => {
    const { t } = useTranslation('common');
    const router = useRouter(); 
    const g = router;
    let classNameGreetings = null;
    let classNameHello = null;
    console.log(g)
    if(g.locale == 'en'){
        classNameGreetings = styles.greetings;
        classNameHello = styles.hello;
    }else {
        classNameGreetings = styles.greetingsRU;
        classNameHello = styles.helloRU;
    }
    return (
        <div className={styles.container}>
            <div className={classNameGreetings}>
                <div  className={classNameHello}>
                    {t('greetings.hello')}
                </div>
                <span className={styles.delimiter} />
                <div className={styles.welcome}>
                    {t('greetings.welcome')}
                </div>
            </div>
        </div>

    )
}

export default Greetings