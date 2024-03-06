import React, { useEffect } from 'react';
import './sobremi.css';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import SobreMiImage from '../../../public/assets/guilleportada.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Rectangulo2 from './rectangulo2';

const SobreMi = () => {
    const [scrollY, setScrollY] = useState(0);

    if (typeof window !== 'undefined') {
        // Your client-side code that uses window or location
        useEffect(() => {
            const handleScroll = () => {
                setScrollY(window.scrollY);
            };
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
      }
      

   

    const { transform } = useSpring({
        transform: `translateX(${scrollY * 0.08}px)`,

    });





    return (
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

    );
};

export default SobreMi;
