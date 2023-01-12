import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Homeimg.css";
import scroll from "../assets/scroll.png";

const HomeMain = () => {
  const [Scroll, setScroll] = useState(true);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 200) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div id="home" className="w-full h-screen text-center">
      {Scroll && (
        <div className="text-black absolute bottom-2 right-1/2 opacity-30 animate-bounce ">
          <a href="#about">
            <div className="flex justify-center items-center">
              <img className="w-8" src={scroll} alt="" />
              <p className="font-semibold text-base ml-3">Scroll Down</p>
            </div>
          </a>
        </div>
      )}
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="max-w-[1240px] w-full h-full mx-auto p-2 grid lg:grid-cols-2 sm:grid-cols-1  justify-center items-center"
      >
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m <span className="text-[#5651e5]"> Arif Jahan</span>
          </h1>
          <TypeAnimation
            className="font-bold py-2 text-lime-600 text-2xl"
            sequence={[
              "A Web Developer.",
              2000,
              "A Front-End Developer.",
              2000,
              "A Mern-Stack Developer.",
              2000,
            ]}
            //  Replacing previous Text
            style={{ fontSize: "3em" }}
            wrapper="h2"
            repeat={Infinity}
          />

          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I concentrate on developing back-end technology-integrated responsive front-end web
            applications.
          </p>
          <div className="flex items-center justify-center gap-2 max-w-[330px] m-auto">
            <a href="https://www.linkedin.com/in/arif-jahan/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/arifjahan88" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="mailto:arifjahan88@gmail.com">
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer 
              hover:scale-110 ease-in duration-300"
              >
                <AiOutlineMail />
              </div>
            </a>
            <a href="/resume.pdf" download={true}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
        <div className="avatar w-4/5 mx-auto sm:order-last order-first">
          <div className="key_image rounded-3xl border-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
