import React from 'react';
import 'animate.css';
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
    faHeadset,
    faCalendarDays,
    faChevronDown,
    faCloud,
    faBell
} from '@fortawesome/free-solid-svg-icons';
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
import crmImg from '../assets/CRM.png';
import mobileCrmImg from '../assets/Mobile-crm.png';
import insta4Img from '../assets/bubbles/insta44.png';
import webLeftImg from '../assets/bubbles/web-leftt.png';
import billing from '../assets/Billing-mane.jpg';
import accessAutomationVideo from '../assets/inventory.jpg';

// Problem Section Images
import qrCheckImg from '../assets/qr-check.jpg';
import intelligentClientImg from '../assets/intelligent-client.jpg';
import aiEnabledImg from '../assets/ai-enabled.jpg';
import thumbnail1 from "../assets/neel-thumb.jpg"
import thumbnail2 from "../assets/salon-thumb.jpg"

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

import salon1 from '../assets/salon-logo1.jpg';
import salon2 from '../assets/salon-logo2.jpg';
import salon3 from '../assets/salon-logo3.jpg';

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

import capterraSvg from '../assets/capterra.svg';
import saas from '../assets/saas.png';
import software from '../assets/software.webp';
import source from '../assets/source.webp';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
const flags = [
    flag1, flag2, flag4, flag5, flag6, flag7, flag8, flag9, 
    flag10, flag11, flag12, flag13, flag14, flag15, flag16, flag17, flag18, flag19
];

const problemBlocks = [
    {
        id: 'qr-check',
        titlePrefix: 'Instant',
        titleRest: 'QR Check-In for Reception',
        image: qrCheckImg,
        imageAlt: 'Instant QR Check-In for Reception',
        isReverse: false,
        items: [
            {
                question: 'Problem 1: Long queues at reception',
                answer: 'Clients shouldn’t have to wait in line just to check in. A simple QR scan lets them check in instantly without depending on reception staff.'
            },
            {
                question: 'Problem 2: Too much manual front-desk work',
                answer: 'Reception teams often spend valuable time handling routine check-ins and bookings. QR-based self-service reduces repetitive tasks and lets your team focus on clients who actually need assistance.'
            },
            {
                question: 'Problem 3: Slow and outdated check-in experience',
                answer: 'Give clients a faster, contactless experience with one scan. QR check-in makes entry simple, convenient, and more modern while helping maintain secure access.'
            }
        ]
    },
    {
        id: 'intelligent-client',
        titlePrefix: 'Intelligent',
        titleRest: 'Client Management',
        image: intelligentClientImg,
        imageAlt: 'Intelligent Client Management',
        isReverse: true,
        items: [
            {
                question: 'Problem 1: Client information is scattered',
                answer: 'Managing client details across different systems can quickly become messy. Centralize profiles, interactions, bookings, and important client information in one place.'
            },
            {
                question: 'Problem 2: Follow-ups are easily missed',
                answer: 'Missed follow-ups can mean missed opportunities. Automate reminders and follow-ups so you can stay connected with clients without relying on manual tracking.'
            },
            {
                question: 'Problem 3: Difficult to understand client behavior',
                answer: 'Get clearer insights into client activity, engagement, and interactions. Use this information to build stronger relationships, improve retention, and identify growth opportunities.'
            }
        ]
    },
    {
        id: 'ai-enabled',
        titlePrefix: 'AI-Enabled',
        titleRest: 'Marketing Automation',
        image: aiEnabledImg,
        imageAlt: 'AI-Enabled Marketing Automation',
        isReverse: false,
        items: [
            {
                question: 'Problem 1: Marketing takes too much time',
                answer: 'Creating and sending campaigns manually across WhatsApp, email, and text can consume hours. Automate your campaigns and let AI handle repetitive marketing tasks for you.'
            },
            {
                question: 'Problem 2: Customers receive generic messages',
                answer: 'One message doesn’t work for everyone. Use smart segmentation and personalized campaigns to send more relevant messages based on client behavior and interests.'
            },
            {
                question: 'Problem 3: Missed reminders mean missed revenue',
                answer: 'Forgotten bookings, renewals, and follow-ups can lead to no-shows and lost revenue. Automated reminders and timely campaigns help keep clients engaged, loyal, and coming back.'
            }
        ]
    }
];

const Counter = ({ end, duration = 2000, decimals = 0, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(null);
  const hasAnimated = React.useRef(false);

  React.useEffect(() => {
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
  const [isVisible, setIsVisible] = React.useState(false);
  const domRef = React.useRef();
  const activeRef = innerRef || domRef;

  React.useEffect(() => {
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

const customerVideos = [
    {
        id: 'qGPQ8CRaWEE',
        name: 'Your salon is losing money 💸 Here\'s the 1-tap fix',
        business: 'Easy Salon Software',
        thumbnail: 'https://img.youtube.com/vi/qGPQ8CRaWEE/hqdefault.jpg'
    },
    {
        id: '-Bi4pzA492I',
        name: 'Enhanced Gift Card Features with Easy Salon Software',
        business: 'Easy Salon Software',
        thumbnail: 'https://img.youtube.com/vi/-Bi4pzA492I/hqdefault.jpg'
    },
    {
        id: 'VYYlVHE15II',
        name: 'Salon Owners Love This Software ',
        business: 'Easy Salon Software',
        thumbnail: 'https://img.youtube.com/vi/VYYlVHE15II/hqdefault.jpg'
    },
    {
        id: 'RzytFGrGDrc',
        name: 'This App Helps Me Work Less & Earn More at My Salon',
        business: 'Get Easy Software',
        thumbnail: 'https://img.youtube.com/vi/RzytFGrGDrc/hqdefault.jpg'
    },
    {
        id: 'NjXpahXVHUw',
        name: 'Ditch the Booking Chaos & Grow Your Salon',
        business: 'Get Easy Software',
        thumbnail: 'https://img.youtube.com/vi/NjXpahXVHUw/hqdefault.jpg'
    },
    {
        id: 's9hZEp0XBFE',
        name: 'Salon Owners: Boost Your Profits & Manage Multiple Locations Effortlessly',
        business: 'Get Easy Software',
        thumbnail: 'https://img.youtube.com/vi/s9hZEp0XBFE/hqdefault.jpg'
    }
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

const softwareCategories = [
    {
        name: "Beauty Salon",
        icon: cat1Icon,
        description: "Maximize salon potential with ease using our best-in-class salon software."
    },
    {
        name: "Spa",
        icon: cat2Icon,
        description: "Simplify spa management and reduce stress with an all-in-one software solution."
    },
    {
        name: "Nail Art",
        icon: cat3Icon,
        description: "Create personalized nail & salon experiences for customers with intuitive software."
    },
    {
        name: "Car Spa",
        icon: cat4Icon,
        description: "Easily reduce the daily stress of car spa management with smart software."
    },
    {
        name: "Aesthetic",
        icon: cat5Icon,
        description: "Elevate your aesthetic studio brand with smart aesthetic studio software."
    },
    {
        name: "Makeup Studio",
        icon: cat6Icon,
        description: "Grow & expand a makeup studio brand with comprehensive studio software."
    },
    {
        name: "Tattoo Studio",
        icon: cat7Icon,
        description: "Leading tattoo studio software for efficiently managing business operations."
    },
    {
        name: "Med Spa",
        icon: cat8Icon,
        description: "Increase Medical Spa business growth with your powerful smart solution."
    },
    {
        name: "Pet Facility",
        icon: cat9Icon,
        description: "Simplify management for pet grooming businesses and veterinary clinics."
    },
    {
        name: "Auto Detailing",
        icon: cat10Icon,
        description: "Transform your auto detailing operations and eliminate everyday chaos."
    }
];

const faqData = [
    {
        question: "How does spa software help my business?",
        answer: "Well, the answer is easy, but it can be answered in multiple ways. Right from simplifying your business operations to improving customer relations, and increasing profits followed by sound decisions, the system contains everything that your business needs, and demands in this modernized era."
    },
    {
        question: "What is the best Spa Software in India?",
        answer: "Easy Spa Software is the best Spa Software in India. It is the widespread usage of this software across India, as well as other countries such as Dubai, Qatar, Canada, and so on that makes it the best choice for all those who are looking for the most effective system software for their spa businesses."
    },
    {
        question: "What is the cost of the latest spa software?",
        answer: "However, the cost of software can vary depending on the type, and brand you are going for. But yes, if you are looking for an affordable system that matches your expectations within your paying capacity, then yes, the best choice available is- Easy Spa Software."
    },
    {
        question: "What are the benefits of using software in the Spa business?",
        answer: "Using the software is a win-win condition. On one side, it will benefit you (the owners of the spa) with reduced workload, easy inventory, proper records, and security of payment. On the other hand, it will benefit your customers with enhanced conveniences such as easy appointment bookings, cancellations, timely reminders, and so on."
    },
    {
        question: "How do I choose the best software for my salon?",
        answer: (
            <div>
                <p style={{ margin: "0 0 12px 0" }}>
                    Certainly! Below are some things that you should always consider in your mind while making the final choice among different software available in the market:
                </p>
                <ol style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                    <li>Is the software capable to adapt your unique business environment?</li>
                    <li>Does it match your existing systems, if any?</li>
                    <li>Is the cost of the system match your pocket-paying capacity?</li>
                    <li>Incorporation of the software actually reducing your workload or not?</li>
                </ol>
            </div>
        )
    }
];

const comparisonRows = [
    {
        feature: "Pricing for freelancers & home-based studios",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M6 12h.01M18 12h.01" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Branded website builder",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Local payment methods",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
        ),
        getEasy: true,
        vibefam: true,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Email, SMS & WhatsApp marketing",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
                <path d="M12 12L2.1 10a10.1 10.1 0 0 0 16.8 8.9z" />
                <path d="M12 12V22A10 10 0 0 0 22 12" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: true
    },
    {
        feature: "Court booking flow",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Bluetooth smart door lock",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Card transaction fee",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="5" x2="5" y2="19" />
                <circle cx="6.5" cy="6.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
        ),
        getEasyText: "Less than 2.5%",
        vibefamText: "More than 3%",
        mindbodyText: "More than 3%",
        glofoxText: "More than 3%",
        momenceText: "More than 3%"
    },
    {
        feature: "Direct QR Pay (0% transaction fee)",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Wallet payment",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    },
    {
        feature: "Live chat & video call support (No AI/bot)",
        icon: (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        ),
        getEasy: true,
        vibefam: false,
        mindbody: false,
        glofox: false,
        momence: false
    }
];

const Home = () => {
    // Customer Stories Container Dynamic Scroll Scale State & Ref
    const storiesSectionRef = React.useRef(null);
    const [storiesScale, setStoriesScale] = React.useState(0.70);
    const [isStoriesHovered, setIsStoriesHovered] = React.useState(false);
    const [playingVideoId, setPlayingVideoId] = React.useState(null);
    const [playingExpertVideoId, setPlayingExpertVideoId] = React.useState(null);
    const [openFaqIndex, setOpenFaqIndex] = React.useState(0);

    const toggleFaq = (index) => {
        setOpenFaqIndex(prevIndex => prevIndex === index ? null : index);
    };

    React.useEffect(() => {
        let ticking = false;

        const updateScale = () => {
            if (!storiesSectionRef.current) return;
            const rect = storiesSectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate distance of section center from viewport center
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
            const maxDistance = (windowHeight + rect.height) / 2;

            // Compute progress: 1 when section is centered in viewport, 0 when off-screen
            const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
            const smoothProgress = Math.sin(progress * (Math.PI / 2)); // Easing curve

            // Scale from 0.70 (off-screen/scrolling away) to 1.0 (fully centered)
            const scale = 0.70 + smoothProgress * 0.30;
            setStoriesScale(scale);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScale);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateScale(); // Initial execution

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    // Drag to scroll marquee states & refs
    const marqueeWrapperRef = React.useRef(null);
    const marqueeTrackRef = React.useRef(null);
    const [isMarqueeMouseDown, setIsMarqueeMouseDown] = React.useState(false);
    const [dragOffset, setDragOffset] = React.useState(0);
    const [animDelay, setAnimDelay] = React.useState(0);
    const startXRef = React.useRef(0);
    const initialTranslateXRef = React.useRef(0);
    const [hasMarqueeDragged, setHasMarqueeDragged] = React.useState(false);

    const handleMarqueeMouseDown = (e) => {
        setIsMarqueeMouseDown(true);
        setHasMarqueeDragged(false);
        const pageX = e.pageX || (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
        startXRef.current = pageX;

        if (marqueeTrackRef.current) {
            const computedStyle = window.getComputedStyle(marqueeTrackRef.current);
            const matrix = new WebKitCSSMatrix(computedStyle.transform);
            initialTranslateXRef.current = matrix.m41;
            setDragOffset(matrix.m41);
        }
    };

    const handleMarqueeMouseMove = (e) => {
        if (!isMarqueeMouseDown || !marqueeTrackRef.current) return;
        const pageX = e.pageX || (e.touches && e.touches[0] ? e.touches[0].pageX : 0);
        const deltaX = pageX - startXRef.current;

        if (Math.abs(deltaX) > 5) {
            setHasMarqueeDragged(true);
        }

        let newTranslate = initialTranslateXRef.current + deltaX;
        const halfWidth = marqueeTrackRef.current.scrollWidth / 2;

        if (halfWidth > 0) {
            while (newTranslate > 0) newTranslate -= halfWidth;
            while (newTranslate < -halfWidth) newTranslate += halfWidth;
        }

        setDragOffset(newTranslate);
    };

    const handleMarqueeMouseUp = () => {
        if (!isMarqueeMouseDown) return;
        setIsMarqueeMouseDown(false);

        if (marqueeTrackRef.current) {
            const halfWidth = marqueeTrackRef.current.scrollWidth / 2;
            if (halfWidth > 0) {
                const positiveOffset = Math.abs(dragOffset % halfWidth);
                const ratio = positiveOffset / halfWidth;
                const delay = -(ratio * 38);
                setAnimDelay(delay);
            }
        }
    };

    const handlePlayVideo = (videoId) => {
        if (hasMarqueeDragged) return; // Ignore click if dragging
        if (playingVideoId === videoId) {
            setPlayingVideoId(null);
        } else {
            setPlayingVideoId(videoId);
        }
    };

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

    const [activePointIndex, setActivePointIndex] = React.useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

    React.useEffect(() => {
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

    React.useEffect(() => {
        if (!isAutoPlaying) {
            const timeout = setTimeout(() => {
                setIsAutoPlaying(true);
            }, 5000);
            return () => clearTimeout(timeout);
        }
    }, [isAutoPlaying]);

    const [openAccordions, setOpenAccordions] = React.useState({ 0: 0, 1: 0, 2: 0 });

    const toggleAccordion = (blockIdx, itemIdx) => {
        setOpenAccordions(prev => ({
            ...prev,
            [blockIdx]: prev[blockIdx] === itemIdx ? -1 : itemIdx
        }));
    };

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

            {/* Trust & Marquee Section */}
            <section className="new-geteasy-trust-section">
                <div className="new-geteasy-trust-container">
                    {/* Left side: Heading & Ratings */}
                    <div className="new-geteasy-trust-left">
                        <h2 className="new-geteasy-trust-title">
                            Business Owners Love Us
                        </h2>
                        <div className="new-geteasy-trust-ratings">
                            <div className="new-geteasy-rating-badge">
                                <img src={capterraSvg} alt="Capterra" className="new-geteasy-rating-logo" />
                                <div className="new-geteasy-rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                            <div className="new-geteasy-rating-badge">
                                <img src={software} alt="Software Advice" className="new-geteasy-rating-logo" />
                                <div className="new-geteasy-rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                            <div className="new-geteasy-rating-badge">
                                <img src={source} alt="G2" className="new-geteasy-rating-logo" />
                                <div className="new-geteasy-rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                            <div className="new-geteasy-rating-badge">
                                <img src={saas} alt="G2" className="new-geteasy-rating-logo" />
                                <div className="new-geteasy-rating-stars">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Row 1 Brands, Row 2 Flags */}
                    <div className="new-geteasy-trust-right">
                        {/* Row 1: Brands Marquee */}
                        <div className="marquee-wrapper direction-left">
                            <div className="marquee-track">
                                <div className="marquee-content">
                                    {brands.map((brand, idx) => (
                                        <div key={idx} className="marquee-item brand-item">
                                            <img src={brand} alt={`Brand ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className="marquee-content" aria-hidden="true">
                                    {brands.map((brand, idx) => (
                                        <div key={idx} className="marquee-item brand-item">
                                            <img src={brand} alt={`Brand ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Row 2: Flags Marquee */}
                        <div className="marquee-wrapper direction-right">
                            <div className="marquee-track">
                                <div className="marquee-content">
                                    {flags.map((flag, idx) => (
                                        <div key={idx} className="marquee-item flag-item">
                                            <img src={flag} alt={`Flag ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <div className="marquee-content" aria-hidden="true">
                                    {flags.map((flag, idx) => (
                                        <div key={idx} className="marquee-item flag-item">
                                            <img src={flag} alt={`Flag ${idx + 1}`} />
                                        </div>
                                    ))}
                                </div>
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

            {/* Problem & Solutions Accordion Section */}
            <section className="problem-accordion-section">
                {/* Header Title & Description */}
                <FadeInUp delay="0.1s" className="problem-header-container">
                    <h2 className="problem-main-heading">
                        What Makes Get Easy Software the Best Choice
                    </h2>
                    <p className="problem-main-desc">
                        Latest WhatsApp and AI features, delivered at lightning-fast speed.
                    </p>
                </FadeInUp>

                {/* Banner Card */}
                <FadeInUp delay="0.2s" className="problem-banner-card">
                    <h3 className="problem-banner-title">
                        Run Your Business Operations <span className="banner-highlight">2X Smarter</span>
                    </h3>
                    <p className="problem-banner-sub">
                        Get Easy automates billing, staff attendance, and inventory so you can focus on clients, not paperwork.
                    </p>
                </FadeInUp>

                {/* Accordions and Images Container */}
                <div className="problem-accordion-container">
                    {problemBlocks.map((block, blockIdx) => (
                        <FadeInUp 
                            key={block.id} 
                            delay={`${blockIdx * 0.15}s`}
                            className={`problem-accordion-row ${block.isReverse ? 'reverse' : ''}`}
                        >
                            {/* Accordion Content Column */}
                            <div className="problem-content-col">
                                <h2 className="problem-section-title">
                                    <span className="highlight">{block.titlePrefix}</span> {block.titleRest}
                                </h2>

                                <div className="problem-accordion-group">
                                    {block.items.map((item, itemIdx) => {
                                        const isOpen = openAccordions[blockIdx] === itemIdx;
                                        return (
                                            <div 
                                                key={itemIdx} 
                                                className={`problem-accordion-item ${isOpen ? 'active' : ''}`}
                                            >
                                                <div 
                                                    className="problem-accordion-header"
                                                    onClick={() => toggleAccordion(blockIdx, itemIdx)}
                                                >
                                                    <span className="problem-accordion-title">{item.question}</span>
                                                    <FontAwesomeIcon 
                                                        icon={faChevronDown} 
                                                        className="problem-accordion-icon" 
                                                    />
                                                </div>
                                                {isOpen && (
                                                    <div className="problem-accordion-body">
                                                        <p><span style={{fontWeight: 'bold', color: '#23b859ff'}}>Solution:</span> {item.answer}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="problem-image-col">
                                <div className="problem-image-card">
                                    <img src={block.image} alt={block.imageAlt} />
                                </div>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </section>
        {/* Customer Stories Section with Dynamic Scroll Scaling Container & Video Marquee */}
            <section className="customer-stories-section" ref={storiesSectionRef}>
                <div 
                    className="customer-stories-container"
                    style={{
                        transform: `scale(${storiesScale.toFixed(3)})`,
                        width: `${(70 + (storiesScale - 0.70) * 100).toFixed(2)}%`,
                        borderRadius: `${Math.round(56 - (storiesScale - 0.70) * 90)}px`
                    }}
                >
                    {/* Header */}
                    <div className="customer-stories-header">
                        <h2 className="customer-stories-title">
                            Our Highlights
                        </h2>
                    </div>

                    {/* Video Cards Marquee */}
                    <div 
                        ref={marqueeWrapperRef}
                        className={`stories-marquee-wrapper ${isMarqueeMouseDown ? 'grabbing' : ''}`}
                        onMouseEnter={() => setIsStoriesHovered(true)}
                        onMouseLeave={() => {
                            setIsStoriesHovered(false);
                            if (isMarqueeMouseDown) handleMarqueeMouseUp();
                        }}
                        onMouseDown={handleMarqueeMouseDown}
                        onMouseMove={handleMarqueeMouseMove}
                        onMouseUp={handleMarqueeMouseUp}
                        onTouchStart={handleMarqueeMouseDown}
                        onTouchMove={handleMarqueeMouseMove}
                        onTouchEnd={handleMarqueeMouseUp}
                    >
                        <div 
                            ref={marqueeTrackRef}
                            className={`stories-marquee-track ${isStoriesHovered || isMarqueeMouseDown || playingVideoId !== null ? 'paused' : ''}`}
                            style={isMarqueeMouseDown ? {
                                transform: `translateX(${dragOffset.toFixed(2)}px)`,
                                animation: 'none'
                            } : {
                                animationDelay: `${animDelay.toFixed(2)}s`
                            }}
                        >
                            {/* Duplicate array for seamless infinite looping */}
                            {[...customerVideos, ...customerVideos].map((video, idx) => {
                                const isPlaying = playingVideoId === video.id;
                                return (
                                    <div key={`${video.id}-${idx}`} className="story-card-item">
                                        <div className="story-video-container">
                                            {isPlaying ? (
                                                <div className="story-video-iframe-wrapper">
                                                    <iframe
                                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&enablejsapi=1`}
                                                        title={video.name}
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen
                                                        className="story-youtube-iframe"
                                                    ></iframe>
                                                    <button 
                                                        className="story-close-video-btn" 
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setPlayingVideoId(null);
                                                        }}
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            ) : (
                                                <div 
                                                    className="story-video-poster" 
                                                    onClick={() => handlePlayVideo(video.id)}
                                                >
                                                    <img 
                                                        src={video.thumbnail} 
                                                        alt={video.name} 
                                                        className="story-video-thumb" 
                                                    />
                                                    <div className="story-play-btn">
                                                        <FontAwesomeIcon icon={faPlay} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="story-card-name">{video.name}</h3>
                                        <p className="story-card-business">{video.business}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            {/* Geteasy Stats Section */}
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
                                <img src={salon1} className="avatar av-1" alt="Salon Client 1" />
                                <img src={salon2} className="avatar av-2" alt="Salon Client 2" />
                                <img src={salon3} className="avatar av-3" alt="Salon Client 3" />
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

            {/* Geteasy Features Section (Bento Grid) */}
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
                                <img src={accessAutomationVideo} className="feature-img" />
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
            {/* Comparison Table Section */}
            <section className="comparison-table-section">
                <div className="comparison-table-container">
                    
                    {/* Header */}
                    <FadeInUp delay="0.1s" className="comparison-header">
                        <h2 className="comparison-title">
                            <span className="brand-highlight">Get Easy Software</span> vs. the Rest
                        </h2>
                        <p className="comparison-subtitle">
                            Thousands have moved from other platforms to <strong>Get Easy Software</strong> for one reason: <strong>everything you need, in one place.</strong>
                        </p>
                    </FadeInUp>

                    {/* Scrollable Container for Mobile */}
                    <FadeInUp delay="0.25s" className="comparison-table-scroll-wrapper">
                        <div className="comparison-table-grid">
                            
                            {/* Header Cells */}
                            <div className="comparison-cell-header feature-head">Platform features</div>
                            <div className="comparison-cell-header highlight-head">
                                <div className="geteasy-pill-logo">
                                    <svg className="easy-ai-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '24px' }}>
                                        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#compAtomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(-30 12 12)"></ellipse>
                                        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#compAtomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(30 12 12)"></ellipse>
                                        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="url(#compAtomGrad)" strokeWidth="1.2" strokeOpacity="0.5" transform="rotate(90 12 12)"></ellipse>
                                        <circle cx="12" cy="12" r="2" fill="url(#compAtomGrad)"></circle>
                                        <g transform="rotate(-30 12 12)">
                                            <circle r="1.2" fill="url(#compAtomGrad)">
                                                <animateMotion dur="3s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12"></animateMotion>
                                            </circle>
                                        </g>
                                        <g transform="rotate(30 12 12)">
                                            <circle r="1.2" fill="url(#compAtomGrad)">
                                                <animateMotion dur="4s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="1s"></animateMotion>
                                            </circle>
                                        </g>
                                        <g transform="rotate(90 12 12)">
                                            <circle r="1.2" fill="url(#compAtomGrad)">
                                                <animateMotion dur="3.5s" repeatCount="indefinite" path="M21,12 A9,3.5 0 1,1 3,12 A9,3.5 0 1,1 21,12" begin="0.5s"></animateMotion>
                                            </circle>
                                        </g>
                                        <defs>
                                            <linearGradient id="compAtomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#fe6527"></stop>
                                                <stop offset="100%" stopColor="#fe905f"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span>Get Easy</span>
                                </div>
                            </div>
                            <div className="comparison-cell-header">Vibefam</div>
                            <div className="comparison-cell-header">Mindbody</div>
                            <div className="comparison-cell-header">Glofox</div>
                            <div className="comparison-cell-header">Momence</div>

                            {/* Body Rows */}
                            {comparisonRows.map((row, idx) => {
                                const isLast = idx === comparisonRows.length - 1;
                                return (
                                    <React.Fragment key={idx}>
                                        {/* Feature Title & Icon */}
                                        <div className="comparison-cell-body feature-body">
                                            <div className="feature-icon-box">
                                                {row.icon}
                                            </div>
                                            <span className="feature-title-text">{row.feature}</span>
                                        </div>

                                        {/* Get Easy Software Highlighted Column */}
                                        <div className={`comparison-cell-body highlight-body ${isLast ? 'last-row' : ''}`}>
                                            {row.getEasyText ? (
                                                <span className="highlight-text">{row.getEasyText}</span>
                                            ) : (
                                                <span className="comparison-check-icon">
                                                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="url(#themeCheckGradComp)" />
                                                        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <defs>
                                                            <linearGradient id="themeCheckGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
                                                                <stop offset="0%" stopColor="#fe6527" />
                                                                <stop offset="100%" stopColor="#fe905f" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>
                                                </span>
                                            )}
                                        </div>

                                        {/* Vibefam */}
                                        <div className="comparison-cell-body">
                                            {row.vibefamText ? (
                                                <span className="competitor-text">{row.vibefamText}</span>
                                            ) : row.vibefam ? (
                                                <span className="comparison-check-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="url(#themeCheckGradComp)" />
                                                        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span className="comparison-cross-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="#cbd5e1" />
                                                        <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>

                                        {/* Mindbody */}
                                        <div className="comparison-cell-body">
                                            {row.mindbodyText ? (
                                                <span className="competitor-text">{row.mindbodyText}</span>
                                            ) : row.mindbody ? (
                                                <span className="comparison-check-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="url(#themeCheckGradComp)" />
                                                        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span className="comparison-cross-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="#cbd5e1" />
                                                        <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>

                                        {/* Glofox */}
                                        <div className="comparison-cell-body">
                                            {row.glofoxText ? (
                                                <span className="competitor-text">{row.glofoxText}</span>
                                            ) : row.glofox ? (
                                                <span className="comparison-check-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="url(#themeCheckGradComp)" />
                                                        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span className="comparison-cross-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="#cbd5e1" />
                                                        <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>

                                        {/* Momence */}
                                        <div className="comparison-cell-body">
                                            {row.momenceText ? (
                                                <span className="competitor-text">{row.momenceText}</span>
                                            ) : row.momence ? (
                                                <span className="comparison-check-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="url(#themeCheckGradComp)" />
                                                        <path d="M7 12.5L10.5 16L17 8.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <span className="comparison-cross-icon">
                                                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                                                        <circle cx="12" cy="12" r="11" fill="#cbd5e1" />
                                                        <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            )}
                                        </div>
                                    </React.Fragment>
                                );
                            })}

                        </div>
                    </FadeInUp>

                </div>
            </section>
            {/* Industry Expert Section */}
            <section className="industry-expert-section">
                <div className="industry-expert-container">
                    
                    {/* Section Header */}
                    <FadeInUp delay="0.1s" className="industry-expert-header">
                        <span className="industry-expert-pill">TRUSTED & VERIFIED BY</span>
                        <h2 className="industry-expert-title">
                            Industry <span className="expert-gradient-text">Expert</span>
                        </h2>
                    </FadeInUp>

                    {/* Outer Box Frame */}
                    <FadeInUp delay="0.25s" className="industry-expert-card-frame">
                        
                        {/* Row 1: Vivek Shyam Bhatia */}
                        <div className="expert-card-row">
                            <div className="expert-media-col expert-media-purple">
                                <div className="expert-video-wrapper">
                                    {playingExpertVideoId === 'ZT_EmiJgmLM' ? (
                                        <iframe
                                            className="expert-video-iframe"
                                            src="https://www.youtube.com/embed/ZT_EmiJgmLM?autoplay=1"
                                            title="Neeldavid Salon"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <div 
                                            className="expert-poster-container"
                                            onClick={() => setPlayingExpertVideoId('ZT_EmiJgmLM')}
                                        >
                                            <img src={thumbnail1} alt="Neeldavid Salon" className="expert-poster-img" />
                                            <div className="expert-play-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="expert-content-col">
                                <div className="expert-insta-handle">
                                    <svg className="insta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                    <span>neeldavids_amritsar</span>
                                    <svg className="verified-badge-icon" viewBox="0 0 24 24" fill="#1DA1F2">
                                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.475 9.55.6 10.92.6 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.05 1.273 2.42 2.148 4 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.05 2.148-2.42 2.148-4zM9.8 17.3l-4.2-4.2 1.4-1.4 2.8 2.8 7.4-7.4 1.4 1.4-8.8 8.8z"/>
                                    </svg>
                                </div>
                                <h3 className="expert-name">Neeldavid Salon</h3>
                                <p className="expert-description">
                                    Using <strong>Geteasy salon software</strong>, Neeldavid Salon <strong>automated 80% of operations</strong>, <strong>cut admin time by 40%</strong>, and <strong>achieved a 41% jump in revenue</strong> under Neeldavid Salon leadership.
                                </p>
                            </div>
                        </div>

                        {/* Row 2: Vaishakhi Haria */}
                        <div className="expert-card-row expert-row-reverse">
                            <div className="expert-content-col">
                                <div className="expert-insta-handle">
                                    <svg className="insta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                    <span>aarushimakeupartist</span>
                                    <svg className="verified-badge-icon" viewBox="0 0 24 24" fill="#1DA1F2">
                                        <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.475 9.55.6 10.92.6 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238 1.05 1.273 2.42 2.148 4 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-1.05 2.148-2.42 2.148-4zM9.8 17.3l-4.2-4.2 1.4-1.4 2.8 2.8 7.4-7.4 1.4 1.4-8.8 8.8z"/>
                                    </svg>
                                </div>
                                <h3 className="expert-name">Aarushi Oswal</h3>
                                <p className="expert-description">
                                    With Geteasy, Aarushi Oswal's Splash Salons scaled multiple branches effortlessly <strong>cutting admin work by 50%</strong>, <strong>boosting repeat clients 62%</strong>, <strong>increasing retail sales 40%</strong>, and <strong>achieving 48% overall</strong> revenue growth.
                                </p>
                            </div>

                            <div className="expert-media-col expert-media-cyan">
                                <div className="expert-video-wrapper">
                                    {playingExpertVideoId === 'HGsPkxa9nLI' ? (
                                        <iframe
                                            className="expert-video-iframe"
                                            src="https://www.youtube.com/embed/HGsPkxa9nLI?autoplay=1"
                                            title="Vaishakhi Haria Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <div 
                                            className="expert-poster-container"
                                            onClick={() => setPlayingExpertVideoId('HGsPkxa9nLI')}
                                        >
                                            <img src={thumbnail2} alt="Vaishakhi Haria" className="expert-poster-img" />
                                            <div className="expert-play-btn">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                    </FadeInUp>

                </div>
            </section>

            {/* Review Section */}
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

            {/* Software Categories Section */}
            <section className="software-category-section">
                <div className="software-category-container">
                    
                    <div className="software-category-header">
                        <h2 className="software-category-title">Software Built For Your Industry</h2>
                        <p className="software-category-subtitle">
                            Discover specialized features tailored specifically to optimize operations for your business category.
                        </p>
                    </div>

                    <div className="software-category-grid">
                        {softwareCategories.map((cat, idx) => (
                            <FadeInUp key={idx} delay={`${(idx % 5) * 0.08}s`}>
                                <div className="category-card">
                                    <div className="category-icon-wrapper">
                                        <img src={cat.icon} alt={cat.name} className="category-img-icon" />
                                    </div>
                                    <h3 className="category-card-name">{cat.name}</h3>
                                    <p className="category-card-desc">{cat.description}</p>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>

                </div>
            </section>

            {/* Home FAQ Section */}
            <section className="home-faq-section">
                <div className="home-faq-wrapper">
                    
                    {/* Header */}
                    <FadeInUp delay="0.1s" className="home-faq-header">
                        <span className="home-faq-pill">GOT QUESTIONS?</span>
                        <h2 className="home-faq-title">Frequently Asked Questions</h2>
                        <p className="home-faq-subtitle">
                            Everything you need to know about Geteasy software, pricing, and benefits for your business.
                        </p>
                    </FadeInUp>

                    {/* Accordion List */}
                    <div className="home-faq-list">
                        {faqData.map((faq, idx) => {
                            const isOpen = openFaqIndex === idx;
                            return (
                                <FadeInUp 
                                    key={idx} 
                                    delay={`${idx * 0.08}s`}
                                    className={`home-faq-item ${isOpen ? 'active' : ''}`}
                                >
                                    <button 
                                        className="home-faq-question"
                                        onClick={() => toggleFaq(idx)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <div className="home-faq-chevron">
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </button>

                                    <div className="home-faq-answer-wrapper">
                                        <div className="home-faq-answer-inner">
                                            <div className="home-faq-answer-body">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </FadeInUp>
                            );
                        })}
                    </div>

                </div>
            </section>

       

        </>
    );
};

export default Home;