// ScrollAnimation.js

import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './scroll.css';

const ScrollAnimation = () => {

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
