import React from 'react';
import Nav from './Nav';

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <Nav></Nav>
      <section className="text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-200 mb-4">About Me</h1>
        <div className="flex flex-col items-center">
          <img src="src\assets\heroMain.png" alt="image of shusan" className="w-40 h-40 rounded-full mb-4" />
          <p className="text-lg text-gray-700 mb-4">Shusan Pariyar</p>
          <p className="text-md text-gray-600 mb-6">
          I am passionate about creating high-quality content that inspires, educates, and entertains my audience. My goal is to build a community where everyone feels valued and motivated to achieve their best.
          </p>
          <a href="src\assets\Barber.pdf" download className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
