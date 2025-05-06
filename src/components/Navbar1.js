// NavBar.jsx
import React from 'react';
import './Navbar1.css'; // Optional for extra styling
import logo from '../logo1.png'; // Replace with your actual logo
import chatIcon from '../logo2.png'; // Replace with your actual icon

const Navbar1 = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
      <div className="container-fluid">
        {/* Logo and brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="RouteX Logo" width="50" height="40" className="me-2" />
          <span className="fw-bold text-success">RouteX</span>
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3 text-success fw-semibold">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-success" href="#">HOME</a>
            </li>
            <li className="nav-item text-success"><a className="nav-link text-success" href="#">ABOUT US</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle text-success" href="#">VISA</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle text-success" href="#">BLOG</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle text-success" href="#">SHOP</a></li>
            <li className="nav-item dropdown"><a className="nav-link dropdown-toggle text-success" href="#">PAGE</a></li>
            <li className="nav-item"><a className="nav-link text-success" href="#">CONTACT</a></li>
          </ul>
        </div>

        {/* Help/Phone section */}
        <div className="d-none d-lg-flex align-items-center text-success">
          <img src={chatIcon} alt="Chat" width="50" className="me-2" />
          <div>
            <small className="text-muted">Need help?</small><br />
            <strong>(307) 555–0133</strong>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
