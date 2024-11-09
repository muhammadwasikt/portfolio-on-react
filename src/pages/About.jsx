import React from "react";


const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in frontend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-12/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Java Script
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  FireBase
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Bootstrap
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Tailwind CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Material UI
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-5/12"
                  ></div>
                </div>
              </div>
              <div className="md:flex items-center sm:flex-co leading-8 ">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Next JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-blue-400 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"></div>

                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-blue-400">
                  Under 1
                </h3>
                <p>Year Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-blue-400">
                  3
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
