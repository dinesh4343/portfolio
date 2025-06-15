import React, { useEffect, useRef } from 'react';


const generateStars = (count) => {
  let shadows = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    shadows.push(`${x}px ${y}px #FFF`);
  }
  return shadows.join(', ');
};

const StarrySky = () => {
  const stars1 = useRef();
  const stars2 = useRef();
  const stars3 = useRef();

  useEffect(() => {
    if (stars1.current) stars1.current.style.boxShadow = generateStars(700);
    if (stars2.current) stars2.current.style.boxShadow = generateStars(200);
    if (stars3.current) stars3.current.style.boxShadow = generateStars(100);
  }, []);

  return (
    <div className="sky-container">
      <div id="stars" ref={stars1}></div>
      <div id="stars2" ref={stars2}></div>
      <div id="stars3" ref={stars3}></div>
      <div id="title">

      </div>
    </div>
  );
};

export default StarrySky;
