import React, { useEffect, useRef } from 'react';
import './serviciosindex.css';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import WhatsappIcon from '../../../public/assets/whatsappicon.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Rectangulo2 from './rectangulo2';
import { useInView } from 'react-intersection-observer';
import Icon1 from '../../../public/assets/icon1.png';
import Icon2 from '../../../public/assets/icon2.png';
import Icon3 from '../../../public/assets/icon3.png';

const ServiciosIndex = () => {

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

    return (
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

    );
};

export default ServiciosIndex;
