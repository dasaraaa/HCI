import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#AEE2FF] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold no-underline  leading-relaxed inline-block text-[35px] text-[#30A2FF]  whitespace-nowrap uppercase "
              href="#pablo"
            >
              JOBBLISS
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex my-[10px] flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link
                  className="px-3 py-2 ml-2 no-underline  flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  to="home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="px-3 py-2 ml-2 no-underline  flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  to="about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 ml-2 no-underline  flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  to="job"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex no-underline  items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Companies</span>
                </a>
              </li>
            </ul>
            
            <Link className="bg-blue-500 no-underline  hover:bg-blue-700 text-white font-bold ml-2 mr-5 py-1 px-3 rounded-full" to='signin'>Sign in</Link>

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 mr-5 py-1 px-3 rounded-full"> */}
              <Link className="bg-blue-500 no-underline  hover:bg-blue-700 text-white font-bold ml-2 mr-5 py-1 px-3 rounded-full" to='postjob'>Post a Job</Link>
            {/* </button> */}
          </div>
        </div>
      </nav>
    </>
  );
}
