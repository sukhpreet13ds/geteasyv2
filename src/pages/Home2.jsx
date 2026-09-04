import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowRight, faCalendarDays, faPaperPlane, faShareNodes, faCloud, faShieldHalved, faBell, faScissors, faCar, faHandSparkles, faSpa, faUserDoctor, faBrush, faPenNib, faPaw, faWrench, faRotate } from '@fortawesome/free-solid-svg-icons';
import VanillaTilt from 'vanilla-tilt';
import dashboardVideo from '../assets/dashboard.mp4';

// Bubbles Showcase Images
import salonOwnerImg from '../assets/bubbles/salon-owner.png';
import bigChatImg from '../assets/bubbles/big-chat.png';
import sChat1 from '../assets/bubbles/s-chat1.png';
import sChat2 from '../assets/bubbles/s-chat2.png';
import sChat3 from '../assets/bubbles/s-chat3.png';
import sChat4 from '../assets/bubbles/s-chat4.png';
import sChat5 from '../assets/bubbles/s-chat5.png';
import instaLeft from '../assets/bubbles/insta-left.png';
import webleft from '../assets/bubbles/web-left.png';
import web1 from '../assets/bubbles/web1.png';
import insta3 from '../assets/bubbles/insta3.png';
import insta4 from '../assets/bubbles/insta4.png';
import salonLogo1 from '../assets/salon-logo1.jpg';
import salonLogo2 from '../assets/salon-logo2.jpg';
import salonLogo3 from '../assets/salon-logo3.jpg';

// Feature Showcase Images
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpeg';
import feature4 from '../assets/feature4.jpg';
import billing from '../assets/billing.png';
import accessAutomationVideo from '../assets/access-automation.mp4';


// G2 Badge Images
import g2Badge1 from '../assets/G2 Badge 1.png';
import g2Badge2 from '../assets/G2 Badge 2.png';
import g2Badge3 from '../assets/G2 Badge 3.png';
import g2Badge4 from '../assets/G2 Badge 4.png';
import g2Badge5 from '../assets/G2 Badge 5.png';
import g2Badge6 from '../assets/G2 Badge 6.png';
import g2Badge7 from '../assets/G2 Badge 7.png';
import g2Badge10 from '../assets/G2 Badge 10.png';

// Brand Images
import brand1 from '../assets/brand1.jpg';
import brand2 from '../assets/brand2.jpg';
import brand3 from '../assets/brand3.jpeg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.jpeg';
import brand6 from '../assets/brand6.jpg';
import brand7 from '../assets/brand7.svg';

// Flag Images
import flag1 from '../assets/flag1.png';
import flag2 from '../assets/flag2.svg';
import flag4 from '../assets/flag4.webp';
import flag5 from '../assets/flag5.svg';
import flag6 from '../assets/flag6.svg';
import flag7 from '../assets/flag7.avif';
import flag8 from '../assets/flag8.webp';
import flag9 from '../assets/flag9.webp';
import flag10 from '../assets/flag10.webp';
import flag11 from '../assets/flag11.webp';
import flag12 from '../assets/flag12.webp';
import flag13 from '../assets/flag13.svg';
import flag14 from '../assets/flag14.webp';
import flag15 from '../assets/flag15.webp';
import flag16 from '../assets/flag16.webp';
import flag17 from '../assets/flag17.svg';
import flag18 from '../assets/flag18.svg';
import flag19 from '../assets/flag19.svg';

