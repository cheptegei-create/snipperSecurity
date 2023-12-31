import React from "react";
import Logo from "../../../images/Logo-circle.png";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary"
      aria-label="Uchenna's Portfolio navigation header"
    >
      <div className="container">
        <a className="navbar-brand" href="#About" onClick={() => handlePageChange('About')}>
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />{" "}
          Snipper Security
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="#About" onClick={() => handlePageChange('About')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Portfolio" onClick={() => handlePageChange('Portfolio')}>
                Products & Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact" onClick={() => handlePageChange('Contact')}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Resume" onClick={() => handlePageChange('Review')}>
                Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}