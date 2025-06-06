import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

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
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
      if (missionRef.current) {
        observer.unobserve(missionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            ref={aboutRef}
            className="bg-white rounded-xl shadow-xl p-8 transition-all duration-1000 ease-out opacity-0 translate-y-10"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">About Us</h2>
            <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
            <p className="text-blue-900 text-lg mb-4">
              At <strong>Eins Cybertech Pvt Ltd</strong>, we specialize in helping organizations navigate the complex landscape of cybersecurity and regulatory compliance.
            </p>
            <p className="text-blue-900 text-lg">
              Our expert consulting services and advanced AI-driven solutions are designed to safeguard your data, systems, and reputation, with a vision to create a global brand known for revolutionizing GRC processes through AI, delivering efficient, scalable, and reliable solutions across multiple industries.
            </p>
          </div>
          
          <div 
            ref={missionRef}
            className="bg-white rounded-xl shadow-xl p-8 transition-all duration-1000 delay-300 ease-out opacity-0 translate-y-10"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission</h2>
            <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
            <p className="text-blue-900 text-lg mb-4">
              At <strong>Eins Cybertech Pvt Ltd</strong>, our mission is to safeguard your organization's data, systems, and reputation by providing comprehensive cyber compliance solutions tailored to your unique business needs.
            </p>
            <p className="text-blue-900 text-lg">
              By leveraging AI technologies, we ensure that your security infrastructure not only meets today's regulatory standards but also adapts to tomorrow's emerging threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;