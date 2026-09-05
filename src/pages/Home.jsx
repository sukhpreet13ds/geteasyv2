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
  faChartLine,
  faRocket,
  faShieldHalved,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import './style/style.css';
import crmImg from '../assets/CRM.png';
import mobileCrmImg from '../assets/Mobile-crm.png';
import insta4Img from '../assets/bubbles/insta44.png';
import webLeftImg from '../assets/bubbles/web-leftt.png';

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

    const featurePoints = [
        {
            title: 'Save Time',
            subtitle: 'Automate daily tasks and workflows',
            icon: faRocket,
            colorClass: 'icon-purple'
        },
        {
            title: 'Grow Business',
            subtitle: 'Increase sales and customer retention',
            icon: faChartLine,
            colorClass: 'icon-green'
        },
        {
            title: 'Secure & Reliable',
            subtitle: 'Your data is safe and protected',
            icon: faShieldHalved,
            colorClass: 'icon-amber'
        },
        {
            title: '24/7 Support',
            subtitle: "We're always here to help you",
            icon: faHeadset,
            colorClass: 'icon-pink'
        }
    ];

    const [currentFeatureIndex, setCurrentFeatureIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeatureIndex((prev) => (prev + 1) % featurePoints.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [featurePoints.length]);

    return (
        <>
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
                    {/* Top Feature Banner */}
                    <div className="new-geteasy-top-feature-banner">
                        {/* Hand-drawn Curvy SVG Arrow - Bottom Left */}
                        <div className="new-geteasy-banner-arrow-left">
                            <svg width="66" height="66" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    className="animated-arrow-line" 
                                    d="M52 8C36 5 18 14 20 28C22 40 38 44 44 32C48 22 36 12 22 18C10 24 8 42 20 56C24 63 31 67 38 69" 
                                    stroke="#fe6527" 
                                    strokeWidth="3.4" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                                {/* Separate V-shaped Arrowhead Group - Rotatable independently via CSS */}
                                <g className="animated-arrow-head-group">
                                    <path 
                                        className="animated-arrow-head" 
                                        d="M24 57L38 69L46 56" 
                                        stroke="#fe6527" 
                                        strokeWidth="3.4" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>

                        <div className="new-geteasy-banner-content single-mode">
                            <div key={currentFeatureIndex} className="new-geteasy-banner-item active-single-item">
                                <div className={`new-geteasy-banner-icon ${featurePoints[currentFeatureIndex].colorClass}`}>
                                    <FontAwesomeIcon icon={featurePoints[currentFeatureIndex].icon} />
                                </div>
                                <div className="new-geteasy-banner-info">
                                    <h4 className="new-geteasy-banner-title">{featurePoints[currentFeatureIndex].title}</h4>
                                    <p className="new-geteasy-banner-sub">{featurePoints[currentFeatureIndex].subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>

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

        <section style={{height: "100vh"}}> </section>

        </>
    );
};

export default Home;