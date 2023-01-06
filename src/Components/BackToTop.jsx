import React from 'react'
import { useState,useEffect } from 'react'
export default function BackToTop() {
    const[backToTop,setBacktoTop]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setBacktoTop(true)
            }
            else
            setBacktoTop(false)
        })
    },[]);
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <>
    {backToTop &&(
    <button style={{
        position:"fixed",
        bottom:"50px",
        right:"50px",
        height:"50px",
        width:"50px",
        fontSize:"20px"

    }}
    onClick={scrollUp}><i class="fa-regular fa-hand-point-up"></i></button>
    )}
    </>
  )
}
