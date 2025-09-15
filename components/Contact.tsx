"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 for animation control

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // show animation

    // simulate API request
    setTimeout(() => {
      console.log(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setLoading(false); // hide animation
    }, 2000);
  };

  return (
    <section id="contact">
      <div className="relative py-20 flex justify-center items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-black to-blue-900/40 animate-pulse blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full px-6">
          {/* Left Side: Logo / Illustration */}
          <div className="flex flex-col items-center text-center">
            <DotLottieReact
              src="https://lottie.host/5f716e54-3056-4386-8f53-a7df06d57ece/ZgRUz2KZg0.lottie"
              loop
              autoplay
              style={{ width: 320, height: 320 }}
            />
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-6">
              Let’s <span className="text-purple-400">Connect</span>
            </h2>
            <p className="text-gray-400 mt-2 max-w-sm">
              Have a project in mind or just want to say hi? Drop me a message
              and I’ll get back to you.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(139,92,246,0.3)] p-10 rounded-3xl flex flex-col gap-6 w-full max-w-lg"
          >
            <h2 className="text-3xl font-bold text-white text-center">
              Contact <span className="text-purple-400">Me</span>
            </h2>

            {submitted && (
              <p className="text-green-400 text-center animate-pulse">
                🚀 Message sent successfully!
              </p>
            )}

            {["name", "email"].map((field) => (
              <div key={field} className="relative">
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={form[field as "name" | "email"]}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer bg-transparent border border-white/20 rounded-lg p-3 text-white placeholder-transparent w-full focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_#a855f7]"
                  required
                />
                <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                  {field === "name" ? "Your Name" : "Your Email"}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=" "
                className="peer bg-transparent border border-white/20 rounded-lg p-3 text-white placeholder-transparent w-full h-32 resize-none focus:outline-none focus:border-purple-500 focus:shadow-[0_0_20px_#a855f7]"
                required
              ></textarea>
              <label className="absolute left-3 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-400">
                Your Message
              </label>
            </div>

            {/* Button + Animation */}
            <div className="flex justify-center mt-6 relative">
              <button type="submit" disabled={loading}>
                <MagicButton
                  title={loading ? "Sending..." : "Send Message"}
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </button>

              {loading && (
                <div className="absolute -top-24">
                  <DotLottieReact
                    src="https://lottie.host/d5a43370-d0df-48b2-972d-398f21fcaafd/qdf0CYZoDo.lottie"
                    autoplay
                    style={{ width: 120, height: 120 }}
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
