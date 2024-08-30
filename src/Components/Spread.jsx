import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

const Spread = () => {
  return (
    <div className=" w-full h-[65vh] flex flex-col items-center justify-between py-10">
      <h3 className=" capitalize text-xs">in the media</h3>
      <div>
        {["Spread", "The News"].map((item, index) => {
          return (
            <h1
              key={index}
              className=" text-6xl text-center font-medium overflow-hidden"
            >
              <motion.span
                initial={{ rotate: 90, y: "40%", opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ ease: Power4.easeInOut, duration: 0.5,delay:index*.15 }}
                className=" inline-block origin-left"
              >
                {item}
              </motion.span>
            </h1>
          );
        })}
      </div>
      <p className=" font-light text-center text-xl w-[75%] leading-2">
        Find out more about our work on these leading design and technology
        platforms.
      </p>
      <a
        href="#"
        className=" border-b-[1px] pb-1 border-black inline-block text-xl"
      >
        Browse all news
      </a>
    </div>
  );
};

export default Spread;
