import React from 'react'
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";


const TopContact = () => {
    return (
        <div className='top-contact relative w-full h-full flex justify-center bg-blue-700 px-2' style={{zIndex: 2}}>
            <div className='inherit w-full md:w-[80%] h-full flex justify-between items-center py-2'>
                <div>
                    <h2 className='md:text-[18px] font-[600] leading-[27px] text-white'>Focused on Crative & Best Quality Solutions</h2>
                </div>
                <div>
                    <ul className='flex gap-3 md:gap-7 text-white text-[16px] leading-[24px] font-[600] ' >
                        <li><a href='tel:+977-9849992404' target='_black'><FaPhoneAlt /><span className='hidden lg:flex'>+977-9849992404</span></a>
                        </li>
                        <li><a href="https://wa.me/9779849992404" target='_black'>
                        <IoLogoWhatsapp /><span className='hidden lg:flex'>+977-9849992404</span></a>
                        </li>
                        <li><a href='mailto:aakashjungkarki@gmail.com' target='_black'><MdEmail /><span className='hidden lg:flex'>Email us</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopContact