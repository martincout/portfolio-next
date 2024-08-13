"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="xl:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-12">
   
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-center"
      >
        <h1 className=" mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text text-transparent">
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
            className="text-[#77faff]"
            sequence={[   
              "Martin",
              5000
            ]}
            wrapper="span"
            delay={500}
            speed={5}
          />
        </h1>
        <p className="text-dark text-base sm:text-lg mb-6 lg:text-xl">
          A Full stack developer of the Web.
        </p>
        <div>
          <Link
            href="/#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
          >
            Contact Me
          </Link>
          <Link
            href="/"
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-4 place-self-center mt-4 lg:mt-0"
      >
        <div className="rounded-full bg-primary w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/hero.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default HeroSection