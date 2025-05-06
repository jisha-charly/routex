import React from 'react';
import './ServiceSection.css';
import { FaGlobe, FaPassport, FaSuitcaseRolling } from 'react-icons/fa';
import image1 from "../arrow.png"
const ServiceSection = () => {
  return (
    <div className="services-section py-5 ">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-6">
            <small className="text-uppercase text-success fw-bold">Our Services <img src={image1}></img></small>
            <h1 className="fw-bold mt-2 text-success">
              Adventure Unleashed <br /> Discover Your Next
            </h1>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center p-4 shadow-sm rounded-4">
              <div className="icon-circle  mb-3 mx-auto icon-bg">
                <FaGlobe className="text-white fs-3" />
              </div>
              <h5 className="fw-bold">Food and Wine Tours</h5>
              <p className="text-muted">
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center p-4 shadow-sm rounded-4">
              <div className="icon-circle  icon-bg mb-3 mx-auto">
                <FaPassport className="text-white fs-3" />
              </div>
              <h5 className="fw-bold">Travel Opportunities</h5>
              <p className="text-muted">
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 text-center p-4 shadow-sm rounded-4">
              <div className="icon-circle  icon-bg mb-3 mx-auto">
                <FaSuitcaseRolling className="text-white fs-3" />
              </div>
              <h5 className="fw-bold">Solo Travel Planning</h5>
              <p className="text-muted">
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
                Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
