'use client';

import React from 'react';
import '../utils/wave.css';
import { motion } from 'framer-motion';
import { fadeIn, textVariant2 } from '../utils/motion';

const Hero = () => (
  <section className="mb-[40px]">
    <div className="wave wave1" />
    <div className="wave wave2" />
    <div className="wave wave3" />
    <div className="wave wave4" />
    <div className="bg-gradient-to-tl from-blue-800 to-blue-900 w-full h-[600px] rounded-lg relative">
      <img src="/library.jpg" alt="library" className="absolute inset-0 h-full w-full object-cover mix-blend-overlay bg-opacity-80" />
      <motion.div className="w-full h-full md:flex items-center justify-center relative p-10 md:p-0">
        <motion.div
          initial={{ opacity: 0, duration: 5 }}
          animate={{ opacity: 1, duration: 1 }}
          key="expanded"
          id="motionYes"
          className="md:w-[500px] "
        >
          <motion.h1
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="text-5xl  text-white font-bold py-5"
          >
            A knowlege house of the greateness
          </motion.h1>
          <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, dicta repudiandae rem sapiente iusto.</p>
        </motion.div>
        <div>
          <motion.img variants={fadeIn('right', 'spring', 1.2, 4)} id="fadeYes" key="expanded" src="https://wvtf.in/web/img/content/content-03.png" alt="img" className="mt-5" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
