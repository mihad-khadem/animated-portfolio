import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { MyGlobe } from "./MyGlobe";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-20">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>

      {/* Background with gradient */}
      <div className="h-[50rem] w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row justify-center items-center mx-auto max-w-7xl px-4">
        {/* Text */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50%] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="font-bold text-black dark:text-white"
            words="From Concept to Code, I Make It Happen."
          />
          <p className="text-sm text-center mb-4 md:text-lg lg:text-2xl">
            Hi, I{"'"}m <span className="font-semibold">Mihad</span>, a
            passionate <span className="font-semibold">Programmer</span> &{" "}
            <span className="font-semibold">Full-Stack Web Developer</span>
          </p>
          <a href="#about">
            <MagicButton
              title="See My Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* Globe */}
        <div className="w-full md:pb-20 lg:w-1/2 mt-6 lg:mt-0 lg:ml-4 flex justify-center items-center">
          <div className="w-full h-64 md:h-96 lg:h-full">
            <MyGlobe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
