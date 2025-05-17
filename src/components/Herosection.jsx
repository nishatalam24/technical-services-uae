import React from 'react'
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Herosection = ({ image }) => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[position:center_60%]"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </div>

      {/* Animated Text Content */}
      <div className="relative z-20 h-full flex items-center justify-start text-white text-left px-6 md:px-20">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="lg:text-[60px] sm:text-4xl  font-[450] sm:leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Sultan Yahya is a UAE-based construction company with decades of experience.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We are known for our premium quality builds and client-focused project delivery.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;

