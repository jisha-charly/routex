import React from 'react';
import './AboutUs.css';
import image1 from '../about-big.png';
import image2 from '../about-medium.png';
import image3 from '../about-small.png';
import image4 from './dotted-img.svg';
import image5 from '../tick.png'
import image6 from '../arrow.png'
const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="about-image-grid">
            <div className="item image1">
              <img src={image1} alt="Staff" className="img-fluid rounded" />
            </div>
            <div className="item image2">
              <img src={image3} alt="Consultation" className="img-fluid rounded" />
            </div>
            <div className="item image3">
              <img src={image2} alt="Passport" className="img-fluid rounded" />
            </div>
            <div className="item experience">
                <img src={image4} className='dotted'></img>
              <div className="experience-box  text-white text-center rounded p-4">
                <h2 className="fw-bold mb-1">10+</h2>
                <p className="mb-0">Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6">
          <small className="text-uppercase text-success fw-bold">About Us <img src={image6}></img></small>
          <h2 className="fw-bold mt-2 head">
            Unknown Wanderlust <br /> Your Journey into
          </h2>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet risus nunc. Duis egestas ac ante sed tincidunt.
          </p>

          <div className="row mb-4">
            <div className="col-md-6 d-flex">
              <div className="me-2 mt-1 text-success"><img src={image5}></img></div>
              <div>
                <h6 className="fw-bold mb-1 text-success">Safety Guides</h6>
                <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <div className="col-md-6 d-flex">
              <div className="me-2 mt-1 text-success"><img src={image5}></img></div>
              <div>
                <h6 className="fw-bold mb-1 text-success">Passport Assistance</h6>
                <p className="mb-0 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>

          <a href="#read-more" className="btn  rounded-pill px-4 py-2 button">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
