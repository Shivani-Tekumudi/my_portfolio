"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/data/Skills";
import Image from "next/image";
export default function Skills(){
    const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // delay between cards
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

    return(
         <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  xl:grid-cols-6 xl:gap-10 gap-10 text-primary">


        {
          skillsData.map((ele,id) => {
            return(
             

               <motion.div
          
          variants={item} key={id} className="skill-card text-center">
                      <Image
                      alt="skill"
                          src={ele.img}
                          width="0"
                          height="0"
                          sizes="100vw"
                          className="w-full h-auto"
                      />
                      <h3 className="font-semibold pt-3"> {ele.title}</h3>
                      </motion.div>
            )
          })
        }
  
 
</motion.div>
    )
}