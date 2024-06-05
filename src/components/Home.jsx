import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MyLogo from '../assets/heroMain.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <section className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md">
        <img src={MyLogo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Website</h1>
        <p className="text-lg text-gray-700 mb-4">
          I am delighted to have you here. Explore my content and connect with me on social media.
        </p>
        <p className="text-md text-gray-600 mb-6">
          My mission is to provide high-quality content that inspires and educates my audience. I strive to be a trusted source of information and a beacon of positivity in the digital world.
        </p>
        <Link to="/about" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mb-6">
          Learn More About Me
        </Link>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/royalkp.jhyape/" className="text-blue-600 hover:text-blue-800">
            <BsFacebook size={30} />
          </a>
          <a href="https://x.com/RJhyape" className="text-blue-400 hover:text-blue-600">
            <BsTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/shusan_fades/" className="text-pink-400 hover:text-pink-600">
            <BsInstagram size={30} />
          </a>
          <a href="https://www.pinterest.com" className="text-red-500 hover:text-red-700">
            <BsPinterest size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
