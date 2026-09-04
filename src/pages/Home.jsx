import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowRight, 
  faPlay, 
  faWandMagicSparkles, 
  faUserCheck, 
  faPaperPlane, 
  faCalendarCheck, 
  faFileInvoiceDollar, 
  faChartLine 
} from '@fortawesome/free-solid-svg-icons';
import './style/style.css';

import crmImg from '../assets/CRM.png';
import mobileCrmImg from '../assets/Mobile-crm.png';
import insta4Img from '../assets/bubbles/insta4.png';
import webLeftImg from '../assets/bubbles/web-left.png';

import salon1 from '../assets/salon-logo1.jpg';
import salon2 from '../assets/salon-logo2.jpg';
import salon3 from '../assets/salon-logo3.jpg';

const Home = () => {
    const featureBadges = [
        { title: 'AI-Powered Automation', icon: faWandMagicSparkles },
        { title: 'Smart Client Management', icon: faUserCheck },
        { title: 'WhatsApp Marketing', icon: faPaperPlane },
        { title: 'Online Booking & Appointments', icon: faCalendarCheck },
        { title: 'Billing & Payments', icon: faFileInvoiceDollar },
        { title: 'Real-Time Analytics', icon: faChartLine },
    ];

    return (
        <section className="new-geteasy-hero-section">
            <div className="new-geteasy-hero-container">
                {/* Left Side Content */}
                <div className="new-geteasy-hero-left">
                    {/* Top Badge */}
                    <div className="new-geteasy-top-badge">
                        <span className="new-geteasy-top-badge-icon">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </span>
                        <span className="new-geteasy-top-badge-text">
                            All-In-One CRM & Business Platform
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="new-geteasy-hero-title">
                        Everything Your Business Needs.{' '}
                        <span className="new-geteasy-hero-title-highlight">
                            All in One Place.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="new-geteasy-hero-description">
                        Manage your entire business from one powerful platform —{' '}
                        <span className="new-geteasy-desc-draw">
                            Automate WhatsApp marketing
                        </span>
                        , Bookings, Billing, Payments, Customers, Staff, Inventory, and more.
                    </p>

                    {/* Feature Badges */}
                    <div className="new-geteasy-features-container">
                        {featureBadges.map((badge, idx) => (
                            <div key={idx} className="new-geteasy-feature-badge">
                                <span className="new-geteasy-feature-icon-wrapper">
                                    <FontAwesomeIcon icon={badge.icon} />
                                </span>
                                <span className="new-geteasy-feature-badge-text">{badge.title}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="new-geteasy-hero-actions">
                        <button className="new-geteasy-btn-primary">
                            <span>
                                Try Get Easy Software{' '}
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="new-geteasy-btn-arrow"
                                />
                            </span>
                        </button>
                        <button className="new-geteasy-btn-secondary">
                            <span>
                                <FontAwesomeIcon
                                    icon={faPlay}
                                    className="new-geteasy-btn-play-icon"
                                />{' '}
                                See Software In Action
                            </span>
                        </button>
                    </div>

                    {/* Ratings & Avatars */}
                    <div className="new-geteasy-rating-container">
                        <div className="new-geteasy-avatar-group">
                            <img
                                src={salon3}
                                alt="Salon User 3"
                                className="new-geteasy-avatar"
                            />
                            <img
                                src={salon2}
                                alt="Salon User 2"
                                className="new-geteasy-avatar"
                            />
                            <img
                                src={salon1}
                                alt="Salon User 1"
                                className="new-geteasy-avatar"
                            />
                        </div>
                        <div className="new-geteasy-rating-content">
                            <div className="new-geteasy-stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="new-geteasy-star-icon">
                                        ★
                                    </span>
                                ))}
                                <span className="new-geteasy-rating-score">4.9/5</span>
                            </div>
                            <p className="new-geteasy-rating-text">Rated by Business Owners</p>
                        </div>
                    </div>
                </div>

                {/* Right Side CRM Showcase */}
                <div className="new-geteasy-hero-right">
                    <div className="new-geteasy-crm-card-wrapper">
                        {/* Main CRM Image */}
                        <img
                            src={crmImg}
                            alt="CRM Business Software Dashboard"
                            className="new-geteasy-crm-image"
                        />

                        {/* Mobile CRM Image - Bottom Left (3D entrance from bottom, static, no float loop) */}
                        <img
                            src={mobileCrmImg}
                            alt="Mobile CRM Software"
                            className="new-geteasy-mobile-crm"
                        />

                        {/* Insta4 Bubble Image - Right Side (Zoom-In entrance + slow float loop) */}
                        <img
                            src={insta4Img}
                            alt="Instagram Notification Bubble"
                            className="new-geteasy-bubble-insta4"
                        />

                        {/* Web Left Bubble Image - Top Left (Zoom-In entrance + slow float loop) */}
                        <img
                            src={webLeftImg}
                            alt="Web Booking Notification Bubble"
                            className="new-geteasy-bubble-webleft"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;