import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  // Software Category Icons
  faScissors, 
  faSpa, 
  faHandSparkles, 
  faCar, 
  faUserDoctor, 
  faBrush, 
  faPenNib, 
  faPaw, 
  faWrench, 
  // Features Icons
  faBullhorn,
  faUsers,
  faCubes,
  faBuilding,
  faFileInvoiceDollar,
  faCalendarCheck,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.svg';
import './style/style.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null); // 'features' | 'category' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.nav-item-dropdown') && !event.target.closest('.mega-menu-overlay')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const toggleDropdown = (menu, e) => {
    e.stopPropagation();
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null); // Reset accordions when opening/closing mobile menu
  };

  const handleMobileDropdown = (menu, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu); // Automatically closes the other one since state is shared
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left Side: Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="GetEasy Logo" className="logo-img" />
          </Link>
        </div>

        {/* Center: Desktop Nav Items */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {/* Features Mega Menu */}
            <li className={`nav-item nav-item-dropdown ${activeDropdown === 'features' ? 'active' : ''}`}>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={(e) => toggleDropdown('features', e)}
                aria-expanded={activeDropdown === 'features'}
              >
                Features
                <span className="arrow-icon">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </li>

            {/* Software Category Mega Menu */}
            <li className={`nav-item nav-item-dropdown ${activeDropdown === 'category' ? 'active' : ''}`}>
              <button 
                className="nav-link dropdown-toggle" 
                onClick={(e) => toggleDropdown('category', e)}
                aria-expanded={activeDropdown === 'category'}
              >
                Software Category
                <span className="arrow-icon">
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </li>

            <li className="nav-item">
              <Link to="/feature" className="nav-link">Easy AI</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blogs</Link>
            </li>
          </ul>
        </nav>

        {/* Right Side: Action Button */}
        <div className="navbar-actions">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="book-call-btn">
            <span>Book a Call</span>
          </a>
        </div>

        {/* Burger Menu for Mobile */}
        <button 
          className={`burger-menu-btn ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>

      {/* Desktop Mega Menu Overlays */}
      {activeDropdown === 'features' && (
        <div className="mega-menu-overlay features-menu animate-fade-in">
          <div className="mega-menu-content">
            <div className="mega-menu-column">
              <ul className="mega-menu-links">
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faBullhorn} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Marketing</span>
                      <span className="item-desc">Boost sales & increase cash flow with marketing tools designed to convert.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faUsers} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Employee Management</span>
                      <span className="item-desc">Make employees more efficient and productive with smart management.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faCubes} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Inventory Management</span>
                      <span className="item-desc">Reduce product waste & stay ahead in inventory and stock management.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mega-menu-column">
              <ul className="mega-menu-links">
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faBuilding} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Properties Management</span>
                      <span className="item-desc">Manage staff, track products & analyze performance all from one dashboard.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faFileInvoiceDollar} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Billing & Payment</span>
                      <span className="item-desc">Fast, reliable billing with secure payments and automated invoicing.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mega-menu-column">
              <ul className="mega-menu-links">
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faCalendarCheck} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Appointment Management</span>
                      <span className="item-desc">Convert Instagram followers into loyal, paying clients with a free web portal.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faChartPie} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Reports & Graphs</span>
                      <span className="item-desc">Effortlessly analyze overall business performance and drive sales growth.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeDropdown === 'category' && (
        <div className="mega-menu-overlay category-menu animate-fade-in">
          <div className="mega-menu-content">
            <div className="mega-menu-column">
              <ul className="mega-menu-links">
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faScissors} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Beauty Salon</span>
                      <span className="item-desc">Maximize salon potential with ease using our best-in-class salon software.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faCar} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Car Spa</span>
                      <span className="item-desc">Easily reduce the daily stress of car spa management with smart software.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faPenNib} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Tattoo Studio</span>
                      <span className="item-desc">Leading tattoo studio software for efficiently managing business operations.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faWrench} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Auto Detailing</span>
                      <span className="item-desc">Transform your auto detailing operations and eliminate everyday chaos.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mega-menu-column">
              <ul className="mega-menu-links">
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faSpa} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Spa</span>
                      <span className="item-desc">Simplify spa management and reduce stress with an all-in-one software solution.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faBrush} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Aesthetic</span>
                      <span className="item-desc">Elevate your aesthetic studio brand with smart aesthetic studio software.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faUserDoctor} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Med Spa</span>
                      <span className="item-desc">Increase Medical Spa business growth with your powerful smart solution.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mega-menu-column">
              <ul className="mega-menu-links">
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faHandSparkles} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Nail Art</span>
                      <span className="item-desc">Create personalized nail & salon experiences for customers with intuitive software.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faBrush} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Makeup Studio</span>
                      <span className="item-desc">Grow & expand a makeup studio brand with comprehensive studio software.</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="mega-menu-item">
                    <div className="item-icon-wrapper">
                      <FontAwesomeIcon icon={faPaw} className="fa-icon" />
                    </div>
                    <div>
                      <span className="item-name">Pet Facility</span>
                      <span className="item-desc">Simplify management for pet grooming businesses and veterinary clinics.</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Panel (coming from top to bottom) */}
      <div className={`mobile-menu-panel ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          <ul className="mobile-nav-list">
            
            {/* Features Accordion */}
            <li className={`mobile-nav-item ${activeDropdown === 'features' ? 'expanded' : ''}`}>
              <button 
                className="mobile-nav-link accordion-toggle"
                onClick={(e) => handleMobileDropdown('features', e)}
              >
                Features
                <span className="arrow-icon-mobile">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className="mobile-dropdown-panel">
                <ul className="mobile-sub-list">
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Marketing</Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Properties Management</Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Appointment Management</Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Employee Management</Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Billing & Payment</Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Reports & Graphs</Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}>Inventory Management</Link></li>
                </ul>
              </div>
            </li>

            {/* Category Accordion */}
            <li className={`mobile-nav-item ${activeDropdown === 'category' ? 'expanded' : ''}`}>
              <button 
                className="mobile-nav-link accordion-toggle"
                onClick={(e) => handleMobileDropdown('category', e)}
              >
                Software Category
                <span className="arrow-icon-mobile">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className="mobile-dropdown-panel">
                <ul className="mobile-sub-list">
                  <li><Link to="/category" onClick={toggleMobileMenu}>Beauty Salon</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Spa</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Nail Art</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Car Spa</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Aesthetic</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Makeup Studio</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Tattoo Studio</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Med Spa</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Pet Facility</Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}>Auto Detailing</Link></li>
                </ul>
              </div>
            </li>

            <li className="mobile-nav-item">
              <Link to="/feature" className="mobile-nav-link" onClick={toggleMobileMenu}>Easy AI</Link>
            </li>

            <li className="mobile-nav-item">
              <Link to="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blogs</Link>
            </li>
          </ul>

          <div className="mobile-menu-footer">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="mobile-book-call-btn" onClick={toggleMobileMenu}>
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
