import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Dotted Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Text Generate Effect with split lines */}
          <div className="text-[30px] sm:text-[40px] md:text-5xl lg:text-6xl font-bold leading-tight">
            <TextGenerateEffect
              words="From Concept to Code,"
              className="block"
            />
            <TextGenerateEffect
              words="I Make It Happen."
              className="block mt-2 text-blue-800"
            />
          </div>

          <a href="#about">
            <MagicButton
              title="Connect with Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
