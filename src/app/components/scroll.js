import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './scroll.css'; // Corrected the import statement for styles

const OuterComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    // Add event listener when the component is mounted
    document.addEventListener('scroll', handleScroll);

    // Remove event listener when the component is unmounted
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

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
