

import React, { Suspense } from "react";
import Header from "../components/Header/Header.jsx";
import Greetings from "../components/Greetings/Greetings.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import AboutIndigo from "../components/AboutIndigo/AboutIndigo.jsx";
import Consulting from "../components/Consulting/Consulting";
import OnlineConsultations from "../components/OnlineConsultations/OnlineConsultations.jsx";
import ChooseYourPackage from "../components/ChooseYourPackage/ChooseYourPackage.jsx";
import SocialsContact from '../components/SocialsContact/SocialsContact.jsx'
import Head from 'next/head';


import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const Home = () => {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width" />
    </Head>
    <Suspense fallback={<div>Loading...</div>}>
      <Header  />
      <Greetings />
      <AboutMe />
      <AboutIndigo />
      <Consulting />
      <OnlineConsultations />
      <ChooseYourPackage />
      <SocialsContact />
      <footer/>
    </Suspense>
  </>
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}
export default Home