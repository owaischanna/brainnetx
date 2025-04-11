import React from 'react';

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, icon: "JS", color: "bg-yellow-400" },
    { name: "React", level: 85, icon: "⚛️", color: "bg-blue-400" },
    { name: "Node.js", level: 80, icon: "🟢", color: "bg-green-500" },
    { name: "Python", level: 75, icon: "🐍", color: "bg-blue-600" },
    { name: "UI/UX Design", level: 70, icon: "🎨", color: "bg-purple-500" },
    { name: "DevOps", level: 65, icon: "🔄", color: "bg-red-500" },
    { name: "TypeScript", level: 80, icon: "TS", color: "bg-blue-500" },
    { name: "GraphQL", level: 70, icon: "📊", color: "bg-pink-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical mastery with creative problem-solving to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${skill.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">Proficiency</span>
                <span className="text-sm font-bold text-blue-600">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>Basic</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
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