import gsap from 'gsap'
import { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Playreel = () => {
 const parent = useRef(null)
 const videodiv = useRef(null)
 const text = useRef(null)
 
 

 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:parent.current,
      top:"0 0",
      scrub:1,
      pin:true,
    }
  })


  tl
  .to(videodiv.current,{
    width:"95%",
    height:"95%",
    ease:Power4.easeInOut
  },"a")
  .to(text.current,{
     gap:44,
     scale:2,

  },"a")

 })


  return (
    <div ref={parent} className=' w-full h-screen overflow-hidden relative bg-black'>
      <div ref={videodiv} className="video overflow-hidden aspect-video w-40 sm:w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <video muted loop autoPlay className=' w-full h-full object-cover scale-[2]'  src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
      </div>
        <div className='overlay absolute w-full h-full  flex flex-col justify-between  py-20'>
            <div className="text flex  items-center justify-center ">
            <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon text-white w-4 h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
            <h3 className=' capitalize text-white'>Works in motion</h3>

            </div>
            <h1 ref={text} className=' flex w-full justify-center gap-20 sm:gap-80 text-white'>
                <div className=' text-5xl sm:text-7xl font-medium capitalize'>play</div>
                <div className=' text-5xl sm:text-7xl font-medium capitalize' >Reels</div>
            </h1>
            <p className=' text-white text-center px-10'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
        </div>
    </div>
  )
}

export default Playreel