import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import WritingText from '../components/WritingText'
import Typed from 'typed.js';

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const el = useRef(null)

  useEffect(() => {
    var typed = new Typed(el.current, {
      strings: ['sleek', 'dynamic', 'modern'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    })

    return () => {
      typed.destroy()
    }

  }, [])

  // useEffect(() => {
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: 'header',
  //     start:'top top',
  //     end: '150% 50%',
  //     pin: true,
  //     scrub: true,
  //     markers: true,
  //   }
  // })
  // },[])

  return (
    <div>
      <header className='absolute top-0 w-full h-[100vh] flex flex-col justify-end'>
        <div className='w-full p-4 md:p-8'>
          <div className='text-3xl sm:text-5xl md:text-7xl xl:text-9xl capitalize leading-tight'>
          <h1 className='mb-4 '>
            Creating
            <style jsx>{`
              @keyframes backgroundScroll {
                from {background-position: 0 0;}
                to {background-position: -100% 0;}
              }
            `}</style>
          </h1>
            <div className='flex items-center gap-5 mb-4'>
              <div className='relative w-20 md:w-40 rounded-full overflow-hidden'>
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  className='w-full h-full object-cover'
                  src='https://cuberto.com/assets/home/hero/header.mp4'
                ></video>
              </div>
              <h1 ref={el} className='uppercase font-bold'></h1>
            </div>
            <h1>websites of the future</h1>
          </div>
        </div>
      </header>
    </div>
  )
}

const headerCard = [
  {
    id: 1,
    video: 'https://cuberto.com/assets/projects/riyadh/cover.mp4',
    x: '15%',
    y: '15%',
    w: '400px',
    h: '30vh',
    speed: '-9',
  },
  {
    id: 2,
    video: 'https://cuberto.com/assets/projects/puntopago/cover.mp4',
    x: '70%',
    y: '15%',
    w: '500px',
    h: '50vh',
    speed: '-9',
  },
  {
    id: 3,
    video: 'https://cuberto.com/assets/projects/kzero/cover.mp4?2',
    x: '20%',
    y: '110%',
    w: '300px',
    h: '20vh',
    speed: '-7',
  },
  {
    id: 4,
    video: 'https://cuberto.com/assets/projects/magma/cover.mp4?2',
    x: '60%',
    y: '125%',
    w: '200px',
    h: '20vh',
    speed: '-5',
  },
]

export default Home