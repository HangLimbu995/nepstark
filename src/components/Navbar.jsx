import React, { useEffect, useState } from 'react'
// import { gsap, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navVisible, setNavVisible] = useState(true);
    const [navTop, setNavTop] = useState(9)
console.log('nav visible',navVisible)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            console.log('current scrolly ', currentScrollY)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setNavVisible(false)
                console.log('scroll down')
            }else if(currentScrollY < 10) {
                setNavTop(9)
            }
             else {
                setNavVisible(true)
                console.log('scroll up')
                setNavTop(0)
            }

            setLastScrollY(currentScrollY)
        }
        console.log('last scroll y ', lastScrollY)
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    return (
        <div className={`nav-container fixed top-${navTop} left-0 right-0 w-full py-1 bg-blue-300 transition-all ${navVisible ? 'translate-y-0 top-0' : '-translate-y-[100px]'}`} style={{ zIndex: 9 }}>
            <nav className="w-full flex justify-around items-center">
                <div>
                    <h1 className='text-2xl font-bold'>logo</h1>
                </div>
                <div>
                    <ul className='flex gap-7 font-[600] text-[16px] capitalize'>
                        <li>home</li>
                        <li>about us</li>
                        <li>our protfolio</li>
                        <li>our services</li>
                    </ul>
                </div>
                <button className='py-3 px-4 rounded text-[15px] font-[600] text-white'>Enquire Now
                </button>
            </nav>
        </div>
    )
}

export default Navbar