import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: "Smart Property Management",
      industry: "Hospitality",
      description: "Integrated PMS with AI-powered revenue management, guest experience technologies, and operational automation for hotels and resorts.",
      benefits: [
        "20-30% reduction in front desk time",
        "15-25% revenue increase through optimized pricing",
        "Enhanced guest satisfaction",
        "Real-time visibility across properties"
      ]
    },
    {
      title: "Omnichannel Retail Platform",
      industry: "Retail",
      description: "Unified POS, inventory management, e-commerce integration, and customer analytics for modern retail operations.",
      benefits: [
        "30-50% faster checkout process",
        "Real-time inventory visibility",
        "Enhanced customer experience",
        "Detailed sales analytics"
      ]
    },
    {
      title: "Secure Payment Gateway",
      industry: "FinTech",
      description: "Comprehensive payment processing solution with security, compliance, and analytics for financial services.",
      benefits: [
        "PCI DSS compliance",
        "99.9% uptime guarantee",
        "Multi-currency support",
        "Advanced fraud detection"
      ]
    },
    {
      title: "AI-Powered Analytics",
      industry: "All Industries",
      description: "Machine learning algorithms for predictive analytics, customer insights, and operational optimization.",
      benefits: [
        "Predictive maintenance alerts",
        "Customer behavior analysis",
        "Demand forecasting",
        "Performance optimization"
      ]
    },
    {
      title: "IoT Automation Suite",
      industry: "Hospitality & Retail",
      description: "Internet of Things solutions for smart building management, energy efficiency, and customer experience enhancement.",
      benefits: [
        "Energy cost savings of 15-30%",
        "Automated operational processes",
        "Enhanced customer comfort",
        "Predictive maintenance"
      ]
    },
    {
      title: "Blockchain Integration",
      industry: "FinTech & Retail",
      description: "Secure blockchain solutions for transparent transactions, supply chain management, and data integrity.",
      benefits: [
        "Immutable transaction records",
        "Enhanced security",
        "Supply chain transparency",
        "Smart contract automation"
      ]
    }
  ];

  return (
    <section id="solutions" className="solutions section">
      <div className="container">
        <div className="section-title">
          <h2>Our Solutions</h2>
          <p>
            We deliver purpose-built solutions that combine our technology expertise with deep industry knowledge, 
            ensuring maximum impact and return on investment for your business.
          </p>
        </div>
        
        <div className="grid grid-2">
          {solutions.map((solution, index) => (
            <div key={index} className="card solution-card">
              <div className="solution-header">
                <span className="solution-industry">{solution.industry}</span>
                <h3>{solution.title}</h3>
              </div>
              <p>{solution.description}</p>
              <div className="solution-benefits">
                <h4>Key Benefits:</h4>
                <ul>
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>{benefit}</li>
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

export default Solutions;