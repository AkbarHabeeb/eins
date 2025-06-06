import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);

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

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }
    
    if (valueRef.current) {
      observer.observe(valueRef.current);
    }

    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
      if (valueRef.current) {
        observer.unobserve(valueRef.current);
      }
    };
  }, []);

  const values = [
    {
      title: "Strategic Alignment",
      description: "Ensures that your cybersecurity initiatives support overall business objectives, improving both security and operational efficiency."
    },
    {
      title: "Governance Excellence",
      description: "Helps establish governance structures that provide oversight, accountability, and continuous improvement in your cybersecurity and compliance programs."
    },
    {
      title: "Risk Management Expertise",
      description: "Develops and implements risk management frameworks tailored to your organization, ensuring that critical assets are protected, and risks are minimized."
    },
    {
      title: "Regulatory Insight",
      description: "Guides organizations through complex regulatory landscapes, ensuring compliance with global standards such as ISO 27001, ISO 27701, ISO 21434, PCI DSS, HITRUST, HIPAA, SOC2, CCPA and EU GDPR."
    },
    {
      title: "Data Privacy & Protection",
      description: "Ensures that your data management practices align with global data protection laws, safeguarding sensitive information and strengthening customer trust."
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div 
            ref={teamRef}
            className="bg-white rounded-xl shadow-xl p-8 transition-all duration-1000 ease-out opacity-0 translate-y-10"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Team</h2>
            <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
            
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional team" 
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
            </div>
            
            <p className="text-blue-900 text-lg mb-4">
              The professional team is headed by <strong>Dr. Ravichandran Ramasamy Ph.D. (Cyber Security)</strong>. With over 20 years of experience in implementation of management systems, cybersecurity governance, risk management, compliance and strategy, Dr. Ravichandran Ramasamy serves as the cornerstone of our Governance, Risk & compliance practice.
            </p>
            <p className="text-blue-900 text-lg">
              Our experienced team members are certified in CISA, CISM, CISSP, CCSP, CEH, ISO-27001 LA & LI, ISO-27701 LI, ISO-21434 LI, ISO-31000 LI and ISO-9001 LI & LA help businesses align their cybersecurity initiatives and other technology implementations with broader corporate goals while meeting regulatory requirements.
            </p>
          </div>
          
          <div 
            ref={valueRef}
            className="bg-white rounded-xl shadow-xl p-8 transition-all duration-1000 delay-300 ease-out opacity-0 translate-y-10"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Value to Clients</h2>
            <div className="w-16 h-1 bg-emerald-500 mb-6"></div>
            
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1.5 bg-emerald-100 rounded-full p-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold text-blue-900">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;