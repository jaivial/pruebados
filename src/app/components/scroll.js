"use client";
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './scroll.css';
import { useClient } from 'next/client';

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
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
  }, []);

  const { transform } = useSpring({
    transform: `translateY(${-scrollY * 0.5}px)`, // Updated to Y-axis
  });


  return (
    <div className='container'>
      <animated.div
        className='rectangle'
        style={{ transform }}
      ></animated.div>
      <div className='content'>
        <h1>Your Page Content</h1>
        <p>Scroll down or up to see the animation</p>
      </div>
    </div>
  );
};

export default ScrollAnimation;
