import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-xl opacity-75 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Software Development Team" 
              className="relative rounded-xl shadow-2xl border-8 border-white dark:border-gray-800 transform rotate-1 hover:rotate-0 transition-all duration-500 group-hover:shadow-xl"
            />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 leading-tight font-heading">
              Innovating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Solutions</span> for Your Business
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-body">
              At BRAINNEXT, we craft cutting-edge software that transforms ideas into powerful digital experiences. Our expert team delivers scalable solutions tailored to your unique challenges.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200 font-medium font-skill">Custom software development</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200 font-medium font-skill">Enterprise-grade solutions</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 dark:text-gray-200 font-medium font-skill">User-centered design approach</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-button">
                Get Started
                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 font-semibold rounded-xl transition-all duration-300 font-button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;