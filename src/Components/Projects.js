import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { MdSmartDisplay } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import doctors from "../assets/projects/Doctors portal.png";
import photoreview from "../assets/projects/photography.png";
import carsservice from "../assets/projects/car servicing.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <div data-aos="fade-right" data-aos-duration="1000">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">What I&apos;ve Built</h2>
        </div>
        <div>
          {/* -----------------Projects 1------------------- */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#535355] to-[#b9c5e0] hover:cursor-pointer"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={doctors}>
                    <img
                      className="rounded-xl group-hover:opacity-70"
                      src={doctors}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <h2>Project Name : Doctors Portal</h2>
              <p>Description: This is a doctors portal Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://react-doctors-portal-44f34.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <MdSmartDisplay className="text-xl ml-1"></MdSmartDisplay>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://github.com/arifjahan88/react-doctors-portal-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side
                    </a>
                    <AiFillGithub className="text-xl ml-1"></AiFillGithub>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://github.com/arifjahan88/react-doctors-portal-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side
                    </a>
                    <AiFillGithub className="text-xl ml-1"></AiFillGithub>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------Projects 2------------------- */}
          <div className="grid md:grid-cols-2 gap-8 my-14 items-center">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#1f1f1f] to-[#000000] hover:cursor-pointer order-last"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={photoreview}>
                    <img
                      className="rounded-xl group-hover:opacity-70"
                      src={photoreview}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div
              className="text-right"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <h2>Project Name : PhotoGraphy Review</h2>
              <p>Description: This is a PhotoGraphy Review Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex justify-end">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://react-photography-review.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <MdSmartDisplay className="text-xl ml-1"></MdSmartDisplay>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://github.com/arifjahan88/react-photography-review-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side
                    </a>
                    <AiFillGithub className="text-xl ml-1"></AiFillGithub>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://github.com/arifjahan88/react-photography-review-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side
                    </a>
                    <AiFillGithub className="text-xl ml-1"></AiFillGithub>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------Projects 3------------------- */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#535355] to-[#b9c5e0] hover:cursor-pointer"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={carsservice}>
                    <img
                      className="rounded-xl group-hover:opacity-70"
                      src={carsservice}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              <h2>Project Name : Genius Car Service</h2>
              <p>Description: This is a Car Service Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://react-genius-car-client.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Site
                    </a>
                    <MdSmartDisplay className="text-xl ml-1"></MdSmartDisplay>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://github.com/arifjahan88/react-genius-car-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Client Side
                    </a>
                    <AiFillGithub className="text-xl ml-1"></AiFillGithub>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://github.com/arifjahan88/react-genius-car-server"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Server Side
                    </a>
                    <AiFillGithub className="text-xl ml-1"></AiFillGithub>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
