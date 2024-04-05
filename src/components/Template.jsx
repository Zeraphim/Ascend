
import { Outlet } from "react-router-dom";

import { useState, useEffect } from 'react';

import bgOne from '../assets/bg-images/webp/1.webp';
import bgTwo from '../assets/bg-images/webp/2.webp';
import bgThree from '../assets/bg-images/webp/3.webp';
import bgFour from '../assets/bg-images/webp/4.webp';
import bgFive from '../assets/bg-images/webp/5.webp';
import bgSix from '../assets/bg-images/webp/6.webp';
import bgSeven from '../assets/bg-images/webp/7.webp';
import bgEight from '../assets/bg-images/webp/8.webp';
import bgNine from '../assets/bg-images/webp/9.webp';
import bgTen from '../assets/bg-images/webp/10.webp';
import bgEleven from '../assets/bg-images/webp/11.webp';


function Template() {
  
  const bgImages = [bgOne, bgTwo, bgThree, bgFour, bgFive, bgSix, bgSeven, bgEight, bgNine, bgTen, bgEleven];

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
    {/* Changing BG every 10 seconds, transition effect added */}
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