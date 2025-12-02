import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Digital Strategy & Consulting",
      description: "Comprehensive digital transformation strategy development, technology roadmap planning, and implementation guidance tailored to SMB needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
        </svg>
      )
    },
    {
      title: "AI & Machine Learning Solutions",
      description: "Intelligent automation, predictive analytics, and machine learning models to optimize operations and drive business insights.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.66 6H14a2 2 0 0 1 2 2v2.34l.04-.03c.77-.5 1.63-.87 2.54-.87a2.5 2.5 0 0 1 0 5c-.91 0-1.77-.37-2.54-.87l-.04-.03V16a2 2 0 0 1-2 2h-3.34l-2.3 2.3a1 1 0 0 1-1.4 0l-.7-.7a1 1 0 0 1 0-1.4L8 16.54V15M10 10V6" />
        </svg>
      )
    },
    {
      title: "IoT & Automation",
      description: "Internet of Things solutions and automation systems to enhance efficiency, reduce costs, and improve customer experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M6 8h.01" />
          <path d="M10 8h.01" />
          <path d="M14 8h.01" />
          <path d="M18 8h.01" />
          <path d="M8 12h.01" />
          <path d="M12 12h.01" />
          <path d="M16 12h.01" />
        </svg>
      )
    },
    {
      title: "Blockchain & Web3",
      description: "Secure blockchain solutions, smart contracts, and Web3 technologies for transparent and decentralized business operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12v.01" />
          <path d="M7 12v.01" />
          <path d="M17 12v.01" />
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-3 3-3-3" />
        </svg>
      )
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, data protection, and compliance frameworks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, migration services, and infrastructure management for optimal performance and reliability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We leverage future-proof, edge technologies to deliver comprehensive digital transformation solutions 
            that empower your business to compete, scale, and thrive in the digital economy.
          </p>
        </div>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;