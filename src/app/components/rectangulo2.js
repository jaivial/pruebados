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
import dynamic from 'next/dynamic';



const Rectangulo2 = () => {

  const runOnClient = (func) => {
    if (typeof window !== "undefined") {
      if (window.document.readyState == "loading") {
        window.addEventListener("load", func);
      } else {
        func();
      }
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    runOnClient(() => {
      // access window as you like
      const handleScroll = () => {
        if (typeof window !== 'undefined') {
          setScrollY(window.scrollY);
        }
      };

      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    })
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
