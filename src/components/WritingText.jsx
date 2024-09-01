import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import './WritingText.css'

const WritingText = () => {
    const el = useRef(null)

    useEffect(() => {
        var typed = new Typed(el.current,{
            strings: ['Coding','Sleeping','Eating'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        })

        return () => {
            typed.destroy()
        }
      
    },[]) 
    
  return (
    <div className="container">
<h1>I'm <span ref={el} ></span></h1>
<h1>hello world  how are you</h1>
</div>

  )
}

export default WritingText