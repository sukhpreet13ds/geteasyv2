import React from 'react';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        {/* logo.svg before platform row */}
        <div className="footer-top-logo">
          <img src={logo} alt="GetEasy Logo" className="footer-logo-img" />
        </div>

        {/* Platform row (Grid of columns) */}
        <div className="footer-grid">
          {/* Features */}
          <div className="footer-col">
            <h4 className="footer-heading">Features</h4>
            <ul className="footer-links">
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Properties Management</a></li>
              <li><a href="#">Appointment Management</a></li>
              <li><a href="#">Employee Management</a></li>
              <li><a href="#">Billing & Payment</a></li>
              <li><a href="#">Reports & Graphs</a></li>
              <li><a href="#">Inventory Management</a></li>
            </ul>
          </div>

          {/* Countries we serve in - spanning multiple sub-columns */}
          <div className="footer-col footer-countries-col">
            <h4 className="footer-heading">Countries we serve in</h4>
            <div className="countries-grid">
              <ul className="footer-links">
                <li><a href="#">India</a></li>
                <li><a href="#">UAE</a></li>
                <li><a href="#">Qatar</a></li>
                <li><a href="#">Nepal</a></li>
                <li><a href="#">Kuwait</a></li>
                <li><a href="#">Bahrain</a></li>
                <li><a href="#">Lebanon</a></li>
                <li><a href="#">Sri Lanka</a></li>
                <li><a href="#">Maldives</a></li>
              </ul>
              <ul className="footer-links">
                <li><a href="#">Oman</a></li>
                <li><a href="#">Africa</a></li>
                <li><a href="#">Australia</a></li>
                <li><a href="#">Malaysia</a></li>
                <li><a href="#">Thailand</a></li>
                <li><a href="#">Mauritius</a></li>
                <li><a href="#">South Africa</a></li>
                <li><a href="#">New Zealand</a></li>
                <li><a href="#">Saudi Arabia</a></li>
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Giant footer section like Screenshot 1 */}
        <div className="footer-giant-wrapper">
          <div className="footer-divider"></div>
          
          {/* Giant Logo + EASY Word */}
          <div className="footer-giant-brand-row">
            <div className="footer-giant-logo-icon">
              <svg width="180" height="80" viewBox="0 0 180 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Skewed Neon Green Triangle */}
                <path d="M30 70 L0 70 L30 15 L45 15 Z" fill="#9dff00" />
                {/* First Dark slash */}
                <path d="M48 70 L78 15 H108 L78 70 Z" fill="#1b231d" />
                {/* Second Dark slash */}
                <path d="M85 70 L115 15 H145 L115 70 Z" fill="#1b231d" />
              </svg>
            </div>
            <div className="footer-giant-text">EASY</div>
          </div>

          <div className="footer-bottom-row">
            <div className="footer-bottom-left">THE FIRST THE LAST</div>
            <div className="footer-bottom-middle">
              <a href="#">TERMS & CONDITIONS</a>
              <a href="#">PRIVACY POLICY</a>
            </div>
            <div className="footer-bottom-right">
              ©2026 EASY. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
