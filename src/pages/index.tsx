
import '../i18n'
import React,{ Suspense } from "react";
import {useTranslation} from 'react-i18next'
import Header from "../components/header/Header";
import Head from 'next/head'

const Home = () => {
  const { i18n } = useTranslation();
  const handle = (language) => {
    i18n.changeLanguage(language);
  }
  return <>
  <Head>
    <meta name="viewport" content="width=device-width" />
  </Head>
  <Suspense fallback={<div>Loading...</div>}>
    <button onClick={() => handle('en')}>EN</button>
    <button onClick={() => handle('ru')}>RU</button>
    <Header />
      {/* <App/> */}
  </Suspense>
  </>
}

export default Home