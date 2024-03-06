"use client";
import React, { useState } from 'react';
import './footer.css';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Isotipo from '../../../public/assets/ISOTIPO.png'
import WhatsappRosa from '../../../public/assets/whatsapprosa.png'
import EmailRosa from '../../../public/assets/emailrosa.png'
import InstagramRosa from '../../../public/assets/instagramrosa.png'
import Link from 'next/link';
import { useClient } from 'next/client';



const Footer = () => {


    return (
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
    );
};

export default Footer;

