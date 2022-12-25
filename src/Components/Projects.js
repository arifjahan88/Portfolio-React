import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { MdSmartDisplay } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import doctors from "../assets/projects/Doctors portal.png";
import photoreview from "../assets/projects/photography.png";
import carsservice from "../assets/projects/car servicing.png";
import pacificpick from "../assets/projects/pacific pic.png";
import emajohn from "../assets/projects/ema john.png";
import learningguru from "../assets/projects/learning guru.png";
import DragonNewsPortal from "../assets/projects/dragon newsportak.png";
import CleverQuiz from "../assets/projects/clever quiz.png";
import dockteck from "../assets/projects/Dockteck.png";

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
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group "
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={doctors}>
                    <img
                      className="rounded-xl group-hover:opacity-80 -rotate-12 hover:cursor-zoom-in"
                      src={doctors}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
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
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group order-last"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={photoreview}>
                    <img
                      className="rounded-xl group-hover:opacity-70 rotate-12 hover:cursor-zoom-in"
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
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group "
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={carsservice}>
                    <img
                      className="rounded-xl group-hover:opacity-70 -rotate-12 hover:cursor-zoom-in"
                      src={carsservice}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
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

          {/* -----------------Projects 4------------------- */}
          <div className="grid md:grid-cols-2 gap-8 my-14 items-center">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group order-last"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={pacificpick}>
                    <img
                      className="rounded-xl group-hover:opacity-70 rotate-12 hover:cursor-zoom-in"
                      src={pacificpick}
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
            >
              <h2>Project Name : Pacific Pick Seller </h2>
              <p>Description: This is a Pacific Pick Seller Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex justify-end">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://react-pacific-pick-seller.web.app/"
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

          {/* -----------------Projects 5------------------- */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group "
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={emajohn}>
                    <img
                      className="rounded-xl group-hover:opacity-70 -rotate-12 hover:cursor-zoom-in"
                      src={emajohn}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h2>Project Name : Ema John Shopping</h2>
              <p>Description: This is a Ema John Shopping Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://ema-john-sites.web.app/"
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

          {/* -----------------Projects 6------------------- */}
          <div className="grid md:grid-cols-2 gap-8 my-14 items-center">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group order-last"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={learningguru}>
                    <img
                      className="rounded-xl group-hover:opacity-70 rotate-12 hover:cursor-zoom-in"
                      src={learningguru}
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
            >
              <h2>Project Name : Learning Guru</h2>
              <p>Description: This is a Learning Guru Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex justify-end">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://react-programming-courses.web.app/"
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

          {/* -----------------Projects 7------------------- */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group "
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={DragonNewsPortal}>
                    <img
                      className="rounded-xl group-hover:opacity-70 -rotate-12 hover:cursor-zoom-in"
                      src={DragonNewsPortal}
                      style={{ objectFit: "cover" }}
                      alt="Img"
                    />
                  </PhotoView>
                </div>
              </PhotoProvider>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <h2>Project Name : Dragon NewsPortal</h2>
              <p>Description: This is a Dragon NewsPortal Website.</p>
              <p>
                Technology Used : React JS | Express JS | MongoDB | Tailwind CSS
              </p>
              <div className="mt-2 flex">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://react-dragon-newsportal.web.app/"
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

          {/* -----------------Projects 8------------------- */}
          <div className="grid md:grid-cols-2 gap-8 my-14 items-center">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1000"
              className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group order-last"
            >
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={dockteck}>
                    <img
                      className="rounded-xl group-hover:opacity-70 rotate-12 hover:cursor-zoom-in"
                      src={dockteck}
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
            >
              <h2>Project Name : DockTeck Website</h2>
              <p>Description: This is a DockTeck Website Website.</p>
              <p>Technology Used : HTML | CSS | Bootstrap</p>
              <div className="mt-2 flex justify-end">
                <div className="flex justify-center items-center">
                  <button className="btn btn-outline btn-sm mx-1">
                    <a
                      href="https://arifjahan88.github.io/DocTeck-Website/"
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
