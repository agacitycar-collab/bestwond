import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Benali",
      position: "General Manager",
      company: "Riad Luxe, Marrakech",
      content: "Xedge transformed our guest experience with their smart property management system. We've seen a 25% increase in revenue and our guest satisfaction scores have never been higher.",
      rating: 5
    },
    {
      name: "Fatima Zahraoui",
      position: "Owner",
      company: "Zahra Fashion, Casablanca",
      content: "The omnichannel retail solution from Xedge helped us integrate our online and physical stores seamlessly. Our inventory management is now real-time and customer engagement has improved significantly.",
      rating: 5
    },
    {
      name: "Youssef El Mansouri",
      position: "CEO",
      company: "FinTech Solutions Morocco",
      content: "Xedge's payment gateway solution is secure, reliable, and perfectly adapted to the Moroccan market. Their compliance expertise saved us months of regulatory navigation.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>
            Don't just take our word for it. Here's what our clients have to say about their experience 
            with our digital transformation solutions.
          </p>
        </div>
        
        <div className="grid grid-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card testimonial-card">
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;