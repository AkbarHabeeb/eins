import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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
        threshold: 0.1
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900 z-0 hidden lg:block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={contactRef}
          className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-1000 ease-out opacity-0 translate-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h2>
              <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-700">+91 9962629540</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 rounded-full p-3 flex-shrink-0">
                    <Mail className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-700">admin@einscybertech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-700" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">Address</h3>
                    <p className="text-gray-700">
                      Dr. Ravichandran Ramasamy, Ph.D<br/>
                      Principal Consultant
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cybersecurity" 
                  className="rounded-xl shadow-lg max-w-full h-auto mb-8 mx-auto"
                />
                <h3 className="text-2xl font-bold text-white mb-4">Let's Secure Your Business Together</h3>
                <p className="text-blue-100">
                  Our team of experts is ready to help you navigate the complex world of cybersecurity and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;