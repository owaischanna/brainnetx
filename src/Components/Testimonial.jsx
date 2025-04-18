import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Working with BrainNext was a game-changer for our business. Their team delivered our e-commerce platform ahead of schedule and it has increased our conversions by 40%. Highly recommended!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, InnovateSoft',
      content: 'The mobile app they developed for us has received incredible feedback from our users. Their attention to detail and user experience focus is exceptional.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      role: 'Product Manager, DataSystems',
      content: 'Their cloud solution transformed our data infrastructure. The team was professional, knowledgeable, and delivered beyond our expectations.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-body">
            Don't just take our word for it - hear from businesses we've helped transform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-3 border border-gray-100 dark:border-gray-700"
            >
              <div className="p-8">
                <div className="text-blue-500 dark:text-blue-400 mb-4">
                  <FaQuoteLeft className="w-8 h-8 opacity-20" />
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 font-body italic">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                    />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-skill">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-body">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-xl hover:scale-105 font-button">
            Read More Testimonials
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;