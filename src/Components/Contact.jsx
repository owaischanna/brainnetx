import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaCheckCircle, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace with your EmailJS credentials
    const serviceID = 'service_1c9ew4g';
    const templateID = 'template_u6x9y2u';
    const userID = 'nqUOQGCgaZ4ck8TrH';

    emailjs.send(serviceID, templateID, {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      user_message: formData.message
    }, userID)
    .then((result) => {
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    })
    .catch((error) => {
      alert('An error occurred, please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 font-heading">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-body">
            Have a project in mind or want to discuss potential collaboration? We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 font-skill">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 font-skill">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 font-skill">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2 font-skill">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className={`w-full ${isLoading ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'} text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 flex justify-center items-center font-button`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {isSent && (
                <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 rounded-lg flex items-center">
                  <FaCheckCircle className="text-green-500 dark:text-green-300 mr-2" />
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl h-full border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-heading">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-skill">Our Office</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-body">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaPhoneAlt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-skill">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-body">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-300 font-body">Mon-Fri: 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 flex-shrink-0">
                    <FaEnvelope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white font-skill">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300 font-body">info@brainnext.com</p>
                    <p className="text-gray-600 dark:text-gray-300 font-body">support@brainnext.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 font-skill">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-3 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-6">
                    <FaMapMarkerAlt className="w-10 h-10 text-blue-500 dark:text-blue-400 mx-auto mb-3" />
                    <p className="text-gray-600 dark:text-gray-300 font-body">Interactive Map Would Appear Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;