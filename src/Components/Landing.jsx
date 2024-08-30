import { easeIn, motion } from "framer-motion";
import React from "react";
import { Linear, Power4 } from "gsap";

const Landing = () => {

  return (
    <div className=" relative w-full h-[150vh] sm:h-[270vh]">
      <div className="picture h-full w-full overflow-hidden">
        <motion.img 
        initial={{ clipPath: "polygon(0 28%, 100% 47%, 100% 100%, 0 100%)",scale:1.5}} 
        animate={{ clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",scale:1}} 
        
         transition={{ease:Power4.easeInOut,duration:1}}
        
        data-scroll
        data-scroll-speed="-1"
          className=" w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>
      <div className=" w-full absolute top-0 ">
        <div className="text max-w-screen-2xl mx-auto px-12 sm:px-16 h-full ">
          {/* paragraphhhhh */}
          <div className="para mt-72 sm:mt-96">
            {[
              "Global digital design studio partnering",
              "with brands and businesses that create",
              "exceptional experiences where people",
              " exceptional experiences where people",
              " live, work, and unwind.",
            ].map((item,index)=>{
              return <p key={index} className=" text-base sm:text-2xl  text-white font-regular overflow-hidden ">
              <motion.span
                initial={{ rotate: 9, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 2 }}
                transition={{staggerChildren: 0.2, ease: Power4.easeInOut, duration: 2,delay:index*.3  }}
                className=" inline-block rotate-[70deg] origin-left"
              >
              {item}
              </motion.span>
            </p>
            })}
          </div>

          {/* Heading */}
          <div className="headings mt-8 sm:mt-32">
            {["Digital","Design","Experince"].map((item,index)=>{
              return  <h1 key={index} className=" p-5  text-6xl sm:font-normal sm:text-[22vh]  font-normal leading-none tracking-tighter text-white overflow-hidden">
              <motion.span 
              initial={{ rotate:90, y:"100%",opacity:0}}
              animate={{ rotate:0 , y:0, opacity:1}}
              transition={{ease:Power4.easeInOut,duration:0.8,delay:2+index*.15}}
              className=" inline-block rotate-[70deg] origin-left translate-y-1/2 "> {item} </motion.span>
             </h1>
            })}
          </div>


          {/* Paragraphhhh */}
          <div className="para2 mt-20 sm:w-1/3">
            <p className=" text-lg sm:text-xl text-white font-regular">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className=" sm:text-xl inline-block mt-8 text-xl text-blue-300 bottom-1 border-b-[1.3px]"
              href="#"
            >
              The Studio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
