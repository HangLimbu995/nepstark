import React from 'react'

const Home = () => {
  console.log('x value is', headerCard[0].x)

  return (
    <>
      <header className='relative w-full h-full bg-red-500 grid place-items-center'>
        <div className='w-full md:w-[90%] h-[100vh] p-2 flex justify-center flex-col items-center leading-tight' >
         <div className='-mt-[50px]' style={{ zIndex: 2 }} data-scroll data-scroll-speed='5'>  
         <h1 className='-mt-12' > Transform Your Business Digitally</h1>
         <p >   Empower your brand with cutting-edge websites and dynamic digital marketing strategies.</p>
         </div>
          <div >
            {headerCard.map((item, i) => (
              <div key={item.id} className={`header-card  `} style={{ left: `${item.x}`, top: `${item.y}`, width: `${item.w}`, height: `${item.h}`, zIndex: 1 }} data-scroll data-scroll-speed='-9'>
                <video muted loop autoPlay src={`${item.video}`} className='w-full h-full object-cover' />
              </div>
            ))}

          </div>
        </div>

        <div className='hero-container'>
          <div className='hero'></div>
        </div>
      </header>
      <section>
        <div className='w-full h-[200vh]'></div>
      </section>
    </>
  )
}

const headerCard = [
  {
    id: 1,
    video: 'https://cuberto.com/assets/projects/riyadh/cover.mp4',
    x: '15%',
    y: '12%',
    w: '400px',
    h: '30vh',
  },
  {
    id: 2,
    video: 'https://cuberto.com/assets/projects/riyadh/cover.mp4',
    x: '70%',
    y: '15%',
    w: '500px',
    h: '50vh',
  },
  {
    id: 3,
    video: 'https://cuberto.com/assets/projects/riyadh/cover.mp4',
    x: '20%',
    y: '50%',
    w: '300px',
    h: '20vh',
  },
  {
    id: 4,
    video: 'https://cuberto.com/assets/projects/riyadh/cover.mp4',
    x: '60%',
    y: '55%',
    w: '200px',
    h: '20vh',
  },
]

export default Home