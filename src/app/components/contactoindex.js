import React, { useEffect, useRef } from 'react';
import './contactoindex.css';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import WhatsappIcon from '../../../public/assets/whatsappicon.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Rectangulo2 from './rectangulo2';
import { useInView } from 'react-intersection-observer';
import ContactForm from './contactform';
import DottedLine from '../../../public/assets/dottedline.png';
import ArrowGif from '../../../public/assets/arrowgif.gif';
import Link from 'next/link';
import WhatsappIconGreen from '../../../public/assets/whatsappicongreen.png';


const ContactoIndex = () => {




    return (
        <div className="contactoindexwrapper">
            <div className="titulocontactoindex">
                <h2>Contacto</h2>
                <h3>¿Preparado para iniciar tu viaje hacia una salud y nutrición optimizadas?</h3>
            </div>

            <ContactForm />

            <Image
                src={DottedLine}
                className='dottedline'>
            </Image>


            <div className="whatsappwrapper">
                <h2>Envíame un WhatsApp</h2>
                <div className="imageneswhatsappwrapper">
                    <Image
                        src={ArrowGif}
                        className='arrowgif'
                    >
                    </Image>
                    <Link
                    href={"https://wa.me/34692747052"}>
                        <Image
                            src={WhatsappIcon}
                            className='whatsappiconcontacto'
                        >
                        </Image>
                        <Image
                            src={WhatsappIconGreen}
                            className='whatsappiconcontactogreen'
                        >
                        </Image>
                    </Link>
                </div>
            </div>




        </div>
    );
};

export default ContactoIndex;
