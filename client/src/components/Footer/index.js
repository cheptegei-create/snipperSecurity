import React from "react";
import "../../css/custom.css";

export default function Footer() {
  return (
  <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; Diaspora Designing Building OPP. Total Petrol Station</p>
    <p className="col-md-4 mb-0 text-muted">&copy; (City Cabanas) Mombasa Road Behind Liberty Plaza</p>
    <p className="col-md-4 mb-0 text-muted">&copy; P.O Box 74221-00200 Nairobi Kenya</p>

    <a href="mailto:info@snippersecurity.co.ke" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"> Email: info@snippersecurity.co.ke
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="https://www.instagram.com/" className="nav-link px-2 text-muted">Instagram</a></li>
      <li className="nav-item"><a href="https://www.linkedin.com/feed/" className="nav-link px-2 text-muted">LinkedIn</a></li>
      <li className="nav-item"><a href="https://twitter.com/?lang=en" className="nav-link px-2 text-muted">Twitter</a></li>
    </ul>
  </footer>
</div>
  );
}