const Counter = ({ end, duration = 2000, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentVal = progress * end;
            setCount(currentVal);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
};

const FadeInUp = ({ children, delay = "0s", className = "", innerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const activeRef = innerRef || domRef;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (activeRef.current) {
      observer.observe(activeRef.current);
    }
    
    return () => {
      if (activeRef.current) {
        observer.unobserve(activeRef.current);
      }
    };
  }, [activeRef]);

  return (
    <div
      ref={activeRef}
      className={`${className} ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}
      style={{ 
        animationDelay: delay, 
        visibility: isVisible ? 'visible' : 'hidden',
        animationFillMode: 'both' 
      }}
    >
      {children}
    </div>
  );
};

const Home2 = () => {
  const tiltRef = useRef(null);
  
  // Refs for dynamic line calculations
  const flowLayoutRef = useRef(null);
  const prob1Ref = useRef(null);
  const prob2Ref = useRef(null);
  const prob3Ref = useRef(null);
  const sol1Ref = useRef(null);
  const sol2Ref = useRef(null);
  const sol3Ref = useRef(null);

  const threadLayoutRef = useRef(null);
  const tCard1Ref = useRef(null);
  const tCard2Ref = useRef(null);
  const tCard3Ref = useRef(null);

  const [threadPaths, setThreadPaths] = useState({ 
    path1: '', 
    path2: '', 
    dot1: { x: 0, y: 0 }, 
    dot2: { x: 0, y: 0 }, 
    dot3: { x: 0, y: 0 } 
  });

  const countries = [
    "India",
    "UAE",
    "Qatar",
    "Nepal",
    "Kuwait",
    "Bahrain",
    "Lebanon",
    "Sri Lanka",
    "Maldives",
    "Oman",
    "Africa",
    "Australia",
    "Malaysia",
    "Thailand",
    "Mauritius",
    "South Africa",
    "New Zealand",
    "Saudi Arabia"
  ];
  const reviews = [
    { name: "Ariana Mitchell", initials: "AM", business: "Owner, Glow & Grace Salon", text: "Get Easy Software has transformed our salon. The WhatsApp marketing tool keeps our bookings full week after week!" },
    { name: "Daniel Rhodes", initials: "DR", business: "Founder, Paws & Claws Pet Clinic", text: "Scheduling pet check-ups is incredibly smooth now. Clients love the automatic WhatsApp reminders!" },
    { name: "Sophia Turner", initials: "ST", business: "Director, Shine Hair Studio", text: "Billing is lightning fast, and tracking therapist commissions is automated. Saved us countless hours!" },
    { name: "Liam Carter", initials: "LC", business: "Manager, VetCare Clinic", text: "Managing multiple locations and inventory under one dashboard has never been easier. Truly outstanding." },
    { name: "Maya Collins", initials: "MC", business: "Founder, Urban Velvet Medspa", text: "Customer responses are faster, and booking coordination is perfect. Our patient retention went up by 35%!" },
    { name: "Oliver Gray", initials: "OG", business: "Owner, Bark & Bubbles Pet Spa", text: "The QR booking portal on our website works 24/7. Clients book appointments effortlessly anytime." },
    { name: "Emily Parker", initials: "EP", business: "Manager, Luxe Beauty Lounge", text: "Easy AI billing automatically handles our membership discounts and package deductions without errors." },
    { name: "Harper Wilson", initials: "HW", business: "Director, Happy Tails Animal Clinic", text: "The stock alert system is a lifesaver. We never run out of medical supplies or pet food anymore." },
    { name: "Jack Dawson", initials: "JD", business: "Owner, Elite Grooming Salon", text: "Superb billing software. Customer support is incredibly fast and helpful. highly recommended!" }
  ];
  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const [activePointIndex, setActivePointIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActivePointIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePointClick = (index) => {
    setActivePointIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) {
      const timeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoPlaying]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountryIndex((prev) => (prev + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [countries.length]);

  const [svgPaths, setSvgPaths] = useState({ path1: '', path2: '', path3: '' });

  useEffect(() => {
    const tiltNode = tiltRef.current;
    if (tiltNode) {
      VanillaTilt.init(tiltNode, {
        reverse: false,
        max: 2, // Minimal tilt angle (very subtle)
        startX: 0,
        startY: 0,
        perspective: 1500, // Higher perspective to flatten tilt depth
        scale: 1, // Keep scale flat (100%)
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        "reset-to-start": true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: true,
        "max-glare": 0.15,
        "glare-prerender": false,
        "mouse-event-element": null,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
      });
    }
    return () => {
      if (tiltNode && tiltNode.vanillaTilt) {
        tiltNode.vanillaTilt.destroy();
      }
    };
  }, []);

  // Calculate dynamic thread paths
  useEffect(() => {
    const updatePaths = () => {
      if (
        !flowLayoutRef.current ||
        !prob1Ref.current ||
        !prob2Ref.current ||
        !prob3Ref.current ||
        !sol1Ref.current ||
        !sol2Ref.current ||
        !sol3Ref.current
      ) {
        return;
      }

      const layoutRect = flowLayoutRef.current.getBoundingClientRect();
      const p1Rect = prob1Ref.current.getBoundingClientRect();
      const p2Rect = prob2Ref.current.getBoundingClientRect();
      const p3Rect = prob3Ref.current.getBoundingClientRect();
      const s1Rect = sol1Ref.current.getBoundingClientRect();
      const s2Rect = sol2Ref.current.getBoundingClientRect();
      const s3Rect = sol3Ref.current.getBoundingClientRect();

      // Connector coordinates relative to flow-layout container
      const isMobile = window.innerWidth < 1200;

      if (isMobile) {
        // Left-side coordinates
        const p1X = p1Rect.left - layoutRect.left;
        const p1Y = p1Rect.top - layoutRect.top + p1Rect.height / 2;
        const s1X = s1Rect.left - layoutRect.left;
        const s1Y = s1Rect.top - layoutRect.top + s1Rect.height / 2;

        const p2X = p2Rect.left - layoutRect.left;
        const p2Y = p2Rect.top - layoutRect.top + p2Rect.height / 2;
        const s2X = s2Rect.left - layoutRect.left;
        const s2Y = s2Rect.top - layoutRect.top + s2Rect.height / 2;

        const p3X = p3Rect.left - layoutRect.left;
        const p3Y = p3Rect.top - layoutRect.top + p3Rect.height / 2;
        const s3X = s3Rect.left - layoutRect.left;
        const s3Y = s3Rect.top - layoutRect.top + s3Rect.height / 2;

        // Path sweeps left into a gutter (e.g. x = 12px) and goes down to the solution
        const gutterX = 12;
        
        const path1 = `M ${p1X} ${p1Y} H ${gutterX + 10} Q ${gutterX} ${p1Y} ${gutterX} ${p1Y + 15} V ${s1Y - 15} Q ${gutterX} ${s1Y} ${gutterX + 10} ${s1Y} H ${s1X}`;
        const path2 = `M ${p2X} ${p2Y} H ${gutterX + 10} Q ${gutterX} ${p2Y} ${gutterX} ${p2Y + 15} V ${s2Y - 15} Q ${gutterX} ${s2Y} ${gutterX + 10} ${s2Y} H ${s2X}`;
        const path3 = `M ${p3X} ${p3Y} H ${gutterX + 10} Q ${gutterX} ${p3Y} ${gutterX} ${p3Y + 15} V ${s3Y - 15} Q ${gutterX} ${s3Y} ${gutterX + 10} ${s3Y} H ${s3X}`;

        setSvgPaths({ path1, path2, path3 });
      } else {
        // Problem 1 Left-Middle:
        const p1X = p1Rect.left - layoutRect.left;
        const p1Y = p1Rect.top - layoutRect.top + p1Rect.height / 2;

        // Solution 1 Top-Middle:
        const s1X = s1Rect.left - layoutRect.left + s1Rect.width / 2;
        const s1Y = s1Rect.top - layoutRect.top;

        // Problem 2 Right-Middle:
        const p2X = p2Rect.right - layoutRect.left;
        const p2Y = p2Rect.top - layoutRect.top + p2Rect.height / 2;

        // Solution 2 Right-Middle:
        const s2X = s2Rect.right - layoutRect.left;
        const s2Y = s2Rect.top - layoutRect.top + s2Rect.height / 2;

        // Problem 3 Right-Middle:
        const p3X = p3Rect.right - layoutRect.left;
        const p3Y = p3Rect.top - layoutRect.top + p3Rect.height / 2;

        // Solution 3 Right-Middle:
        const s3X = s3Rect.right - layoutRect.left;
        const s3Y = s3Rect.top - layoutRect.top + s3Rect.height / 2;

        // Path 1 (Prob 1 Left -> Sol 1 Top)
        const path1 = `M ${p1X} ${p1Y} L ${s1X + 20} ${p1Y} Q ${s1X} ${p1Y} ${s1X} ${p1Y + 20} L ${s1X} ${s1Y}`;

        // Path 2 (Prob 2 Right -> Loops right and down -> Sol 2 Right)
        const loop2X = Math.max(p2X, s2X) + 40;
        const path2 = `M ${p2X} ${p2Y} L ${loop2X - 20} ${p2Y} Q ${loop2X} ${p2Y} ${loop2X} ${p2Y + 20} L ${loop2X} ${s2Y - 20} Q ${loop2X} ${s2Y} ${loop2X - 20} ${s2Y} L ${s2X} ${s2Y}`;

        // Path 3 (Prob 3 Right -> Loops right and down -> Sol 3 Right)
        const loop3X = Math.max(p3X, s3X) + 30;
        const path3 = `M ${p3X} ${p3Y} L ${loop3X - 20} ${p3Y} Q ${loop3X} ${p3Y} ${loop3X} ${p3Y + 20} L ${loop3X} ${s3Y - 20} Q ${loop3X} ${s3Y} ${loop3X - 20} ${s3Y} L ${s3X} ${s3Y}`;

        setSvgPaths({ path1, path2, path3 });
      }
    };

    updatePaths();
    
    // Recalculate on load and resize
    window.addEventListener('resize', updatePaths);
    // Extra timeout calculation to ensure fonts/layout has fully settled
    const timer = setTimeout(updatePaths, 300);

    return () => {
      window.removeEventListener('resize', updatePaths);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const updateThreadPaths = () => {
      if (!threadLayoutRef.current || !tCard1Ref.current || !tCard2Ref.current || !tCard3Ref.current) return;

      const parentRect = threadLayoutRef.current.getBoundingClientRect();
      const c1Rect = tCard1Ref.current.getBoundingClientRect();
      const c2Rect = tCard2Ref.current.getBoundingClientRect();
      const c3Rect = tCard3Ref.current.getBoundingClientRect();

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        // Mobile View: vertical line on the left (x = 20) with horizontal spurs to connect to the cards
        const d1X = 20;
        const d1Y = c1Rect.top - parentRect.top + c1Rect.height / 2;
        
        const d2X = 20;
        const d2Y = c2Rect.top - parentRect.top + c2Rect.height / 2;

        const d3X = 20;
        const d3Y = c3Rect.top - parentRect.top + c3Rect.height / 2;

        // Path 1 connects Card 1 to vertical line, runs down, then connects to Card 2
        const path1 = `M ${c1Rect.left - parentRect.left + 2} ${d1Y} H ${d1X} V ${d2Y} H ${c2Rect.left - parentRect.left + 2}`;
        
        // Path 2 runs from Card 2 height down to Card 3 height, then connects to Card 3
        const path2 = `M ${d2X} ${d2Y} V ${d3Y} H ${c3Rect.left - parentRect.left + 2}`;

        setThreadPaths({
          path1,
          path2,
          dot1: { x: d1X, y: d1Y },
          dot2: { x: d2X, y: d2Y },
          dot3: { x: d3X, y: d3Y }
        });
      } else {
        // Desktop View: alternating left/right layout (cards connect via overlap lines)
        // Dot 1 is at bottom center of Card 1
        const d1X = c1Rect.left - parentRect.left + c1Rect.width / 2;
        const d1Y = c1Rect.bottom - parentRect.top;

        // Dot 2 is at left center of Card 2
        const d2X = c2Rect.left - parentRect.left;
        const d2Y = c2Rect.top - parentRect.top + c2Rect.height / 2;

        // Dot 2 bottom center (start of path 2)
        const d2BottomX = c2Rect.left - parentRect.left + c2Rect.width / 2;
        const d2BottomY = c2Rect.bottom - parentRect.top;

        // Dot 3 is at right center of Card 3
        const d3X = c3Rect.right - parentRect.left;
        const d3Y = c3Rect.top - parentRect.top + c3Rect.height / 2;

        // Path 1 (Card 1 Bottom [overlap by 2px] -> Card 2 Left [overlap by 2px])
        const path1 = `M ${d1X} ${d1Y - 2} V ${d2Y - 20} Q ${d1X} ${d2Y} ${d1X + 20} ${d2Y} H ${d2X + 2}`;
        
        // Path 2 (Card 2 Bottom [overlap by 2px] -> Card 3 Right [overlap by 2px])
        const path2 = `M ${d2BottomX} ${d2BottomY - 2} V ${d3Y - 20} Q ${d2BottomX} ${d3Y} ${d2BottomX - 20} ${d3Y} H ${d3X - 2}`;

        setThreadPaths({
          path1,
          path2,
          dot1: { x: d1X, y: d1Y },
          dot2: { x: d2X, y: d2Y },
          dot3: { x: d3X, y: d3Y }
        });
      }
    };

    updateThreadPaths();
    
    // Periodically update coordinates as fadeInUp animations run and cards settle
    const interval = setInterval(updateThreadPaths, 100);
    const stopTimer = setTimeout(() => clearInterval(interval), 3000);
    
    window.addEventListener('resize', updateThreadPaths);

    return () => {
      window.removeEventListener('resize', updateThreadPaths);
      clearInterval(interval);
      clearTimeout(stopTimer);
    };
  }, []);


  return (
    <>
      <section className="hero-section">
        {/* Animated Background Shades (Staggered Horizontal Bars on the right) */}
        <div className="shades-container">
          <div className="shade-bar bar-1"></div>
          <div className="shade-bar bar-2"></div>
          <div className="shade-bar bar-3"></div>
          <div className="shade-bar bar-4"></div>
          <div className="shade-bar bar-5"></div>
          <div className="shade-bar bar-6"></div>
          <div className="shade-bar bar-7"></div>
          <div className="shade-bar bar-8"></div>
          <div className="shade-bar bar-9"></div>
          <div className="shade-bar bar-10"></div>
          <div className="shade-bar bar-11"></div>
          <div className="shade-bar bar-12"></div>
        </div>

        <div className="hero-container">
        
        {/* Animated Sticky Note on Left Side */}
        {/* <div className="hero-sticky-wrapper">
          <div className="quote-container">
            <i className="pin"></i>
            <blockquote className="note yellow">
              <div className="note-static-text">Software Starts at only</div>
              <div className="note-dynamic-price">
                <span className="price-val val-1">₹799</span>
                <span className="price-val val-2">$20</span>
              </div>
            </blockquote>
          </div>
        </div> */}
        
        {/* Top Content Area */}
        <div className="hero-header-content">
            <div className="badge-sticky-container">
              <div className="hero-badge">
                <span className="badge-icon-wrapper">
                  <FontAwesomeIcon icon={faChartLine} />
                </span>
                <span className="badge-text">Get Easy Software, Recognized Growth Leader 2025</span>
              </div>

             
              {/* <div className="hero-sticky-wrapper mobile-sticky">
                <div className="quote-container">
                  <i className="pin"></i>
                  <blockquote className="note yellow">
                    <div className="note-static-text">Software Starts at only</div>
                    <div className="note-dynamic-price">
                      <span className="price-val val-1">₹799</span>
                      <span className="price-val val-2">$20</span>
                    </div>
                  </blockquote>
                </div>
              </div> */}
            </div>
            
            <div className="revenue-banner-animate">10X Your Revenue</div>
            
            <h1 className="hero-heading">
              Growth with the Power of WhatsApp Using <span className="highlight-text-wrapper animated">Get Easy Software</span>
            </h1>
            
            <p className="hero-description">
              Get Easy Software offers an all-in-one AI-powered WhatsApp marketing platform that helps businesses automate communication, engage customers, and increase sales. With official WhatsApp integration, you can send automated reminders, promotions, offers, invoices, updates, speed up customer management, marketing & business growth.
            </p>
            <div className="hero-actions">
              <button className="btn-get-demo"><span>Try Get Easy Software</span></button>
              <button className="btn-try-free"><span>See Software In Action</span></button>
            </div>

          </div>

          {/* Bottom Centered Video Area */}
          <div className="hero-video-center">
            <div className="hero-video-animate-wrapper">
              <div className="video-card-wrapper" ref={tiltRef}>
                <video 
                  style={{filter: "brightness(1.2)"}}
                  src={dashboardVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="dashboard-video"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Brand & Flags Section with Seamless Infinite Marquee */}
      <section className="brand-section">
        <div className="brand-section-container">
          
          {/* Header Area */}
          <div className="brand-section-header">
            <h2 className="brand-title">
              {/* <span className="glowing-dot"></span> */}
              Business Owners Love Us
            </h2>
            <p className="brand-subtitle">
              Trusted by 6k+ businesses worldwide for smarter growth and optimized business operations.
            </p>
          </div>

          {/* Rotating Countries Showcase */}
          <div className="country-showcase-container">
            <span className="country-showcase-label">Empowering growth in</span>
            <div className="country-showcase-name-wrapper">
              <span key={currentCountryIndex} className="country-showcase-name">
                {countries[currentCountryIndex]}
              </span>
            </div>
          </div>

          {/* Flags Marquee - Left to Right */}
          <div className="marquee-wrapper direction-right">
            <div className="marquee-track">
              <div className="marquee-content">
                <div className="marquee-item flag-item"><img src={flag1} alt="Flag 1" /></div>
                <div className="marquee-item flag-item"><img src={flag2} alt="Flag 2" /></div>
                <div className="marquee-item flag-item"><img src={flag4} alt="Flag 4" /></div>
                <div className="marquee-item flag-item"><img src={flag5} alt="Flag 5" /></div>
                <div className="marquee-item flag-item"><img src={flag6} alt="Flag 6" /></div>
                <div className="marquee-item flag-item"><img src={flag7} alt="Flag 7" /></div>
                <div className="marquee-item flag-item"><img src={flag8} alt="Flag 8" /></div>
                <div className="marquee-item flag-item"><img src={flag9} alt="Flag 9" /></div>
                <div className="marquee-item flag-item"><img src={flag10} alt="Flag 10" /></div>
                <div className="marquee-item flag-item"><img src={flag11} alt="Flag 11" /></div>
                <div className="marquee-item flag-item"><img src={flag12} alt="Flag 12" /></div>
                <div className="marquee-item flag-item"><img src={flag13} alt="Flag 13" /></div>
                <div className="marquee-item flag-item"><img src={flag14} alt="Flag 14" /></div>
                <div className="marquee-item flag-item"><img src={flag15} alt="Flag 15" /></div>
                <div className="marquee-item flag-item"><img src={flag16} alt="Flag 16" /></div>
                <div className="marquee-item flag-item"><img src={flag17} alt="Flag 17" /></div>
                <div className="marquee-item flag-item"><img src={flag18} alt="Flag 18" /></div>
                <div className="marquee-item flag-item"><img src={flag19} alt="Flag 19" /></div>
              </div>
              {/* Duplicate track for seamless infinite scroll */}
              <div className="marquee-content" aria-hidden="true">
                <div className="marquee-item flag-item"><img src={flag1} alt="Flag 1" /></div>
                <div className="marquee-item flag-item"><img src={flag2} alt="Flag 2" /></div>
                <div className="marquee-item flag-item"><img src={flag4} alt="Flag 4" /></div>
                <div className="marquee-item flag-item"><img src={flag5} alt="Flag 5" /></div>
                <div className="marquee-item flag-item"><img src={flag6} alt="Flag 6" /></div>
                <div className="marquee-item flag-item"><img src={flag7} alt="Flag 7" /></div>
                <div className="marquee-item flag-item"><img src={flag8} alt="Flag 8" /></div>
                <div className="marquee-item flag-item"><img src={flag9} alt="Flag 9" /></div>
                <div className="marquee-item flag-item"><img src={flag10} alt="Flag 10" /></div>
                <div className="marquee-item flag-item"><img src={flag11} alt="Flag 11" /></div>
                <div className="marquee-item flag-item"><img src={flag12} alt="Flag 12" /></div>
                <div className="marquee-item flag-item"><img src={flag13} alt="Flag 13" /></div>
                <div className="marquee-item flag-item"><img src={flag14} alt="Flag 14" /></div>
                <div className="marquee-item flag-item"><img src={flag15} alt="Flag 15" /></div>
                <div className="marquee-item flag-item"><img src={flag16} alt="Flag 16" /></div>
                <div className="marquee-item flag-item"><img src={flag17} alt="Flag 17" /></div>
                <div className="marquee-item flag-item"><img src={flag18} alt="Flag 18" /></div>
                <div className="marquee-item flag-item"><img src={flag19} alt="Flag 19" /></div>
              </div>
            </div>
          </div>

          {/* Brands Marquee - Right to Left */}
          <div className="marquee-wrapper direction-left">
            <div className="marquee-track">
              <div className="marquee-content">
                <div className="marquee-item brand-item"><img src={brand1} alt="Brand 1" /></div>
                <div className="marquee-item brand-item"><img src={brand2} alt="Brand 2" /></div>
                <div className="marquee-item brand-item"><img src={brand3} alt="Brand 3" /></div>
                <div className="marquee-item brand-item"><img src={brand4} alt="Brand 4" /></div>
                <div className="marquee-item brand-item"><img src={brand5} alt="Brand 5" /></div>
                <div className="marquee-item brand-item"><img src={brand6} alt="Brand 6" /></div>
                <div className="marquee-item brand-item"><img src={brand7} alt="Brand 7" /></div>
              </div>
              {/* Duplicate track for seamless infinite scroll */}
              <div className="marquee-content" aria-hidden="true">
                <div className="marquee-item brand-item"><img src={brand1} alt="Brand 1" /></div>
                <div className="marquee-item brand-item"><img src={brand2} alt="Brand 2" /></div>
                <div className="marquee-item brand-item"><img src={brand3} alt="Brand 3" /></div>
                <div className="marquee-item brand-item"><img src={brand4} alt="Brand 4" /></div>
                <div className="marquee-item brand-item"><img src={brand5} alt="Brand 5" /></div>
                <div className="marquee-item brand-item"><img src={brand6} alt="Brand 6" /></div>
                <div className="marquee-item brand-item"><img src={brand7} alt="Brand 7" /></div>
              </div>
            </div>
          </div>
</div>

      </section>

      {/* Official Promotional Messages Section */}
      <section className="promo-section">
        <div className="promo-section-container">
          
          {/* Left Side Content */}
          <div className="promo-content-left">
            <h2 className="promo-title">Official Promotional Messages</h2>
            <p className="promo-subtitle">Enjoy Limitless Messaging that Connects and Converts.</p>
            
            <div className="promo-points-list">
              <div 
                className={`promo-point-item ${activePointIndex === 0 ? 'active' : ''}`}
                onClick={() => handlePointClick(0)}
              >
                <div className="promo-icon-box whatsapp">
                  <svg viewBox="0 0 448 512" className="promo-svg-icon" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div className="promo-point-text">
                  <h3>WhatsApp Bulk Campaign</h3>
                  <p>Send personalized messages at scale to engage clients, drive bookings, and boost marketing results instantly.</p>
                </div>
              </div>
              
              <div 
                className={`promo-point-item ${activePointIndex === 1 ? 'active' : ''}`}
                onClick={() => handlePointClick(1)}
              >
                <div className="promo-icon-box instagram">
                  <svg viewBox="0 0 448 512" className="promo-svg-icon" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.9c-41.4 0-75-33.6-75-75s33.6-75 75-75 75 33.6 75 75-33.6 75-75 75zm146.2-193.4c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9c14.9-.1 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </div>
                <div className="promo-point-text">
                  <h3>Drive Sales on Instagram</h3>
                  <p>Sell memberships and services with customizable plans, payments, automated engagement & analytics to grow loyalty.</p>
                </div>
              </div>
              
              <div 
                className={`promo-point-item ${activePointIndex === 2 ? 'active' : ''}`}
                onClick={() => handlePointClick(2)}
              >
                <div className="promo-icon-box website">
                  <FontAwesomeIcon icon={faCalendarDays} className="promo-fa-icon" />
                </div>
                <div className="promo-point-text">
                  <h3>Schedule from Your Website</h3>
                  <p>Empower members to book appointments, memberships, or sessions anytime with payments, scheduling, and alerts.</p>
                </div>
              </div>
            </div>
            
            <button className="btn-get-demo promo-btn">
              <span>Schedule a Free Demo <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} /></span>
            </button>
          </div>
          
          {/* Right Side Visuals */}
          <div className="promo-visuals-right">
            <div className="bubbles-showcase-wrapper">
              
              {/* Backing decorative glow effect */}
              <div className="promo-visual-glow"></div>
              
              {/* Base Salon Owner Image */}
              <img 
                src={salonOwnerImg} 
                className="salon-owner-img" 
                alt="Salon Owner using mobile" 
              />
              
              {/* Dynamic Chat Bubbles mapped to active point key to re-animate on change */}
              <div key={activePointIndex} className="bubbles-animation-container">
                {/* Left side big chat bubble */}
                <img 
                  src={
                    activePointIndex === 1 ? instaLeft :
                    activePointIndex === 2 ? webleft :
                    bigChatImg
                  } 
                  className="bubble-img bubble-left" 
                  alt="Main Notification" 
                />
                
                {/* Right side staggered bubbles */}
                {activePointIndex === 1 ? (
                  <>
                    {/* <img src={insta1} className="insta1 bubble-img bubble-right b1" alt="Insta bubble 1" />
                    <img src={insta2} className="insta2 bubble-img bubble-right b2" alt="Insta bubble 2" /> */}
                    <img src={insta3} className="insta3 bubble-img bubble-right b3" alt="Insta bubble 3" />
                    <img src={insta4} className="insta4 bubble-img bubble-right b4" alt="Insta bubble 4" />
                  </>
                ) : activePointIndex === 2 ? (
                  <>
                    <img src={sChat1} className="bubble-img bubble-right b1" alt="Web bubble 1" />
                    <img src={sChat2} className="bubble-img bubble-right b2" alt="Web bubble 2" />
                    <img src={web1} className="bubble-img bubble-right web1" alt="Web bubble 3" />
                  </>
                ) : (
                  <>
                    <img src={sChat1} className="bubble-img bubble-right b1" alt="Chat bubble 1" />
                    <img src={sChat2} className="bubble-img bubble-right b2" alt="Chat bubble 2" />
                    <img src={sChat3} className="bubble-img bubble-right b3" alt="Chat bubble 3" />
                    <img src={sChat4} className="bubble-img bubble-right b4" alt="Chat bubble 4" />
                    <img src={sChat5} className="bubble-img bubble-right b5" alt="Chat bubble 5" />
                  </>
                )}
              </div>
              
            </div>
          </div>

        </div>
      </section>

      {/* Choice / Problems & Solutions Section */}
      <section className="choice-section">
        <div className="choice-container">
          
          <div className="choice-header">
            <h2 className="choice-heading">
             What Makes Get Easy Software the Best Choice
            </h2>
            <p className="choice-desc">Latest WhatsApp and AI features, delivered at lightning-fast speed.</p>
          </div>

          <div className="flow-layout" ref={flowLayoutRef}>
            
            {/* SVG Threads for Desktop (Connecting Problem cards to Solution cards) */}
            <div className="flow-svg-container">
              <svg viewBox={`0 0 ${flowLayoutRef.current?.getBoundingClientRect().width || 1000} ${flowLayoutRef.current?.getBoundingClientRect().height || 780}`} fill="none" className="flow-svg-threads">
                {/* Thread 1 */}
                <path d={svgPaths.path1} className="thread-path-bg" stroke="#FE6527" strokeWidth="2" />
                
                {/* Thread 2 */}
                <path d={svgPaths.path2} className="thread-path-bg" stroke="#FE6527" strokeWidth="2" />
                
                {/* Thread 3 */}
                <path d={svgPaths.path3} className="thread-path-bg" stroke="#FE6527" strokeWidth="2" />
              </svg>
            </div>

            {/* Left Vertical / Top Horizontal Indicators */}
            <div className="vertical-label label-solution">Solution</div>
            <div className="horizontal-label label-problem">Problem</div>

            {/* Layout content blocks */}
            <div className="layout-grid">
              
              {/* Problem Cards Group (Top-Right) */}
              <div className="problems-group">
                <div className="prob-item-card fade-up-motion card-delay-1" ref={prob1Ref}>
                  <span className="prob-badge">01</span>
                  <p className="prob-detail">Long queues and slow manual check-ins frustrating your clients?</p>
                </div>
                <div className="prob-item-card fade-up-motion card-delay-2" ref={prob2Ref}>
                  <span className="prob-badge">02</span>
                  <p className="prob-detail">Struggling to manage client information and keep customers coming back?</p>
                </div>
                <div className="prob-item-card fade-up-motion card-delay-3" ref={prob3Ref}>
                  <span className="prob-badge">03</span>
                  <p className="prob-detail">Losing clients due to missed follow-ups and inconsistent marketing?</p>
                </div>
              </div>

              {/* Solution Cards Group (Alternating Left & Bottom) */}
              <div className="solutions-group">
                
                {/* Solution 01 (Unified Left) */}
                <div className="sol-item-card card-style-gradient fade-up-motion card-delay-4" style={{gridArea: "sol1"}} ref={sol1Ref}>
                  <div className="sol-card-header">
                    <span className="sol-number">01</span>
                    <span className="sol-badge-title">Instant QR Check-In for Reception</span>
                  </div>
                  <p className="sol-detail">
                    A smart QR portal for fast, contactless check-in and booking, <strong>reducing queues, eliminating front-desk workload</strong>, enhancing security, and delivering a seamless, modern customer experience with one scan.
                  </p>
                </div>

                {/* Solution 02 (Unified Center) */}
                <div className="sol-item-card card-style-light fade-up-motion card-delay-5" style={{gridArea: "sol2"}} ref={sol2Ref}>
                  <div className="sol-card-header">
                    <span className="sol-number">02</span>
                    <span className="sol-badge-title">Intelligent Client Management</span>
                  </div>
                  <p className="sol-detail">
                    Transform client chaos into charm with Intelligent Client Management: <strong>centralize profiles, track interactions</strong>, automate follow-ups, gain insights, boost retention, and grow your business.
                  </p>
                </div>

                {/* Solution 03 (Unified Bottom Right) */}
                <div className="sol-item-card card-style-gradient-alt fade-up-motion card-delay-6" style={{gridArea: "sol3"}} ref={sol3Ref}>
                  <div className="sol-card-header">
                    <span className="sol-number">03</span>
                    <span className="sol-badge-title">AI-Enabled Marketing Automation</span>
                  </div>
                  <p className="sol-detail">
                    Automate personalized WhatsApp, email, and campaigns with smart segmentation, <strong>enhance engagement, prevent no-shows</strong>, foster loyalty, and drive revenue 24/7 without hassle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="geteasy-stats">
        <div className="stats-container">
          
          <div className="stats-top-row">
            
            {/* Card 1: Star Rating */}
            <FadeInUp delay="0.1s" className="stat-card card-light rating-card">
              <div className="stat-value">
                <Counter end={4.9} decimals={1} suffix=" ★" />
              </div>
              <div className="stat-title">Star Rating</div>
              <p className="stat-desc">
                Top-rated business management and official WhatsApp API provider loved by owners worldwide.
              </p>
            </FadeInUp>

            {/* Card 2: Active Users (Dark Card) */}
            <FadeInUp delay="0.25s" className="stat-card card-dark users-card">
              <div className="avatar-group">
                <img src={salonLogo1} className="avatar av-1" alt="Salon Client 1" />
                <img src={salonLogo2} className="avatar av-2" alt="Salon Client 2" />
                <img src={salonLogo3} className="avatar av-3" alt="Salon Client 3" />
                <span className="avatar-more">+6k</span>
              </div>
              <div className="stat-value">
                <Counter end={6000} suffix="+" />
              </div>
              <div className="stat-title">Active Users</div>
              <p className="stat-desc">
                Every day, thousands of businesses engage, market, and manage bookings seamlessly with Get Easy.
              </p>
            </FadeInUp>

            {/* Card 3: Countries */}
            <FadeInUp delay="0.4s" className="stat-card card-light countries-card">
              <div className="stat-value-row">
                <span className="stat-value">
                  <Counter end={26} suffix="+" />
                </span>
                <span className="stat-value-label">Countries Served</span>
              </div>
              <p className="stat-desc">
                From cities to countryside, Get Easy expands across nations to create a global impact with local service.
              </p>
            </FadeInUp>

          </div>

          <div className="stats-bottom-row">
            
            {/* Card 4: Cities / Gauge Card */}
            <FadeInUp delay="0.55s" className="stat-card card-light gauge-card">
              <div className="gauge-header">
                <span className="gauge-title">Service Reach</span>
                <span className="gauge-badge">+100% ↗</span>
              </div>
              <div className="radial-gauge-wrapper">
                <svg viewBox="0 0 200 200" className="radial-gauge-svg">
                  {/* Gauge Track */}
                  <circle cx="100" cy="100" r="75" stroke="#eef0f3" strokeWidth="15" fill="none" strokeDasharray="353 500" strokeLinecap="round" transform="rotate(135 100 100)" />
                  {/* Gauge Fill */}
                  <circle cx="100" cy="100" r="75" stroke="var(--primary-color)" strokeWidth="15" fill="none" strokeDasharray="275 500" strokeLinecap="round" transform="rotate(135 100 100)" strokeDashoffset="0" className="gauge-fill-animate" />
                </svg>
                <div className="gauge-center-text">
                  <div className="gauge-value">
                    <Counter end={125} suffix="+" />
                  </div>
                  <div className="gauge-label">Cities</div>
                </div>
              </div>
            </FadeInUp>

            {/* Card 5: Brand Statement */}
            <FadeInUp delay="0.7s" className="stat-text-block">
              <p className="stat-paragraph">
                By fostering seamless communication and intelligent automation, we've significantly improved business outcomes. Our <strong>advanced marketing campaigns</strong> and <strong>client management features</strong> empower users to keep a close eye on growth, enabling timely, data-driven decisions.
              </p>
            </FadeInUp>

          </div>

        </div>
      </section>

      <section className="geteasy-features-section">
        <div className="features-section-container">
          
          {/* Section Header */}
          <div className="features-section-header">
            <h2 className="features-section-title">
              Powerful Platform Features
            </h2>
            <p className="features-section-subtitle">
              Everything you need to automate workflows, manage operations, and scale your business growth.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="features-bento-grid">
            
            {/* Box 1: Smart Billing Insights */}
            <FadeInUp delay="0.1s" className="feature-card feat-billing">
              <div className="feature-content-top">
                <h3 className="feature-card-title">Smart Billing Insights</h3>
                <p className="feature-card-desc">
                  Monitor your business in real time on a single dashboard. Track revenue, collections, attendance, bookings, and member activity, uncover trends, optimize operations, and make data-driven decisions for smarter growth and retention.
                </p>
              </div>
              <div className="feature-image-bottom">
                <img src={billing} alt="Centralized Marketing Control" className="feature-img" style={{filter: "brightness(1)"}} />
              </div>
            </FadeInUp>

            {/* Box 2: Centralized Marketing Control */}
            <FadeInUp delay="0.25s" className="feature-card feat-marketing">
              <div className="feature-content-top">
                <h3 className="feature-card-title">Centralized Marketing Control</h3>
                <p className="feature-card-desc">
                  Gain complete, real-time visibility into cash flow, collections, and pending dues. Instantly monitor sales, invoices, refunds & payments to enable faster follow-ups, smarter decisions, seamless revenue protection, and efficient business control.
                </p>
                <ul className="feature-bullet-list">
                  <li>
                    <svg className="bullet-check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time cash flow & pending dues tracking</span>
                  </li>
                  <li>
                    <svg className="bullet-check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                    </svg>
                    <span>Instant invoice generation & payment monitoring</span>
                  </li>
                  <li>
                    <svg className="bullet-check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
                    </svg>
                    <span>Seamless refunds & sales reconciliation</span>
                  </li>
                </ul>
              </div>
            </FadeInUp>

            {/* Box 3: Next-Level Inventory Management (Tall Card) */}
            <FadeInUp delay="0.4s" className="feature-card feat-inventory tall-card">
              <div className="feature-content-top">
                <h3 className="feature-card-title">Next-Level Inventory Management</h3>
                <p className="feature-card-desc">
                  Master your inventory across all locations instantly and effortlessly. Automatically track stock, sales, returns, and suppliers, receive smart alerts before shortages, and make data-driven decisions to maximize efficiency and profits.
                </p>
              </div>
              <div className="feature-image-bottom">
                <video src={accessAutomationVideo} autoPlay loop muted playsInline className="feature-img" style={{ pointerEvents: 'none', filter: "brightness(1.2)" }} />
              </div>
            </FadeInUp>

            {/* Box 4: Access Anytime, Anywhere (Wide Card) */}
            <FadeInUp delay="0.55s" className="feature-card feat-access wide-card">
              <div className="feature-content-left">
                <h3 className="feature-card-title">Access Anytime, Anywhere</h3>
                <p className="feature-card-desc">
                  Easily manage your entire business from anywhere. Track revenue, payments, bookings, staff, inventory, and leads in real time. Secure, cloud-based access ensures faster decisions, complete visibility, and total peace of mind.
                </p>
              </div>
              <div className="access-mini-grid">
                <div className="access-mini-box">
                  <div className="mini-box-icon cloud">
                    <FontAwesomeIcon icon={faCloud} />
                  </div>
                  <h4 className="mini-box-title">Cloud Management</h4>
                </div>
                <div className="access-mini-box">
                  <div className="mini-box-icon tracking">
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>
                  <h4 className="mini-box-title">Real-Time Tracking</h4>
                </div>
                <div className="access-mini-box">
                  <div className="mini-box-icon secure">
                    <FontAwesomeIcon icon={faShieldHalved} />
                  </div>
                  <h4 className="mini-box-title">Secure Storage</h4>
                </div>
                <div className="access-mini-box">
                  <div className="mini-box-icon alerts">
                    <FontAwesomeIcon icon={faBell} />
                  </div>
                  <h4 className="mini-box-title">Instant Alerts</h4>
                </div>
              </div>
            </FadeInUp>

          </div>

        </div>
      </section>
      <section className="features-links-section">
        <div className="links-section-container">
          
          <div className="links-section-header">
            <h2 className="review-section-title">
              Empower Your Business with Smart Growth Solutions
            </h2>
          </div>

          <div className="links-grid">
            {[
              { title: "Beauty Salon Software", icon: faScissors, theme: "orange" },
              { title: "Car Spa Software", icon: faCar, theme: "blue" },
              { title: "Nail Salon Software", icon: faHandSparkles, theme: "pink" },
              { title: "Med Spa Software", icon: faSpa, theme: "green" },
              { title: "Aesthetic Clinic Software", icon: faUserDoctor, theme: "purple" },
              { title: "Makeup Academy Software", icon: faBrush, theme: "rose" },
              { title: "Tattoo Studio Software", icon: faPenNib, theme: "slate" },
              { title: "Spa Software", icon: faSpa, theme: "emerald" },
              { title: "Pet Facility Software", icon: faPaw, theme: "amber" },
              { title: "Auto Detailing Software", icon: faWrench, theme: "sky" }
            ].map((item, idx) => (
              <FadeInUp key={idx} delay={`${idx * 0.06}s`} className="link-card-wrapper">
                <a href={`#${item.title.toLowerCase().replace(/ /g, "-")}`} className={`link-card theme-${item.theme}`}>
                  <div className="link-card-icon-box">
                    <FontAwesomeIcon icon={item.icon} className="link-card-icon" />
                  </div>
                  <h3 className="link-card-title">{item.title}</h3>
                  <div className="link-card-arrow">→</div>
                </a>
              </FadeInUp>
            ))}
          </div>

        </div>
      </section>
      <section className="awards-section">
        <div className="awards-container">
          <div className="awards-grid">
            {[
              { img: g2Badge1, title: "G2 Leader" },
              { img: g2Badge2, title: "High Performer" },
              { img: g2Badge3, title: "Best Support" },
              { img: g2Badge4, title: "Easiest To Use" },
              { img: g2Badge5, title: "Easiest Setup" },
              { img: g2Badge6, title: "Users Love Us" },
              { img: g2Badge7, title: "Momentum Leader" },
              { img: g2Badge10, title: "Fastest Implementation" }
            ].map((badge, idx) => (
              <FadeInUp key={idx} delay={`${idx * 0.05}s`} className="award-badge-wrapper">
                <div className="award-badge-card">
                  <img src={badge.img} alt={badge.title} className="award-badge-img" />
                  <span className="award-badge-tooltip">{badge.title}</span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
      <section className="review-section">
        <div className="review-container">
          
          <div className="review-section-header">
            <h2 className="review-section-title">Real Reviews, Real Results</h2>
            <p className="review-section-subtitle">
              See how salons, medspas, and pet clinics worldwide scale operations and delight clients using Get Easy.
            </p>
          </div>

          {/* Desktop view Grid of Vertical Marquees */}
          <div className="reviews-desktop-grid">
            
            {/* Column 1: Bottom to Top */}
            <div className="review-column col-up">
              <div className="review-scroll-track animate-up">
                {/* Double the list for seamless marquee loop */}
                {[...reviews, ...reviews].map((rev, idx) => (
                  <div key={idx} className="review-card-item">
                    <div className="rating-stars">★★★★★</div>
                    <p className="review-card-text">"{rev.text}"</p>
                    <div className="review-card-author">
                      <div className={`author-avatar av-color-${(idx % 5) + 1}`}>{rev.initials}</div>
                      <div className="author-info">
                        <h4>{rev.name}</h4>
                        <span>{rev.business}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Top to Bottom */}
            <div className="review-column col-down">
              <div className="review-scroll-track animate-down">
                {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((rev, idx) => (
                  <div key={idx} className="review-card-item">
                    <div className="rating-stars">★★★★★</div>
                    <p className="review-card-text">"{rev.text}"</p>
                    <div className="review-card-author">
                      <div className={`author-avatar av-color-${(idx % 5) + 1}`}>{rev.initials}</div>
                      <div className="author-info">
                        <h4>{rev.name}</h4>
                        <span>{rev.business}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Bottom to Top */}
            <div className="review-column col-up">
              <div className="review-scroll-track animate-up">
                {[...reviews.slice(3).concat(reviews.slice(0, 3)), ...reviews.slice(3).concat(reviews.slice(0, 3))].map((rev, idx) => (
                  <div key={idx} className="review-card-item">
                    <div className="rating-stars">★★★★★</div>
                    <p className="review-card-text">"{rev.text}"</p>
                    <div className="review-card-author">
                      <div className={`author-avatar av-color-${(idx % 5) + 1}`}>{rev.initials}</div>
                      <div className="author-info">
                        <h4>{rev.name}</h4>
                        <span>{rev.business}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Mobile view Horizontal Marquee (right to left) */}
          <div className="reviews-mobile-marquee">
            <div className="mobile-marquee-track">
              <div className="mobile-marquee-content">
                {reviews.map((rev, idx) => (
                  <div key={idx} className="review-card-item mobile-item">
                    <div className="rating-stars">★★★★★</div>
                    <p className="review-card-text">"{rev.text}"</p>
                    <div className="review-card-author">
                      <div className={`author-avatar av-color-${(idx % 5) + 1}`}>{rev.initials}</div>
                      <div className="author-info">
                        <h4>{rev.name}</h4>
                        <span>{rev.business}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate track for seamless loop */}
              <div className="mobile-marquee-content" aria-hidden="true">
                {reviews.map((rev, idx) => (
                  <div key={`dup-${idx}`} className="review-card-item mobile-item">
                    <div className="rating-stars">★★★★★</div>
                    <p className="review-card-text">"{rev.text}"</p>
                    <div className="review-card-author">
                      <div className={`author-avatar av-color-${(idx % 5) + 1}`}>{rev.initials}</div>
                      <div className="author-info">
                        <h4>{rev.name}</h4>
                        <span>{rev.business}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="three-pointer-section" ref={threadLayoutRef}>
        {/* Section Header */}
        <div className="review-section-header" style={{ marginBottom: '65px', padding: '0 20px' }}>
          <h2 className="review-section-title">Instant WhatsApp Synchronization</h2>
          <p className="review-section-subtitle">AI-Fueled, Official WhatsApp-Certified Communication.</p>
        </div>

        {/* Dynamic connection thread (desktop/mobile) */}
        <svg className="thread-svg-canvas" xmlns="http://www.w3.org/2000/svg">
          <path d={threadPaths.path1} className="thread-line" />
          <path d={threadPaths.path2} className="thread-line" />
        </svg>

        <div className="thread-section-container">
          
          {/* Card 1: Left */}
          <div className="thread-card-row row-left">
            <FadeInUp delay="0.1s" className="thread-card" innerRef={tCard1Ref}>
              <div className="thread-card-header">
                <h3>WhatsApp Bulk Campaigning</h3>
                <span className="thread-badge campaign"><i className="fa-solid fa-bullhorn"></i> Campaign</span>
              </div>
              <div className="thread-card-body">
                <p>Send personalized WhatsApp messages at scale, reminders, promotions, and offers, delivered instantly to boost engagement and drive bookings.</p>
              </div>
            </FadeInUp>
          </div>

          {/* Card 2: Right */}
          <div className="thread-card-row row-right">
            <FadeInUp delay="0.3s" className="thread-card" innerRef={tCard2Ref}>
              <div className="thread-card-header">
                <h3>24/7 Live Chat & Virtual Receptionist</h3>
                <span className="thread-badge chat"><i className="fa-solid fa-robot"></i> Live Chat</span>
              </div>
              <div className="thread-card-body">
                <p>Automates inquiries and bookings, boosts conversions, reduces workload, and keeps your business running smoothly 24/7 with a virtual receptionist.</p>
              </div>
            </FadeInUp>
          </div>

          {/* Card 3: Left */}
          <div className="thread-card-row row-left">
            <FadeInUp delay="0.5s" className="thread-card" innerRef={tCard3Ref}>
              <div className="thread-card-header">
                <h3>On-Demand Innovation Updates</h3>
                <span className="thread-badge whatsapp"><FontAwesomeIcon icon={faRotate} /> Innovation</span>
              </div>
              <div className="thread-card-body">
                <p>Stay future-ready with instant upgrades, automation, smarter billing, analytics & marketing tools boosting engagement, efficiency, and revenue.</p>
              </div>
            </FadeInUp>
          </div>

        </div>
      </section>
      
    </>
  );
};

export default Home2;