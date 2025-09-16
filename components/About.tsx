// app/about/page.tsx
"use client";

import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";

const socialLinks = [
  {
    href: "https://drive.usercontent.google.com/u/0/uc?id=1NwjWv1wDCh6AzxRr_vHag0rqS8Zjn9wp&export=download",
    label: "Resume",
    icon: <FaDownload className="text-lg" />,
  },
  {
    href: "https://github.com/mihad-khadem",
    label: "GitHub",
    icon: <FaGithub className="text-lg" />,
  },
  {
    href: "https://www.linkedin.com/in/mihad-khadem-6510b6222/",
    label: "LinkedIn",
    icon: <FaLinkedin className="text-lg" />,
  },
];

const skills = [
  {
    id: 1,
    name: "JavaScript",
    badge:
      "https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    name: "Next.js",
    badge:
      "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
    link: "https://nextjs.org/",
  },
  {
    id: 3,
    name: "TypeScript",
    badge:
      "https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 4,
    name: "Python",
    badge:
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    link: "https://www.python.org/",
  },
  {
    id: 5,
    name: "React",
    badge:
      "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    link: "https://react.dev/",
  },
  {
    id: 6,
    name: "Node.js",
    badge:
      "https://img.shields.io/badge/Node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    link: "https://nodejs.org/",
  },
  {
    id: 7,
    name: "Django",
    badge:
      "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
    link: "https://www.djangoproject.com/",
  },
  {
    id: 8,
    name: "HTML5",
    badge:
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 9,
    name: "CSS3",
    badge:
      "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

export default function AboutPage() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side - Profile + Contact */}
          <Button
            as="div"
            borderRadius="1.5rem"
            className="p-6 flex flex-col items-center gap-6 w-full bg-white/10 backdrop-blur-xl"
          >
            <Button
              borderRadius="9999px"
              className="p-0 w-40 h-40 overflow-hidden"
            >
              <Image
                src="/profile_mihad.jpeg"
                alt="Mihad Khadem"
                fill
                priority
                className="object-cover rounded-full"
              />
            </Button>

            <div className="text-center">
              <h1 className="text-3xl font-bold text-white">Mihad Khadem</h1>
              <h3 className="text-xl text-gray-200 mt-1">
                Full Stack Software Engineer
              </h3>
            </div>

            <div className="space-y-2 text-center">
              <h4 className="text-xl font-semibold text-white">Contact</h4>
              <address className="not-italic text-white/80 space-y-1">
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span> Dhaka, Bangladesh
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📧</span>
                  <a
                    href="mailto:mihadkhadem@gmail.com"
                    className="hover:underline"
                  >
                    mihadkhadem@gmail.com
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📱</span> +880 1639286145
                </p>
              </address>
            </div>
          </Button>

          {/* Right Side - Bio, Skills, Social Links */}
          <Button
            as="div"
            borderRadius="1.5rem"
            className="p-6 flex flex-col items-center gap-6 w-full bg-white/10 backdrop-blur-xl"
          >
            {/* Bio */}
            <p className="text-gray-200 leading-relaxed text-center text-lg max-w-xl">
              Dynamic and skilled{" "}
              <span className="font-semibold">MERN stack developer</span> with
              expertise in building scalable web applications. Passionate about
              creating impactful solutions that combine elegant design with
              robust functionality.
            </p>

            {/* Skills */}
            <div className="space-y-4 w-full">
              <h4 className="text-xl font-semibold text-white text-center">
                Technical Skills
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <a
                    key={skill.id}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={skill.badge} alt={skill.name} />
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {socialLinks.map(({ href, label, icon }) => (
                <Button
                  key={label}
                  as="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  borderRadius="0.75rem"
                  className="px-6 py-2.5 text-white bg-white/10 backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2">
                    {icon} {label}
                  </div>
                </Button>
              ))}
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
