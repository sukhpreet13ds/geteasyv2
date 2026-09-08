import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import './style/style.css';

// Category Image Icons
import cat1Icon from '../assets/icons/category1.png';
import cat2Icon from '../assets/icons/category2.png';
import cat3Icon from '../assets/icons/category3.png';
import cat4Icon from '../assets/icons/category4.png';
import cat5Icon from '../assets/icons/category5.png';
import cat6Icon from '../assets/icons/category6.png';
import cat7Icon from '../assets/icons/category7.png';
import cat8Icon from '../assets/icons/category8.png';
import cat9Icon from '../assets/icons/category9.png';
import cat10Icon from '../assets/icons/category10.png';

// Features Image Icons
import feat1Icon from '../assets/icons/feature1.png';
import feat2Icon from '../assets/icons/feature2.png';
import feat3Icon from '../assets/icons/feature3.png';
import feat4Icon from '../assets/icons/feature4.png';
import feat5Icon from '../assets/icons/feature5.png';
import feat6Icon from '../assets/icons/feature6.png';
import feat7Icon from '../assets/icons/feature7.png';

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
              <Link to="/blog" className="nav-link">Blogs</Link>
            </li>
              <li className="nav-item">
              <Link to="/feature" className="nav-link">
                <svg className="easy-ai-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(30 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(90 12 12)"></ellipse>
                  <circle cx="12" cy="12" r="2" fill="url(#atomGrad)"></circle>
                  <g transform="rotate(-30 12 12)">
                    <circle r="1.2" fill="url(#atomGrad)">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12"></animateMotion>
                    </circle>
                  </g>
                  <g transform="rotate(30 12 12)">
                    <circle r="1.2" fill="url(#atomGrad)">
                      <animateMotion dur="4s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="1s"></animateMotion>
                    </circle>
                  </g>
                  <g transform="rotate(90 12 12)">
                    <circle r="1.2" fill="url(#atomGrad)">
                      <animateMotion dur="3.5s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="0.5s"></animateMotion>
                    </circle>
                  </g>
                  <defs>
                    <linearGradient id="atomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fe6527"></stop>
                      <stop offset="100%" stopColor="#fe905f"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                Easy AI
              </Link>
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
                      <img src={feat1Icon} alt="Marketing" className="nav-img-icon" />
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
                      <img src={feat2Icon} alt="Employee Management" className="nav-img-icon" />
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
                      <img src={feat3Icon} alt="Inventory Management" className="nav-img-icon" />
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
                      <img src={feat4Icon} alt="Properties Management" className="nav-img-icon" />
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
                      <img src={feat5Icon} alt="Billing & Payment" className="nav-img-icon" />
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
                      <img src={feat6Icon} alt="Appointment Management" className="nav-img-icon" />
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
                      <img src={feat7Icon} alt="Reports & Graphs" className="nav-img-icon" />
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
                      <img src={cat1Icon} alt="Beauty Salon" className="nav-img-icon" />
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
                      <img src={cat4Icon} alt="Car Spa" className="nav-img-icon" />
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
                      <img src={cat7Icon} alt="Tattoo Studio" className="nav-img-icon" />
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
                      <img src={cat10Icon} alt="Auto Detailing" className="nav-img-icon" />
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
                      <img src={cat2Icon} alt="Spa" className="nav-img-icon" />
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
                      <img src={cat5Icon} alt="Aesthetic" className="nav-img-icon" />
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
                      <img src={cat8Icon} alt="Med Spa" className="nav-img-icon" />
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
                      <img src={cat3Icon} alt="Nail Art" className="nav-img-icon" />
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
                      <img src={cat6Icon} alt="Makeup Studio" className="nav-img-icon" />
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
                      <img src={cat9Icon} alt="Pet Facility" className="nav-img-icon" />
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
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat1Icon} alt="" className="mobile-sub-icon" /><span>Marketing</span></Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat4Icon} alt="" className="mobile-sub-icon" /><span>Properties Management</span></Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat6Icon} alt="" className="mobile-sub-icon" /><span>Appointment Management</span></Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat2Icon} alt="" className="mobile-sub-icon" /><span>Employee Management</span></Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat5Icon} alt="" className="mobile-sub-icon" /><span>Billing & Payment</span></Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat7Icon} alt="" className="mobile-sub-icon" /><span>Reports & Graphs</span></Link></li>
                  <li><Link to="/feature" onClick={toggleMobileMenu}><img src={feat3Icon} alt="" className="mobile-sub-icon" /><span>Inventory Management</span></Link></li>
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
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat1Icon} alt="" className="mobile-sub-icon" /><span>Beauty Salon</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat2Icon} alt="" className="mobile-sub-icon" /><span>Spa</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat3Icon} alt="" className="mobile-sub-icon" /><span>Nail Art</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat4Icon} alt="" className="mobile-sub-icon" /><span>Car Spa</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat5Icon} alt="" className="mobile-sub-icon" /><span>Aesthetic</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat6Icon} alt="" className="mobile-sub-icon" /><span>Makeup Studio</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat7Icon} alt="" className="mobile-sub-icon" /><span>Tattoo Studio</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat8Icon} alt="" className="mobile-sub-icon" /><span>Med Spa</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat9Icon} alt="" className="mobile-sub-icon" /><span>Pet Facility</span></Link></li>
                  <li><Link to="/category" onClick={toggleMobileMenu}><img src={cat10Icon} alt="" className="mobile-sub-icon" /><span>Auto Detailing</span></Link></li>
                </ul>
              </div>
            </li>

           

            <li className="mobile-nav-item">
              <Link to="/blog" className="mobile-nav-link" onClick={toggleMobileMenu}>Blogs</Link>
            </li>
             <li className="mobile-nav-item">
              <Link to="/feature" className="mobile-nav-link easy-ai-mobile-link" onClick={toggleMobileMenu}>
                <svg className="easy-ai-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGradMobile)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGradMobile)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(30 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#atomGradMobile)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(90 12 12)"></ellipse>
                  <circle cx="12" cy="12" r="2" fill="url(#atomGradMobile)"></circle>
                  <g transform="rotate(-30 12 12)">
                    <circle r="1.2" fill="url(#atomGradMobile)">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12"></animateMotion>
                    </circle>
                  </g>
                  <g transform="rotate(30 12 12)">
                    <circle r="1.2" fill="url(#atomGradMobile)">
                      <animateMotion dur="4s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="1s"></animateMotion>
                    </circle>
                  </g>
                  <g transform="rotate(90 12 12)">
                    <circle r="1.2" fill="url(#atomGradMobile)">
                      <animateMotion dur="3.5s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="0.5s"></animateMotion>
                    </circle>
                  </g>
                  <defs>
                    <linearGradient id="atomGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fe6527"></stop>
                      <stop offset="100%" stopColor="#fe905f"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span>Easy AI</span>
              </Link>
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
