import React from 'react';

const Industries = () => {
  const industries = [
    {
      name: "Hospitality",
      description: "Property management systems, guest experience enhancement, revenue optimization, and operational efficiency for hotels, resorts, and guesthouses.",
      features: [
        "Property Management System (PMS)",
        "Revenue Management System (RMS)",
        "Guest Experience Technologies",
        "Smart Room Controls",
        "Mobile Key Solutions"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
          <path d="M6 10h12" />
          <path d="M6 14h12" />
          <path d="M6 18h8" />
        </svg>
      )
    },
    {
      name: "Retail",
      description: "Omnichannel solutions, inventory management, customer engagement, and payment systems for modern retail operations.",
      features: [
        "Point of Sale (POS) Systems",
        "Inventory Management",
        "E-commerce Integration",
        "Customer Relationship Management",
        "Loyalty Programs"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="19" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M2.5 12h2.5v7h-2.5Z" />
          <path d="M19 12h2.5v7h-2.5Z" />
          <path d="m16 12-1.5-4H9.5L8 12" />
          <path d="M9 12v4h6v-4" />
        </svg>
      )
    },
    {
      name: "FinTech",
      description: "Digital payment solutions, financial analytics, compliance systems, and secure transaction processing for financial services.",
      features: [
        "Payment Processing",
        "Digital Wallet Integration",
        "Transaction Security",
        "Regulatory Compliance",
        "Financial Analytics"
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M5 14H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
          <path d="M22 14h-3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
          <path d="M8 14h8" />
          <path d="M8 18h8" />
          <path d="M8 6h8" />
          <path d="M14 6V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2" />
        </svg>
      )
    }
  ];

  return (
    <section id="industries" className="industries section">
      <div className="container">
        <div className="section-title">
          <h2>Industries We Serve</h2>
          <p>
            We specialize in three core verticals where digital transformation creates the most impact: 
            Hospitality, Retail, and FinTech. Our deep industry expertise ensures solutions that address 
            specific challenges and opportunities.
          </p>
        </div>
        
        <div className="grid grid-3">
          {industries.map((industry, index) => (
            <div key={index} className="card industry-card">
              <div className="industry-icon">
                {industry.icon}
              </div>
              <h3>{industry.name}</h3>
              <p>{industry.description}</p>
              <div className="industry-features">
                <h4>Key Solutions:</h4>
                <ul>
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;