import gsap, { ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'
import Last from './Last'

const images = () => {
  const parent = useRef(null)
  const first = useRef(null)
  const last = useRef(null)
  const second = useRef(null)
  const third = useRef(null)
  
 useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:parent.current,
      start:"0% 50%",
      scrub:1,
    }
  });
  tl
  .to(first.current,{
    x:"100%",
    ease:"linear"
  },"a")
  .to(last.current,{
    x:"-100%",
    ease:"linear"
  },"a")
  .to(second.current,{
    x:"-100%",
    ease:"linear"
  },"a")
  .to(third.current,{
    x:"100%",
    ease:"linear"
  },"a")
 })


  return (
    <div ref={parent} className=' w-full h-[70vh] sm:h-screen bg-white flex items-center justify-center'>
      <div  className=' w-[45%] sm:w-[25%] h-2/3 sm:h-[80vh] relative'>
      <div ref={first}  className=' w-32 sm:w-48 h-24 sm:h-36 absolute sm:top-[25%] top-[32%] -left-[50%] bg-red-200 overflow-hidden aspect-video'><video muted loop autoPlay className=' w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video></div>
      <div ref={second}  className=' w-20 sm:w-28 h-28 sm:h-40 absolute -sm:right-5 top-10 -right-1/3 overflow-hidden'><img className=' w-full h-full object-cover' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" /></div>
      <div ref={third}  className=' w-20 sm:w-28 sm:h-32 h-14 absolute top-[79%] -left-[45%] bg-red-200 overflow-hidden '><img className=' w-full h-full object-cover' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" /></div>
      <div ref={last} className=' w-28 sm:w-48 sm:h-40 h-24 absolute top-[90%] left-[86%] bg-red-200 overflow-hidden aspect-video'><video  muted loop autoPlay className=' w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video></div>
      <img className=' w-full h-full object-cover' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
      </div>
    </div>
  )
}

export default images