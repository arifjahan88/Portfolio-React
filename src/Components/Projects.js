import React from "react";
import servicing from "../assets/projects/car servicing.png";
import doctors from "../assets/projects/Doctors portal.png";
import photography from "../assets/projects/photography.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#8581fb] to-[#4e84f9]">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={doctors}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                "Car Servicing"
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                "React JS | Express JS | Mongo DB"
              </p>
              <div className="flex-col justify-center">
                <a
                  href="https://react-doctors-portal-44f34.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-center p-1 rounded-lg bg-white text-gray-700 font-semibold mx-16 cursor-pointer">
                    Live Site
                  </p>
                </a>
                <div className="flex mt-2">
                  <a href="/crypto">
                    <p className=" text-center p-1 rounded-lg bg-white text-gray-700 font-semibold ml-2 cursor-pointer">
                      Client Side Code
                    </p>
                  </a>
                  <a href="/crypto">
                    <p className=" text-center p-1 rounded-lg bg-white text-gray-700 font-semibold ml-2 cursor-pointer">
                      Server Side Code
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#8581fb] to-[#4e84f9] ">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={servicing}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                "Car Servicing"
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                "React JS | Express JS | Mongo DB"
              </p>
              <div className="flex-col justify-center">
                <a
                  href="https://react-genius-car-client.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-center p-1 rounded-lg bg-white text-gray-700 font-semibold mx-16 cursor-pointer">
                    Live Site
                  </p>
                </a>
                <div className="flex mt-2">
                  <a href="/crypto">
                    <p className=" text-center p-1 rounded-lg bg-white text-gray-700 font-semibold ml-2 cursor-pointer">
                      Client Side Code
                    </p>
                  </a>
                  <a href="/crypto">
                    <p className=" text-center p-1 rounded-lg bg-white text-gray-700 font-semibold ml-2 cursor-pointer">
                      Server Side Code
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#8581fb] to-[#4e84f9] ">
            <img
              className="rounded-xl group-hover:opacity-10"
              src={photography}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                "Photography Review"
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                "React JS | Express JS | Mongo DB"
              </p>
              <div className="flex-col justify-center">
                <a
                  href="https://react-photography-review.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-center p-1 rounded-lg bg-white text-gray-700 font-semibold mx-16 cursor-pointer">
                    Live Site
                  </p>
                </a>
                <div className="flex mt-2">
                  <a href="/crypto">
                    <p className=" text-center p-1 rounded-lg bg-white text-gray-700 font-semibold ml-2 cursor-pointer">
                      Client Side Code
                    </p>
                  </a>
                  <a href="/crypto">
                    <p className=" text-center p-1 rounded-lg bg-white text-gray-700 font-semibold ml-2 cursor-pointer">
                      Server Side Code
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          /> */}
      </div>
    </div>
  );
};

export default Projects;
