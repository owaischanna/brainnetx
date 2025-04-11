import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Innovative Software Solutions</h1>
        <p className="text-xl mb-12">Building the future with cutting-edge technology</p>
        <button className="bg-white text-green-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;