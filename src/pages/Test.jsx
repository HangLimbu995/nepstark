import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.test',
        markers: true,
        start: 'top top',
        end: '100% 100%',
        scrub: true,
        pin: true,
      }
    }).to('.about', {
      y: 50,
      duration: 1,
      ease: 'power1'
    }).to('.product',{
      y:'60vh',
      height: '200vh',
      duration: 1,
      ease: 'power1'
    })
  
  }, []); // Add empty dependency array to run effect only once

  return (
    <div className='test wrapper w-full min-h-[100vh] relative'>
      <div className='about w-full h-[60vh] bg-green-300 grid place-items-center -translate-y-[60vh]'>
        <h1 className='text-5xl'>About us</h1>
      </div>
      <div className='product absolute top-0 w-full h-[200vh] bg-blue-300 flex justify-center'>
      <h1 className='text-5xl mt-9'>Our Product</h1>
    </div>
    </div>
  );
}

export default Test;
