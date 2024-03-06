// pages/index.js
"use client";
import { useClient } from 'next/client'; // Correct import
import dynamic from 'next/dynamic'
import NavBar from './components/navbar';
import HeroSection from './components/herosection';
// import SobreMi from './components/sobremi';
import ServiciosIndex from './components/serviciosindex';
import ContactoIndex from './components/contactoindex';
import Footer from './components/footer';
import GoogleReviews from './components/googlereviews';
const SobreMi = dynamic(() => import('./components/sobremi'), {
  loading: () => <p>Loading...</p>,
})

import './page.css';

const HomePage = () => {

  return (
    <div id='index'>
      <NavBar />
      <HeroSection />
      <SobreMi />
      <ServiciosIndex />
      <GoogleReviews />
      <ContactoIndex />
      <Footer />
    </div>
  );
};

export default HomePage;
