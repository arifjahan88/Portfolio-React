import React, { useEffect, useState } from "react";
import navlogo from "../assets/navLogo.png";
const Navber = () => {
  const [shadow, setShadow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    // <div
    //   style={{ backgroundColor: `${navBg}` }}
    //   className={
    //     shadow
    //       ? "lg:fixed md:fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
    //       : "lg:fixed md:fixed w-full h-20 z-[100]"
    //   }
    // >
    //   <div className="flex justify-between items-center w-full h-full 2xl:px-16 px-10">
    //     <Link href="">
    //       {/* <a>
    //         <img
    //           src={NavLogo}
    //           alt="/"
    //           width="125"
    //           height="50"
    //           className="cursor-pointer"
    //         />
    //       </a> */}
    //       <p className="text-2xl font-bold text-blue-600">Arif Jahan</p>
    //     </Link>
    //     <div>
    //       <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
    //         <li className="ml-10 text-sm uppercase hover:border-b">
    //           <Link>Home</Link>
    //         </li>
    //         <li className="ml-10 text-sm uppercase hover:border-b">
    //           <Link>About</Link>
    //         </li>
    //         <li className="ml-10 text-sm uppercase hover:border-b">
    //           <Link>Skills</Link>
    //         </li>
    //         <li className="ml-10 text-sm uppercase hover:border-b">
    //           <Link>Projects</Link>
    //         </li>
    //         <li className="ml-10 text-sm uppercase hover:border-b">
    //           <Link>Resume</Link>
    //         </li>
    //         <li className="ml-10 text-sm uppercase hover:border-b">
    //           <Link>Contact</Link>
    //         </li>
    //       </ul>
    //       {/* Hamburger Icon */}
    //       <div
    //         style={{ color: `${linkColor}` }}
    //         onClick={handleNav}
    //         className="md:hidden"
    //       >
    //         <div tabIndex={0} className="collapse">
    //           <div className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    //             <AiOutlineMenu size={25} />
    //           </div>
    //           <div className="collapse-content bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content">
    //             <p>Home</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}

    //   {/* Side Drawer Menu */}
    // </div>
    <nav
      className={
        shadow
          ? "lg:fixed h-15 z-[100] ease-in-out duration-300 w-full bg-[#ecf0f3] shadow-xl"
          : "lg:fixed h-15 z-[100] w-full bg-[#ecf0f3]"
      }
    >
      <div className="justify-between lg:justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
            <p>
              {/* <h2 className="text-2xl font-bold text-gray-500">Arif Jahan</h2> */}
              <img className="w-40" src={navlogo} alt=""></img>
            </p>
            <div className="lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <a href="#home">Home</a>
              </li>
              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <a href="#about">About</a>
              </li>

              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <a href="#skills">Skills</a>
              </li>
              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <p>Blogs</p>
              </li>
              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <p>Resume</p>
              </li>
              <li className="text-gray-500 font-semibold hover:text-indigo-500">
                <a href="#contacts">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
