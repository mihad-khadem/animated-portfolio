import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className="pb-16 pt-24 min-h-screen relative flex flex-col items-center justify-center">
        {/**
         * Spotlights for dynamic UI
         */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 right-10 md:-top-30 md:right-50 md:w-full"
            fill="purple"
          />
          <Spotlight className="left-20 top-28 h-[70vh] w-[50vw]" fill="blue" />
        </div>

        {/**
         * Dotted Background
         */}
        <div className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3]">
          {/* Radial Gradient for faded effect */}
          <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        {/**
         * Main Content
         */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-4xl">
          {/* <p className="uppercase tracking-widest text-xs text-blue-100 mb-4 md:mb-6">
          Dynamic Web Magic with Next.js
        </p> */}

          {/**
           * Split text into two lines and ensure responsive alignment
           */}
          <div className="text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight">
            <TextGenerateEffect
              words="From Concept to Code,"
              className="block"
            />
            <TextGenerateEffect
              words="I Make It Happen."
              className="block mt-2"
            />
          </div>
          <p className="text-sm md:text-lg lg:text-xl mt-4 mb-6">
            Hi! I&apos;m Mihad, a MERN Stack Web Developer based in Bangladesh.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
