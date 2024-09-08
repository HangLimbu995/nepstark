import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import WritingText from '../components/WritingText'
import Typed from 'typed.js';

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const el = useRef(null)

  useEffect(() => {
    var typed = new Typed(el.current, {
      strings: ['Coding', 'Sleeping', 'Eating'],
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
      <header>
        <div className='w-full h-[70vh] flex flex-col '>
          <div className='w-full h-full ml-[10%]  flex flex-col justify-center '>
            <h1>Creating</h1>
            <div className='flex items-center gap-5 '>
              <div className='relative w-[100px]   rounded-[50px] flex items-center justify-center overflow-hidden'>
                <video
                  loop
                  autoPlay
                  muted
                  className='w-full h-full object-cover'
                  src='https://cuberto.com/assets/home/hero/header.mp4'
                ></video>
              </div>

              <h1 ref={el} className='uppercase'>
              </h1>
            </div>
            <h1>websites of future</h1>
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