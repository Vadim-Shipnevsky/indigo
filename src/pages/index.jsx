
import '../i18n';
import React, { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import Header from "../components/Header/Header.jsx";
import Greetings from "../components/Greetings/Greetings.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import AboutIndigo from "../components/AboutIndigo/AboutIndigo.jsx";
import Consulting from "../components/Consulting/Consulting"
import Head from 'next/head';


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
      <Greetings />
      <AboutMe />
      <AboutIndigo />
      <Consulting />
    </Suspense>
  </>
}

export default Home