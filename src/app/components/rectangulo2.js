import React, { useEffect } from 'react';
import './rectangulo2.css';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import SobreMiImage from '../../../public/assets/jaime.png';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const Rectangulo2 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      // Attach the event listener when the component mounts
      window.addEventListener('scroll', handleScroll);

      // Detach the event listener when the component unmounts
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
