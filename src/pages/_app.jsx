
// import type { AppProps } from 'next/app';
// import '../assets/styles/index.scss';

// const App = ({ Component, pageProps }: AppProps) => {
//   return (<Component {...pageProps}/>)
// }
// export default App

import '../assets/styles/index.scss';

const App = ({ Component, pageProps }) => {
  return (<Component {...pageProps}/>)
}
export default App