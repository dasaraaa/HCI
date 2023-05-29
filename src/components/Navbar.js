import React from "react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#AEE2FF] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block text-[35px] text-[#30A2FF]  whitespace-nowrap uppercase "
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Jobs</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4942E4] hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Companies</span>
                </a>
              </li>
            </ul>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-2 mr-5 py-1 px-3 rounded-full">
              Sign up
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full">
               Post a Job
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
