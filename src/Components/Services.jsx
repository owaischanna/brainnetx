import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and progressive web applications built with React, Next.js, and modern frameworks for optimal performance and scalability.",
      icon: "🌐",
      features: ["Responsive Design", "SEO Optimized", "API Integration", "Performance Tuning"]
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform iOS and Android applications using React Native with native-like performance and smooth animations.",
      icon: "📱",
      features: ["iOS & Android", "Offline Support", "Push Notifications", "App Store Deployment"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered interfaces with intuitive workflows, backed by usability testing and interactive prototypes.",
      icon: "🎨",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure with AWS, Azure, and Google Cloud Platform implementations.",
      icon: "☁️",
      features: ["Serverless Architecture", "CI/CD Pipelines", "Database Management", "Cloud Security"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end digital solutions tailored to your business objectives and user needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="p-6">
                <div className="text-5xl mb-5 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-5 text-center">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-auto py-2 px-4 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
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