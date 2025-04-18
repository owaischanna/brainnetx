import React from 'react';
import Link from 'next/link';

const Projects = () => {
  const projects = [
    {
      id: 'ecommerce-platform',
      title: "E-commerce Platform",
      description: "A full-featured online shopping solution with payment gateway integration, inventory management, and customer analytics.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      color: "from-blue-600 to-indigo-600",
      github: "https://github.com/yourusername/ecommerce-platform",
      demo: "https://ecommerce-demo.example.com"
    },
    {
      id: 'health-fitness-app',
      title: "Health & Fitness App",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and health metrics with AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["React Native", "Firebase", "TensorFlow"],
      color: "from-green-600 to-teal-600",
      github: "https://github.com/yourusername/health-fitness-app",
      demo: "https://health-app-demo.example.com"
    },
    {
      id: 'enterprise-dashboard',
      title: "Enterprise Dashboard",
      description: "Custom business intelligence platform with real-time data visualization and predictive analytics capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Angular", "D3.js", "Python", "AWS"],
      color: "from-purple-600 to-indigo-600",
      github: "https://github.com/yourusername/enterprise-dashboard",
      demo: "https://dashboard-demo.example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 font-heading">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            Explore our successful projects that deliver measurable results and transformative digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={project.image} 
                  alt={project.title} 
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color}/70 via-transparent to-transparent`} />
              </div>
              
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-5 font-body">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col space-y-3">
                  <Link 
                    href={`/projects/${project.id}`}
                    className={`py-3 px-6 rounded-xl font-medium transition-all duration-300 bg-gradient-to-r ${project.color} text-white hover:shadow-lg hover:opacity-90 font-button flex justify-center items-center`}
                  >
                    View Case Study
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-4 bg-gray-800 hover:bg-gray-900 text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-4 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:bg-gray-600"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/projects"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-button"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;