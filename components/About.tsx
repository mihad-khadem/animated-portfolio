// app/about/page.tsx
"use client";

import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/MovingBorders";

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

export const skills = [
  // Languages
  {
    id: 1,
    name: "JavaScript",
    badge:
      "https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    name: "TypeScript",
    badge:
      "https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    link: "https://www.typescriptlang.org/",
  },
  {
    id: 3,
    name: "Python (Intermediate)",
    badge:
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
    link: "https://www.python.org/",
  },
  {
    id: 4,
    name: "PHP (Beginner)",
    badge:
      "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
    link: "https://www.php.net/",
  },

  // Frontend
  {
    id: 5,
    name: "React.js",
    badge:
      "https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    link: "https://react.dev/",
  },
  {
    id: 6,
    name: "Redux",
    badge:
      "https://img.shields.io/badge/Redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
    link: "https://redux.js.org/",
  },
  {
    id: 7,
    name: "React Query",
    badge:
      "https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white",
    link: "https://tanstack.com/query/latest",
  },
  {
    id: 8,
    name: "Next.js",
    badge:
      "https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white",
    link: "https://nextjs.org/",
  },
  {
    id: 9,
    name: "HTML5",
    badge:
      "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 10,
    name: "CSS3",
    badge:
      "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: 11,
    name: "Bootstrap",
    badge:
      "https://img.shields.io/badge/Bootstrap-%23563d7c.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    link: "https://getbootstrap.com/",
  },
  {
    id: 12,
    name: "Tailwind CSS",
    badge:
      "https://img.shields.io/badge/Tailwind_CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    link: "https://tailwindcss.com/",
  },

  // Backend
  {
    id: 13,
    name: "Node.js",
    badge:
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    link: "https://nodejs.org/en/",
  },
  {
    id: 14,
    name: "Express.js",
    badge:
      "https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    link: "https://expressjs.com/",
  },
  {
    id: 15,
    name: "Nest.js",
    badge:
      "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
    link: "https://nestjs.com/",
  },
  {
    id: 16,
    name: "FastAPI",
    badge:
      "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white",
    link: "https://fastapi.tiangolo.com/",
  },
  {
    id: 17,
    name: "MongoDB",
    badge:
      "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    link: "https://www.mongodb.com/",
  },
  {
    id: 18,
    name: "Mongoose",
    badge:
      "https://img.shields.io/badge/Mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white",
    link: "https://mongoosejs.com/",
  },
  {
    id: 19,
    name: "PostgreSQL",
    badge:
      "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
    link: "https://www.postgresql.org/",
  },
  {
    id: 20,
    name: "SQL",
    badge:
      "https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=database&logoColor=white",
    link: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    id: 21,
    name: "Sequelize",
    badge:
      "https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white",
    link: "https://sequelize.org/",
  },
  {
    id: 22,
    name: "Prisma",
    badge:
      "https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white",
    link: "https://www.prisma.io/",
  },
  {
    id: 23,
    name: "JWT Authentication",
    badge:
      "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
    link: "https://jwt.io/",
  },

  // Tools
  {
    id: 24,
    name: "Git",
    badge:
      "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
    link: "https://git-scm.com/",
  },
  {
    id: 25,
    name: "Bash",
    badge:
      "https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white",
    link: "https://www.gnu.org/software/bash/",
  },
  {
    id: 26,
    name: "VS Code",
    badge:
      "https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white",
    link: "https://code.visualstudio.com/",
  },
  {
    id: 27,
    name: "Postman",
    badge:
      "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    link: "https://www.postman.com/",
  },
  {
    id: 28,
    name: "Stripe",
    badge:
      "https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white",
    link: "https://stripe.com/",
  },
  {
    id: 29,
    name: "Firebase",
    badge:
      "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black",
    link: "https://firebase.google.com/",
  },
  {
    id: 30,
    name: "Vercel",
    badge:
      "https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white",
    link: "https://vercel.com/",
  },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <Button
        as="div"
        borderRadius="2rem"
        className="flex flex-col md:flex-row w-full max-w-6xl bg-white/10 backdrop-blur-xl p-8 gap-8"
      >
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-1/2 text-center md:text-left">
          <Button
            borderRadius="9999px"
            className="w-64 h-64 p-0 overflow-hidden mb-4"
          >
            <Image
              src="/profile_mihad.jpeg"
              alt="Mihad Khadem"
              fill
              priority
              className="object-cover rounded-full"
            />
          </Button>
          <h1 className="text-3xl font-bold text-white">Mihad Khadem</h1>
          <h3 className="text-xl text-gray-200 mt-1">
            Full Stack Software Engineer
          </h3>
          <p className="text-gray-200 text-lg leading-relaxed mt-4">
            Dynamic and results-driven{" "}
            <span className="font-semibold">Full Stack Software Engineer</span>{" "}
            with expertise in building scalable, high-performance web
            applications. Improved application efficiency by{" "}
            <span className="text-purple-400 font-semibold">30%</span> and
            reduced load times by{" "}
            <span className="text-purple-400 font-semibold">25%</span>,
            delivering elegant design paired with robust, maintainable
            solutions.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-white mb-2 self-center md:self-start">
            Weapons
          </h2>
          {/* Skills */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
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
          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
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
        </div>
      </Button>
    </section>
  );
}
