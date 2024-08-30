import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap";

const Work = () => {
  const [elem, setelem] = useState([
    {
      heading: "pixelflakes",
      subheading: "Arcterticural Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "pixelflakes",
      subheading: "Arcterticural Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
    {
      heading: "pixelflakes",
      subheading: "Arcterticural Marketing Agency",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image:
        "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
    },
  ]);
  
  return (
    <div className=" w-full relative">
      <div className=" max-w-screen-2xl mx-auto px-10 py-20  ">
        <div className="featured flex items-center gap-2 ">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4 h-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1>Featured Projects</h1>
        </div>
        <h1 className=" text-6xl my-6 capitalize overflow-hidden ">
          <motion.span
          initial={{ rotate:90,y:"40%",opacity:0}}
          whileInView={{rotate:0,y:0,opacity:1}}
          viewport={{once:true}}
          transition={{ease:Power4.easeInOut,duration:.8}}
          className="inline-block origin-left">Work</motion.span>
          </h1>
        <p className="leading-1 text-lg">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
        <div className="elems mt-10 w-full  sm:flex sm:flex-wrap gap-20">
            {elem.map((item,index)=>{
                return  <div key={index} className="elem w-full sm:w-1/3 mt-12 ">
                <div className="video relative w-full sm:h-[50vw] h-[103vw] overflow-hidden">
                  <motion.img 
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                  data-scroll
                  data-scroll-speed="-.2"
                    className="opacity:1 sm:absolute sm:z-[3]  w-full h-full object-cover sm:hover:opacity-0 "
                    src={item.image}
                    alt=""
                  />
                  <video
                    loop
                    autoPlay
                    muted
                    className="sm:block sm:z-[2] scale-[1.2] w-full h-full absolute"
                    src={item.video}
                  ></video>
                </div>
                <div className="mt-4">
                  <h3 className=" font-semibold capitalize">{item.heading}</h3>
                  <h3 className=" capitalize opacity-35">
                    {item.subheading}
                  </h3>
                </div>
              </div>
            })}
         
        </div>
      </div>
    </div>
  );
};

export default Work;
