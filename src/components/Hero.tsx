import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      <div className="w-full h-[600px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 relative">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cybersecurity protection"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex items-center">
          <div 
            ref={textRef} 
            className="w-full md:w-3/4 lg:w-1/2 text-white transition-all duration-1000 ease-out opacity-0 translate-y-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Securing Your <span className="text-blue-300">Digital Future</span>
            </h1>
            <div className="w-20 h-1 bg-blue-400 my-6"></div>
            <h2 className="text-xl md:text-2xl font-light mb-8 text-blue-100">
              AI-Driven Cybersecurity Solutions for Modern Enterprises
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
              >
                Get Started
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-blue-400 text-blue-100 hover:bg-blue-800 hover:border-blue-300 rounded-md font-medium transition-all duration-200 w-full sm:w-auto text-center"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,202.7C672,171,768,117,864,101.3C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;