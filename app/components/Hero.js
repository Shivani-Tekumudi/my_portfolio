

"use client";
import { motion } from "framer-motion";

import { CircleSmall, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function  Hero(){


    const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6 }, // delay between each line
    },
  };

  const item = {
   hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
    return(
          <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      
    className="sm:px-6 lg:px-8">
                  <p className="text-secondary text-3xl">
 <motion.span
      animate={{ rotate: [0, 20, 0] }} // Keyframes for rotation: start, wave up, back to start
      transition={{
        repeat: 3, // Loop the animation forever
        duration: 0.6,    // Animation duration in seconds
        ease: 'easeInOut', // Easing function for smoothness
        type: 'tween',      // Animation type
      }}
      style={{ display: 'inline-block', paddingBottom: '20px',  }}
    >

      👋
    </motion.span>
                   
                    
                      Hi</p>
                <motion.h1
        variants={item}  className="text-4xl  lg:text-5xl font-semibold text-primary mb-5 mt-4">I’m Shivani </motion.h1>
                <motion.p  variants={item} className="text-4xl  lg:text-5xl  text-primary font-semibold mb-5">UI/UX Designer & </motion.p>
                <motion.p
        variants={item} className="text-4xl  lg:text-5xl  text-primary font-semibold">Frontend Developer</motion.p>
        
                <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-2 xl:grid-cols-4 gap-0 mt-9">
                  <motion.div  variants={item}  className="">
         <a href="#projects" className="btn-contact rounded-full w-full px-5 py-2 text-lg font-medium text-white hover:bg-white/5 hover:text-white">My Works</a>
                  </motion.div>
                  <motion.div  variants={item}  className=" lg:mx-2 mt-5 sm:mt-0">
         <a href="#contact" className="btn-contact rounded-full px-5 py-2 text-lg font-medium text-white hover:bg-white/5 hover:text-white"> 
         <Download className="inline"/><span>Download CV </span></a>
                  </motion.div>


                </div>
        
                </motion.div>
    )
}