"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import Image from "next/image";

import { cn } from "@/lib/cn";
import MagicButton from "./MagicButton";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { Meteors } from "./Meteors";
import animationData from "@/data/confetti.json";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("mihadkhadem@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col justify-between space-y-4",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Image */}
      {img && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center")}
            width={500}
            height={500}
          />
        </div>
      )}

      {/* Spare Image */}
      {spareImg && (
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          }`}
        >
          <Image
            src={spareImg}
            alt={spareImg}
            className="object-cover object-center w-full h-full"
            width={500}
            height={500}
          />
        </div>
      )}

      {/* Special animation for id 6 */}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl md:text-4xl lg:text-7xl pointer-events-none text-center"></div>
        </BackgroundGradientAnimation>
      )}

      {/* Content */}
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
        )}
      >
        {description && (
          <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
        )}
        {title && (
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>
        )}

        {/* Conditional components */}
        {id === 2 && (
          <>
            <GridGlobe />
            <Meteors />
          </>
        )}

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
              <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Email Copy Button */}
        {id === 6 && (
          <div className="mt-5 relative flex flex-col items-center">
            {copied && (
              <Lottie options={defaultOptions} height={200} width={400} />
            )}
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BentoGrid;
