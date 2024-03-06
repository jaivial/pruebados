"use client";
import React from 'react';
import './herosection.css';
import { motion } from 'framer-motion';
import ScaleImg from '../../../public/assets/scale1.jpeg';
import Image from 'next/image';
import { useClient } from 'next/client'; // Import useClient



const HeroSection = () => {
    return (
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
    );
};

export default HeroSection;