// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 py-20 bg-black-100"
    >
      {/* Left Side - Profile Image */}
      <div className="flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-purple-500">
          <Image
            src="/profile_mihad.jpeg" // place your image inside public/profile.jpg
            alt="Mihad Khadem"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side - Bio + Links */}
      <div className="text-left space-y-6">
        <h1 className="text-4xl font-bold text-white">Mihad Khadem</h1>
        <h3 className="text-2xl text-gray-400">Full Stack Software Engineer</h3>
        <p className="text-gray-300 leading-relaxed">
          Dynamic and skilled{" "}
          <span className="text-purple-400">MERN stack developer</span>
          with expertise in TypeScript, React, Node.js, and MongoDB. Expanding
          skills in Next.js and SQL. Dedicated to building impactful,
          user-focused solutions with scalable architecture.
        </p>

        {/* Address */}
        <p className="text-gray-400 text-xl">
          📍 Dhaka, Bangladesh. <br />
          📧{" "}
          <a href="mailto:mihadkhadem@gmail.com" className="underline">
            mihadkhadem@gmail.com
          </a>{" "}
          <br />
          📱 +880 1639286145
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1NwjWv1wDCh6AzxRr_vHag0rqS8Zjn9wp&export=download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition">
              <FaDownload /> Resume
            </button>
          </a>
          <Link
            href="https://github.com/mihad-khadem"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/mihad-khadem-6510b6222/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaLinkedin /> LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
