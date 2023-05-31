import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";
import photo1 from "../images/p1.jpg"
import photo2 from "../images/p2.jpg"
import photo3 from "../images/p3.jpg"
const AboutUs =() =>{
    return(
        <div className="w-full h-full bg-blue-500">
            <Navbar />
        <div>
            
            <p class="mb-7 text-xl text-white dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-8xl first-letter:font-bold first-letter:text-white dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">Our job offering app is built on the principles of simplicity, efficiency, and effectiveness.</p>
            <p className="text-white text-xl dark:text-white"> Introducing our revolutionary job offering app, designed to transform the way you search, apply, and secure your dream job. With our comprehensive platform, we have reimagined the job hunting experience to empower you with all the tools and resources you need for a successful career transition.

                    We understand that job searching can be overwhelming, so we have created a user-friendly interface that streamlines the entire process. With just a few taps, you can access a vast database of job opportunities from various industries and locations.

                    Gone are the days of scouring multiple job boards and websites. Our app consolidates job listings from reputable sources, saving you time and effort. We employ advanced search algorithms that ensure accurate and relevant results, tailored to your specific preferences, skills, and experience.

                    We believe that applying for jobs should be seamless and hassle-free. Our app provides a seamless application process, allowing you to submit your customized resume and cover letter with ease. You can also track your application status and receive notifications, so you're always up to date on the progress of your job applications.
                    </p>
        <div className=" max-w-[1240px] mx-auto text-white relative  ">
          <div className=" grid grid-cols  h-[600px] md:grid-cols-3 gap-10 px-12  text-black ">
            <div className="bg-white flex justify-center rounded-xl shadow-2xl">
              <div className="p-8 text-center">
                <img className="w-[220px] rounded-full " src={photo2} />
                <h3 className="font-bold pt-6 py-4 text-blue-900 text-3xl">
                  Syarta Pajaziti
                </h3>
                <p>Project Menager</p>
              </div>
            </div>
            <div className="bg-white flex justify-center rounded-xl shadow-2xl">
              <div className="p-8 text-center">
                <img className=" w-[220px] rounded-full " src={photo1} />
                <h3 className="font-bold pt-6 py-4 text-blue-900 text-3xl">
                  Dasara Rexha
                </h3>
                <p>App Administrator</p>
              </div>
            </div>
            <div className="bg-white flex justify-center rounded-xl shadow-2xl">
              <div className="p-8 text-center">
                <img className="w-[220px] rounded-full " src={photo3} />
                <h3 className="font-bold text-3xl text-blue-900 py-4 pt-6 ">
                  Eriona Shala
                </h3>
                <p>Job Representative</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;