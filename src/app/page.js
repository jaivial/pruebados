import dynamic from 'next/dynamic'
import NavBar from './components/navbar';
import HeroSection from './components/herosection';
// import SobreMi from './components/sobremi';
import ServiciosIndex from './components/serviciosindex';
import ContactoIndex from './components/contactoindex';
import Footer from './components/footer';
import GoogleReviews from './components/googlereviews';



import './page.css';

const HomePage = () => {

  return (
    <div id='index'>
      <NavBar />
      <HeroSection />
      <ServiciosIndex />
      <GoogleReviews />
      <ContactoIndex />
      <Footer />
    </div>
  );
};

export default HomePage;
