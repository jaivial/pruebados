// pages/index.js
"use client";
import { useClient } from 'next/client'; // Correct import

import NavBar from './components/navbar';
import HeroSection from './components/herosection';
import SobreMi from './components/sobremi';
import ScrollAnimation from './components/scroll';
import ServiciosIndex from './components/serviciosindex';
import ContactoIndex from './components/contactoindex';
import Footer from './components/footer';
import GoogleReviews from './components/googlereviews';

import './page.css';

const HomePage = () => {

  return (
    <div id='index'>
      {/* <ScrollAnimation /> */}
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
