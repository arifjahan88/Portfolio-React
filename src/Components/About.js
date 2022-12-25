import React from "react";
import AboutImg from "../assets/pic1.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div
          className="col-span-2"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 text-justify">
            My area of expertise is developing front-end UI applications for
            mobile devices that link to APIs and other backend technologies. I
            have a strong desire for learning new technologies and am aware that
            there are multiple ways to do a task. Using HTML, CSS, Javascript,
            and React to build front-end applications is where I excel, but I am
            a quick learner and can pick up new tech stacks as needed. I think
            that using the best tool for the job, rather than sticking to one
            particular language, is what makes a great developer.
          </p>
          {/* <p className="py-2 text-gray-600">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p> */}
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
        >
          <img src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
