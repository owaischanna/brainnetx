import React from 'react';
import Head from 'next/head';

const SiteBackground = ({ children }) => {
  return (
    <>
      <Head>
        <style>{`
          @keyframes gradientBackground {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .bg-animated-gradient {
            background: linear-gradient(-45deg, #f3f4f6, #e5e7eb, #d1d5db, #9ca3af);
            background-size: 400% 400%;
            animation: gradientBackground 15s ease infinite;
          }

          .bg-glass-card {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.18);
          }

          .bg-section-gradient {
            background: linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(243,244,246,0.8));
          }

          .particle {
            position: absolute;
            background: rgba(59, 130, 246, 0.15);
            border-radius: 50%;
            pointer-events: none;
          }
        `}</style>
      </Head>
      
      <div className="min-h-screen bg-animated-gradient relative overflow-hidden">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}

        <main className="relative z-10">
          {children}
        </main>
      </div>
    </>
  );
};

// Example usage in your _app.js:
/*
import { AppProps } from 'next/app';
import SiteBackground from '../components/SiteBackground';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteBackground>
      <Component {...pageProps} />
    </SiteBackground>
  );
}

export default MyApp;
*/

// Updated Navbar with glass effect:
const Navbar = () => {
  // ... your existing navbar code
  return (
    <nav className="bg-glass-card shadow-lg sticky top-0 z-50">
      {/* Navbar content */}
    </nav>
  );
};

// Updated section components:
const Section = ({ children, id }) => {
  return (
    <section id={id} className="py-20 bg-glass-card my-8 mx-4 md:mx-8 lg:mx-16 rounded-xl shadow-lg">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};


export default SiteBackground;