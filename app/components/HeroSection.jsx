"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold md:h-[200px] h-[125px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={["Nakul Shah", 1000, "Backend Developer", 1000]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Software Developer with a comprehensive understanding of
            object-oriented programming and software development. Skilled in
            developing and implementing applications in Java using Spring Boot.
          </p>
          <div>
            <button className="bg-gradient-to-br from-blue-500 to-cyan-500 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black mt-3">
              <a href="#contact" className="w-full flex justify-center px-6 py-3">
                Hire Me
              </a>
            </button>
            <button className="bg-gradient-to-br from-blue-500 to-cyan-500 px-1 py-1 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white  mt-3">
              <a href="/Nakul_Shah_Resume.pdf" target="_blank">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-10">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:[h-400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-image.png"
              alt="hero image"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
