import React from 'react';

const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "JS", color: "bg-yellow-400", hover: "hover:bg-yellow-500" },
    { name: "React", icon: "⚛️", color: "bg-blue-400", hover: "hover:bg-blue-500" },
    { name: "Node.js", icon: "🟢", color: "bg-green-500", hover: "hover:bg-green-600" },
    { name: "Python", icon: "🐍", color: "bg-blue-600", hover: "hover:bg-blue-700" },
    { name: "UI/UX Design", icon: "🎨", color: "bg-purple-500", hover: "hover:bg-purple-600" },
    { name: "DevOps", icon: "🔄", color: "bg-red-500", hover: "hover:bg-red-600" },
    { name: "TypeScript", icon: "TS", color: "bg-blue-500", hover: "hover:bg-blue-600" },
    { name: "GraphQL", icon: "📊", color: "bg-pink-500", hover: "hover:bg-pink-600" },
    { name: "HTML5", icon: "📝", color: "bg-orange-500", hover: "hover:bg-orange-600" },
    { name: "CSS3", icon: "🎀", color: "bg-indigo-500", hover: "hover:bg-indigo-600" },
    { name: "Next.js", icon: "⏭️", color: "bg-gray-800", hover: "hover:bg-gray-900" },
    { name: "MongoDB", icon: "🍃", color: "bg-green-400", hover: "hover:bg-green-500" }
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with Montserrat font */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 font-heading">
            Our Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            We combine technical mastery with creative problem-solving to deliver exceptional results
          </p>
        </div>

        {/* Skills grid - using default font (Poppins) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`${skill.color} ${skill.hover} p-4 rounded-lg shadow-sm transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center aspect-square`}
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-white text-center font-skill">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Button with Poppins semi-bold */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 font-button">
            Discover Our Process
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;