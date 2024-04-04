
import { Outlet } from "react-router-dom";

import { useState, useEffect } from 'react';

import bgOne from '../assets/bg-images/png/1.jpg';
import bgTwo from '../assets/bg-images/png/2.jpg';
import bgThree from '../assets/bg-images/png/3.jpg';
import bgFour from '../assets/bg-images/png/4.jpg';
import bgFive from '../assets/bg-images/png/5.jpg';
import bgSix from '../assets/bg-images/png/6.jpg';
import bgSeven from '../assets/bg-images/png/7.jpg';
import bgEight from '../assets/bg-images/png/8.jpg';
import bgNine from '../assets/bg-images/png/9.jpg';

function Template() {

  const bgImages = [bgOne, bgTwo, bgThree, bgFour, bgFive, bgSix, bgSeven, bgEight, bgNine];

  const [counter, setCounter] = useState(0);
  // const [currentBg, setCurrentBg] = useState(bgOne);

useEffect(() => {
  const interval = setInterval(() => {
    setCounter((prevCounter) => (prevCounter + 1) % bgImages.length);
  }, 10000);

  return () => clearInterval(interval);
}, []);
  
  return (
    <>
    {bgImages.map((bgImage, index) => (
      <div
        key={index}
        className={`z-0 pointer-events-none select-none absolute w-full h-full bg-cover bg-no-repeat transition-all duration-1000 ease-in-out shadow-inset ${counter%9 === index ? 'opacity-100' : 'opacity-0'}`}
        style={{backgroundImage: `url(${bgImage})`}}
      />
    ))}
    <Outlet />
    </>
  )
}

export default Template