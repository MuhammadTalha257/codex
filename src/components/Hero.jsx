import React from "react";
import { HERO } from "../constants";
import { motion } from "framer-motion";
import mt from "../assets/mt-main.jpg";

export const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col md:flex-row items-center">
      <motion.div initial={{ opacity:0, x: -50 }} animate={{opacity:1, x: 0}} transition={{duration:1}} className="w-full md:w-1/2 flex flex-col items-start p-4">
        <h2 className="my-4 text-4xl font-bold md:text-5xl lg:text-[6rem]">
          {HERO.name}
        </h2>
        <p className="text-3xl tracking-tighter lg:text-4xl mb-4">
          {HERO.greet}
        </p>
        <p className="text-lg md:text-xl mb-8">
          {HERO.description}
        </p>
      </motion.div> 
      <div className="w-full md:w-1/2 flex justify-center items-center relative p-4">
        {/* Outer rotating circle */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-4 border-gray-300 animate-spin-slow"></div>
        
        {/* Inner image with circular mask and animation */}
        <motion.img 
        initial={{ opacity:0, x: -50 }} animate={{opacity:1, x: 0}} transition={{duration:1}}
          src={mt} 
          width={450} 
          height={450} 
          alt="Mehar Talha"
          className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full object-cover z-10 pulse-animation"
        />
      </div>
    </section>
  );
};
