import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* Background grid */}
      <div className="absolute left-0 -bottom-72 w-full min-h-[24rem]">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full object-cover opacity-50 pointer-events-none"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center px-6 relative z-10 text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 mt-5 md:mt-10 text-center max-w-xl">
          Reach out today and let&apos;s discuss how I can help you achieve your
          goals efficiently.
        </p>
        <a href="mailto:mihadkhadem@gmail.com" className="mt-6 md:mt-10">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 px-6 relative z-10 gap-4 md:gap-0">
        <p className="text-sm md:text-base text-white/70">
          &copy; 2025 Mihad Khadem. All rights reserved.
        </p>

        <div className="flex items-center gap-4 md:gap-3">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-lg bg-black/75 backdrop-blur-md border border-black/30 hover:scale-110 transition-transform duration-300"
            >
              <img src={info.img} alt="social link" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
