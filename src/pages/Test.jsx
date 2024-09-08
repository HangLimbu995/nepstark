import React, { useEffect } from 'react';
import gsap from 'gsap';


const Test = () => {


  return (
    <div className='wrapper w-full min-h-[100vh] relative'>

      <div className='w-full h-[150vh] bg-gray-300 flex items-center justify-center' style={{ zIndex: 2 }}>
        <h1 className='uppercase text-5xl font-bold -mt-[50vh]'>this is our product</h1>
      </div>
    </div>
  );
}

export default Test;
