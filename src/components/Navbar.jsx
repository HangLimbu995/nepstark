import React, { useEffect, useState } from 'react'
// import { gsap, ScrollTrigger } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {



    return (
        <div className='nav-container sticky top-0 w-full h-full py-1' style={{zIndex: 9}}
       >
            <nav className="inherit w-full h-full flex justify-around items-center">
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
                <button className=' py-3 px-4 rounded text-[15px] font-[600] text-white'>Enquire Now
                </button>
            </nav>
        </div>
    )
}

export default Navbar