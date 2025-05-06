import React from 'react';
import './HeroSection.css'; // External CSS for custom styles

const HeroSection = () => {
  return (
    <div className="hero-section d-flex align-items-center text-white text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Journey with Confidence <br />
          <span className="text">Migrate</span> with Us
        </h1>
        <p className="lead mt-3 mx-auto" style={{ maxWidth: '600px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet risus nunc. Duis egestas ac ante sed tincidunt.
        </p>
        <a href="#learn-more" className="btn bag btn-lg mt-4">
          Learn More &rarr;
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
