"use client";
import Link from 'next/link';
// import dynamic from 'next/dynamic';
import { useEffect } from 'react';
// import ServiciosIndex from './components/serviciosindex';
// import Footer from './components/footer';
// import GoogleReviews from './components/googlereviews';
import './page.css';
import "./components/navbar.css";
import dynamic from 'next/dynamic';
import Logo from '../../public/assets/LogoNombre2.png';
import Image from 'next/image';
import Arrow from '../../public/assets/arrow.svg';
import ArrowRosa from '../../public/assets/arrowrosa.svg';
import './components/herosection.css';
import './components/sobremi.css';
import { motion, useAnimation } from 'framer-motion';
import SobreMiImage from '../../public/assets/guilleportada.png';
import { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
const Rectangulo2 = dynamic(() => { return import('./components/rectangulo2') }, { ssr: false });
import { useInView } from 'react-intersection-observer';
import Icon1 from '../../public/assets/icon1.png';
import Icon2 from '../../public/assets/icon2.png';
import Icon3 from '../../public/assets/icon3.png';
import './components/serviciosindex.css';
import './components/contactform.css';
import DottedLine from '../../public/assets/dottedline.png';
import ArrowGif from '../../public/assets/arrowgif.gif';
import WhatsappIconGreen from '../../public/assets/whatsappicongreen.png';
import WhatsappIcon from '../../public/assets/whatsappicon.png';
import './components/contactoindex.css';
import './components/footer.css';


import Isotipo from '../../public/assets/ISOTIPO.png'
import WhatsappRosa from '../../public/assets/whatsapprosa.png'
import EmailRosa from '../../public/assets/emailrosa.png'
import InstagramRosa from '../../public/assets/instagramrosa.png'





const ContactForm = dynamic(() => import('./components/contactform'), {
  ssr: false,
})
const HeroSection = dynamic(() => import('./components/herosection'), {
  ssr: false,
})
const SobreMi = dynamic(() => import('./components/sobremi'), {
  ssr: false,
})
const ServiciosIndex = dynamic(() => import('./components/serviciosindex'), {
  ssr: false,
})
const GoogleReviews = dynamic(() => import('./components/googlereviews'), {
  ssr: false,
})
const Contacto = dynamic(() => import('./components/contactoindex'), {
  ssr: false,
})
const Footer = dynamic(() => import('./components/footer'), {
  ssr: false,
})



const HomePage = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };


  }, []);

  const { transform } = useSpring({
    transform: `translateX(${scrollY * 0.08}px)`,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props1 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 1000 },
    delay: 500,
  });

  const props2 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 1000, },
    delay: 1250,
  });

  const props3 = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0%)' : 'translateX(100%)',
    config: { duration: 1000 },
    delay: 2000,
  });

  //contact form


  return (


    <main>
      <nav className="navbar">
        <div className="logo">
          <Image
            src={Logo}
            className='logonavbar'
            alt='Guillermo Fernández dietista nutricionista en Valencia'
          >

          </Image>
        </div>
        <div className='rightsidenavbar'>

          <div className="links">
            <Link href="/">Inicio</Link>
            <Link href="/news">Sobre mí</Link>

            <div className="dropdown">
              <span>Servicios</span>
              <Image src={Arrow} className='arrownegra' alt='Guillermo Fernández dietista nutricionista en Valencia'></Image>
              <Image src={ArrowRosa} className='arrowrosa' alt='Guillermo Fernández dietista nutricionista en Valencia'></Image>
              <div className="dropdown-content">
                <Link href="/nutricion-deportiva">Nutrición Deportiva</Link>
                <Link href="/nutricion-clinica">Nutrición Clínica</Link>
                <Link href="/perdida-de-peso">Pérdida de Peso</Link>
              </div>
            </div>
            <Link href="/sobre-mi">Contacto</Link>
          </div>
          <div className="appointment-button">Pide tu Cita</div>
        </div>
      </nav>

      <div className='wrapper'>
        <div className='herosectionwrapper'>
          <div className='background-image'></div>

          <motion.div
            initial={{ x: '-200%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}

            className='textoherosectionwrapper'
          >
            <h2>Transforma tu vida, bocado a bocado</h2>
            <h1>Guillermo Fernández de la Torre</h1>
            <h2>Dietista - Nutricionista</h2>
            <div className="appointment-button-herosection">CONTACTAR</div>
          </motion.div>
          <motion.div
            className='imagenherosection'
          >

          </motion.div>
        </div>

      </div>


      <div className='sobremiwrapper'>
        <div className="titulosectionwrapper">
          <h2>Sobre mi.</h2>
          <h3>Guillermo Fernández de la Torre</h3>

        </div>
        <div className="sectionwrapper">
          <div className='textosobremiwrapper'>
            <div className='textosobremi'>
              <p>Bienvenidos a mi consulta, soy Guillermo Fernández de la Torre, tu aliado en el camino hacia un bienestar integral. Como dietista-nutricionista colegiado (CV1797), mi compromiso es ofrecerte un acompañamiento cercano y personalizado, diseñando planes nutricionales que se ajustan a tus objetivos de salud y estilo de vida. Mi formación y experiencia en el campo de la nutrición son el fundamento sobre el que construyo cada estrategia, siempre con un enfoque basado en la evidencia científica.</p>
              <br></br>
              <p>Como tu nutricionista, mi compromiso es guiarte hacia un bienestar duradero, diseñando planes nutricionales que se adaptan específicamente a tus necesidades y preferencias. Entiendo que la nutrición trasciende lo que ponemos en nuestro plato; es acerca de cómo cada elección alimenticia influye en nuestro bienestar general. Mi enfoque se centra en desarrollar un camino personalizado y sostenible hacia la salud. Estoy aquí para iniciar contigo este viaje de transformación, acompañándote en cada paso hacia la consecución de tus metas de salud realistas y el logro de una vida plenamente satisfactoria.
              </p>

              <motion.div
                className='sobremivermasbutton'
              >
                VER MÁS
              </motion.div>
            </div>
          </div>
          <div className='imagenessobremiwrapper'>
            <animated.div
              className='rectangulo1'
              style={{ transform }}>
            </animated.div>
            <Rectangulo2 />
            <Image src={SobreMiImage} className='sobremiimagenperfil' alt='Guillermo Fernández dietista nutricionista en Valencia' />
          </div>
        </div>


      </div >


      <div className="wrapperservicios" id="servicios" ref={ref}>
        <div className="wrappertituloservicios">
          <h2>SERVICIOS EN NUTRICIÓN</h2>
          <h3>Online y Presencial</h3>
        </div>
        <div className="wrapperrectangulosservicios">
          <animated.div className="rectangulo" style={props1}>
            <Image
              className='imageservicios'
              src={Icon1}
              alt='Guillermo Fernández dietista nutricionista en Valencia'
            />
            <div className="textorectangulowrapper">
              <h3>Nutrición Clínica</h3>
              <p>Revitaliza tu salud con soluciones personalizadas.</p>
              <p>Estrategia integral para cada condición.</p>
              <p>Consejería detallada y apoyo continuo.</p>
            </div>
            <div className="vermasserviciosbutton">
              VER MÁS
            </div>
          </animated.div>

          <animated.div className="rectangulo" style={props2}>
            <Image
              className='imageservicios'
              src={Icon3}
              alt='Guillermo Fernández dietista nutricionista en Valencia'
            />
            <div className="textorectangulowrapper">
              <h3>Nutrición Deportiva</h3>
              <p>Maximizando tu máximo nivel deportivo.</p>
              <p>Especialización en diferentes deportes.</p>
              <p>Estrategias personalizadas.</p>
            </div>
            <div className="vermasserviciosbutton">
              VER MÁS
            </div>
          </animated.div>

          <animated.div className="rectangulo" style={props3}>
            <Image
              className='imageservicios'
              src={Icon2}
              alt='Guillermo Fernández dietista nutricionista en Valencia'
            />
            <div className="textorectangulowrapper">
              <h3>Pérdida De Peso</h3>
              <p>Transformación de rutinas alimentarias.</p>
              <p>Creando un equilibrio nutritivo.</p>
              <p>Soporte en cada paso.</p>
            </div>
            <div className="vermasserviciosbutton">
              VER MÁS
            </div>
          </animated.div>
        </div>
      </div>

      <div className="contactoindexwrapper">
        <div className="titulocontactoindex">
          <h2>Contacto</h2>
          <h3>¿Preparado para iniciar tu viaje hacia una salud y nutrición optimizadas?</h3>
        </div>

        <ContactForm />

        <Image
          src={DottedLine}
          className='dottedline'
          alt='Guillermo Fernández dietista nutricionista en Valencia'>
        </Image>


        <div className="whatsappwrapper">
          <h2>Envíame un WhatsApp</h2>
          <div className="imageneswhatsappwrapper">
            <Image
              src={ArrowGif}
              className='arrowgif'
              alt='Guillermo Fernández dietista nutricionista en Valencia'
            >
            </Image>
            <Link
              href={"https://wa.me/34692747052"}>
              <Image
                src={WhatsappIcon}
                className='whatsappiconcontacto'
                alt='Guillermo Fernández dietista nutricionista en Valencia'
              >
              </Image>
              <Image
                src={WhatsappIconGreen}
                className='whatsappiconcontactogreen'
                alt='Guillermo Fernández dietista nutricionista en Valencia'
              >
              </Image>
            </Link>
          </div>
        </div>




      </div>

      <footer className='footerwrapper'>
        <div className="footer1">
          <Image src={Isotipo} alt='Guillermo Fernández dietista nutricionista en Valencia'></Image>
          <h3>Guillermo Fernández de la Torre</h3>
          <div className="parrafowrapper">
            <p style={{ fontStyle: 'italic' }}>Transforma tu vida bocado a bocado.
            </p>
            <p>Como tu nutricionista, me comprometo a guiarte hacia un bienestar duradero con planes personalizados que se adaptan a tus necesidades y preferencias. Mi enfoque se centra en un camino sostenible hacia la salud, acompañándote en cada paso hacia tus metas de bienestar.</p>
          </div>
          <div className="linea">
          </div>
          <div className="contactlistwrapper">
            <Link href={"https://wa.me/34692747052"}>
              <div className="iconoswrapper">
                <Image src={WhatsappRosa} alt='Guillermo Fernández dietista nutricionista en Valencia'></Image> 692747052
              </div>
            </Link>
            <Link href={'mailto:jaimebillanueba@gmail.com'}>
              <div className="iconoswrapper">
                <Image src={EmailRosa} alt='Guillermo Fernández dietista nutricionista en Valencia'></Image> jaimebillanueba99@gmail.com
              </div>
            </Link>
            <Link href={'https://www.instagram.com/jaimevillalcon/'}>
              <div className="iconoswrapper">
                <Image src={InstagramRosa} alt='Guillermo Fernández dietista nutricionista en Valencia'></Image> @jaimevillalcon
              </div>
            </Link>
          </div>
        </div>
        <div className="footer2">
          <div className="footer2textowrapper">
            <p>© 2024, Guillermo Fernández de la Torre. </p>
            <p>Todos los derechos reservados.</p>
            <p>Diseño web Jaime Digital Studios.</p>
          </div>
          <div className="footer2textowrapper">
            <Link href={'./page.js'}>Aviso Legal</Link>
            <Link href={'./page.js'}>Política de privacidad</Link>
            <Link href={'./page.js'}>Accesibilidad</Link>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default HomePage;
