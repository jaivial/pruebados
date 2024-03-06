"use client";
// import dynamic from 'next/dynamic';
// import { useEffect } from 'react';
// import ServiciosIndex from './components/serviciosindex';
// import Footer from './components/footer';
// import GoogleReviews from './components/googlereviews';
import './page.css';
import dynamic from 'next/dynamic';

const NavBar = dynamic(()=> import('./components/navbar'), {
    ssr:false,
})
const HeroSection = dynamic(()=> import('./components/herosection'), {
    ssr:false,
})
const SobreMi = dynamic(()=> import('./components/sobremi'), {
    ssr:false,
})
const ServiciosIndex = dynamic(()=> import('./components/serviciosindex'), {
    ssr:false,
})
const GoogleReviews = dynamic(()=> import('./components/googlereviews'), {
    ssr:false,
})
const Contacto = dynamic(()=> import('./components/contactoindex'), {
    ssr:false,
})
const Footer = dynamic(()=> import('./components/footer'), {
  ssr:false,
})



const HomePage = () => {

  return (
    <div id='index'>
      <NavBar />
      <HeroSection />
      <SobreMi />
      <ServiciosIndex />
      <GoogleReviews />
      <Contacto />
      <Footer />
    </div>
  );
};

export default HomePage;
