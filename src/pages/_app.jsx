
import '@/assets/styles/index.scss';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => {
  return (<Component {...pageProps} />
  )
}

export default appWithTranslation(App);
  