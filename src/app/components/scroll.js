import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './scroll.css'; // Corrected the import statement for styles

const OuterComponent = () => {
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
    transform: `translateY(${-scrollY * 0.5}px)`,
  });

  const ScrollAnimation = () => (
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

  return <ScrollAnimation />;
};

export default OuterComponent;
