import React, { useEffect, useRef } from 'react';
import { ShieldCheck, BarChart3, MonitorSmartphone, Car, UserCircle2, GraduationCap } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  textColor: string;
  delay: number;
  isHighlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color, textColor, delay, isHighlighted }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-out opacity-0 translate-y-10 group hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6 flex flex-col items-center relative overflow-hidden">
        <div className={`absolute inset-0 ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
          <div className={`${textColor} transform group-hover:rotate-12 transition-transform duration-500`}>{icon}</div>
        </div>
        <h3 className={`text-xl font-bold ${isHighlighted ? 'text-red-600' : textColor} mb-3 group-hover:scale-105 transition-transform duration-500`}>{title}</h3>
        <p className="text-gray-700 text-center relative z-10 group-hover:text-gray-900 transition-colors duration-500">
          {description.split('SOC2').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && <span className="text-red-600">SOC2</span>}
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Governance, Risk & Compliance",
      description: "Assist organizations in meeting industry standards such as ISO 27001, SOC2, GDPR, NIST 800-53, PCI DSS, HITRUST, HIPAA, and other relevant compliance frameworks.",
      color: "bg-emerald-100",
      textColor: "text-emerald-700",
      delay: 100,
      isHighlighted: true
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Audits & Assessments",
      description: "Provide vulnerability assessment, penetration testing, risk assessment, internal audit, and regulatory compliance services.",
      color: "bg-yellow-100",
      textColor: "text-yellow-700",
      delay: 200
    },
    {
      icon: <MonitorSmartphone size={32} />,
      title: "AI Driven Solutions",
      description: "Develop cutting-edge software solutions for cyber security, risk management, and compliance, enhanced by AI and ML technologies.",
      color: "bg-blue-100",
      textColor: "text-blue-700",
      delay: 300
    },
    {
      icon: <Car size={32} />,
      title: "Automotive Software Systems",
      description: "R&D of AI-driven Embedded systems for industrial automation, automotive systems, cyber security, and IoT security.",
      color: "bg-red-100",
      textColor: "text-red-700",
      delay: 400
    },
    {
      icon: <UserCircle2 size={32} />,
      title: "Virtual CISO",
      description: "Provide Virtual CISO services including monitoring of IT systems, cyber defense operations, vulnerability assessments, and incident response.",
      color: "bg-green-100",
      textColor: "text-green-700",
      delay: 500
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Training & Certification",
      description: "Conduct training programs related to cyber GRC, data protection laws, and information security awareness for corporate and individual professionals.",
      color: "bg-indigo-100",
      textColor: "text-indigo-700",
      delay: 600
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className="text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">What We Do</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto my-6"></div>
          <p className="text-xl text-gray-700">
            Our comprehensive range of services designed to secure your digital assets and ensure compliance
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              textColor={service.textColor}
              delay={service.delay}
              isHighlighted={service.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;