import React, { createContext, useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

const ScrollContext = createContext()

const ScrollProvider = ({ children }) => {
    const scrollRef = useRef(null)
    const locoScroll = useRef(null)

    useEffect(() => {
        locoScroll.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            tablet: {
                breakpoint: 0,
            },
            mobile: {
                breakpoint: 0,
            },
        })

        return () => {
            if (locoScroll.current) locoScroll.current.destroy()
        }
    }, [])

    return (
        <ScrollContext.Provider value={{ scroll: locoScroll.current, scrollRef }}>
            <div data-scroll-container ref={scrollRef} >
                {children}
            </div>
        </ScrollContext.Provider>
    )
}

export default ScrollProvider