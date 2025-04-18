import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and progressive web applications built with React, Next.js, and modern frameworks for optimal performance and scalability.",
      icon: "🌐",
      features: ["Responsive Design", "SEO Optimized", "API Integration", "Performance Tuning"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android applications using React Native with native-like performance and smooth animations.",
      icon: "📱",
      features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Deployment"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "UI/UX Design",
      description: "User-centered interfaces with intuitive workflows, backed by usability testing and interactive prototypes.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure with AWS, Azure, and Google Cloud Platform implementations.",
      icon: "☁️",
      features: ["Serverless Architecture", "CI/CD Pipelines", "Database Management", "Cloud Security"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 font-heading">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            End-to-end digital solutions tailored to your business objectives and user needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                <div className="text-5xl mb-6 text-center transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4 font-heading">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center font-body">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mr-3`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 font-medium font-skill">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full mt-auto py-3 px-6 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:shadow-lg hover:opacity-90 font-button`}>
                  Learn More
                  <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-xl hover:scale-105 font-button">
            Get a Free Consultation
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;