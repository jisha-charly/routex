import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import { BsCheckLg, BsChevronRight } from 'react-icons/bs';
import img1 from '../1.png';
import img2 from '../2.png';
import img3 from '../3.png';
import img4 from '../4.png';
import img5 from '../5.png';
import img6 from '../6.png';
import image1 from '../logo1.png'

const Footer = () => {
  return (
    <footer className="footer-section text-white pt-5">
      <div className="container">
        <div className="row gy-5">
          {/* Logo and About */}
          <div className="col-md-6 col-lg-3">
           
            <h4 className="fw-bold mb-3"><img src={image1}></img>RouteX</h4>
            <p className="mb-3">
              Corporate business typically refers to large-scale mansola IT enterprises or organizat
            </p>
            <div className="d-flex gap-3">
              <FaFacebookF className="footer-icon" />
              <FaInstagram className="footer-icon" />
              <FaPinterestP className="footer-icon" />
              <FaLinkedinIn className="footer-icon" />
            </div>
          </div>

          {/* Service Menu */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Service Menu</h5>
            <ul className="list-unstyled">
              <li><BsCheckLg className="text-success me-2" />Mistakes To Avoid</li>
              <li><BsCheckLg className="text-success me-2" />Your Startup</li>
              <li><BsCheckLg className="text-success me-2" />Knew About Fonts</li>
              <li><BsCheckLg className="text-success me-2" />Knew About Fonts</li>
            </ul>
          </div>

          {/* Useful Link */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Useful Link</h5>
            <ul className="list-unstyled">
              <li><BsChevronRight className="text-success me-2" />Latest News</li>
              <li><BsChevronRight className="text-success me-2" />Careers</li>
              <li><BsChevronRight className="text-success me-2" />General Inquiries</li>
              <li><BsChevronRight className="text-success me-2" />Case Studies</li>
            </ul>
          </div>

          {/* Gallery */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Gallery</h5>
            <div className="row g-2">
              {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                <div className="col-4" key={index}>
                  <img src={img} alt="Gallery" className="img-fluid rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

       

        {/* Bottom bar */}
        <hr lassName="border-light my-4 " />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border1">
        
          <p className="mb-2 mb-md-0">© RRDevs 2024 | All Rights Reserved</p>
          <div className="d-flex gap-4">
            <a href="#" className="text-white text-decoration-none">Trams & Condition</a>
            <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
            <a href="#" className="text-white text-decoration-none">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
