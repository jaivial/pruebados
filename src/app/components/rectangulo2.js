"use client";
import React, { useEffect } from 'react';
import './rectangulo2.css';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import SobreMiImage from '../../../public/assets/jaime.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useClient } from 'next/client';
import { isServer } from '../utils/isserver';


const Rectangulo2 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (typeof window !== 'undefined') {
      // Add event listener only on the client side
      window.addEventListener('scroll', handleScroll);

      // Remove event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);




  const { transform } = useSpring({
    transform: `translate(${scrollY * 0.16}px, ${-scrollY * 0.06}px)`
  });



  return (

    <animated.div
      className='rectangulo2'
      style={{ transform }}            >
    </animated.div>


  );
};

export default Rectangulo2;
