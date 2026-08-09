import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FlaskConical, Building2, Droplets, FileDown, MessageSquare, TestTube2, FileText, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../assets/microtech collidal silica.png';
import advantageImg1 from '../assets/sterling chemical microtech series.png';
import advantageImg2 from '../assets/Advanced pH Stabilization.png';
import advantageImg3 from '../assets/Batch-to-Batch Homogeneity.png';
import advantageImg4 from '../assets/Strategic Global Fulfilment.png';
// import heroImage from '../assets/sterling chemical microtech series.png';
import WhatsAppButton from '../components/WhatsAppButton';
import microtecBrochure from '../assets/Microtec Product Introduction.pdf';
import TechnicalConsultationModal from '../components/TechnicalConsultationModal';



const Product2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollIndex, setScrollIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward
    const [isModalOpen, setIsModalOpen] = useState(false);


    const advantages = [
        {
            title: "Morphological Precision",
            description: "We offer meticulous control over particle size distribution and specific surface area to ensure the silica provides an optimal high-density packing fraction for your specific application.",
            image: advantageImg1
        },
        {
            title: "Advanced pH Stabilization",
            description: "Meticulous control over the pH of our sols to ensure long-term shelf-life. We engineer the counter-ion balance to prevent premature gelation in both alkaline and acidic grades.",
            image: advantageImg2
        },
        {
            title: "Batch-to-Batch Homogeneity",
            description: "Our ISO 9001:2015 certified manufacturing ensures 100% uniformity in concentration, pH, and particle dispersion across every single shipment.",
            image: advantageImg3
        },
        {
            title: "Strategic Global Fulfilment",
            description: "Leveraging proximity to Hazira and Nhava Sheva ports, we maintain a rapid 7-day global dispatch timeline from our Gujarat facility to international markets.",
            image: advantageImg4
        }
    ];

    const applicationTable = [
        {
            sector: "Paper & Textile Manufacturing",
            icon: <FileText className="w-6 h-6" />,
            function: "Specialized nano-microstructures designed to optimize retention efficiency in paper and improve the surface quality of advanced textile coatings."
        },
        {
            sector: "Paints & Specialty Coatings",
            icon: <Droplets className="w-6 h-6" />,
            function: "Precision-engineered as a high-performance binder and surface modifier to enhance scratch resistance and improve pigment dispersion."
        },
        {
            sector: "High-Performance Concrete",
            icon: <Building2 className="w-6 h-6" />,
            function: "Nano-pore densification that reinforces the capillary structure of concrete to increase structural durability and resistance in extreme environments."
        },
        {
            sector: "Specialty Catalysts",
            icon: <FlaskConical className="w-6 h-6" />,
            function: "Precise manipulation of surface area and stabilization chemistry to ensure optimized chemical reactivity in complex catalytic systems."
        },
        {
            sector: "Investment Casting & Refractories",
            icon: <Building2 className="w-6 h-6" />,
            function: "High-stability binders engineered to maintain structural cohesion under extreme thermal stress, preventing shell failures."
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-scroll cards horizontally one by one every 5s on mobile, with reverse effect
    useEffect(() => {
        if (!isMobile) return;
        const timer = setInterval(() => {
            setScrollIndex(prev => {
                if (scrollDirection === 1) {
                    if (prev < applicationTable.length - 1) {
                        return prev + 1;
                    } else {
                        setScrollDirection(-1);
                        return prev - 1;
                    }
                } else {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        setScrollDirection(1);
                        return prev + 1;
                    }
                }
            });
        }, 5000);
        return () => clearInterval(timer);
    }, [isMobile, applicationTable.length, scrollDirection]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sync activeTab with scrollIndex
    useEffect(() => {
        setActiveTab(scrollIndex);
    }, [scrollIndex]);

    const scrollContainerRef = React.useRef(null);

    useEffect(() => {
        if (scrollContainerRef.current) {
            const btn = scrollContainerRef.current.children[activeTab];
            if (btn) {
                const container = scrollContainerRef.current;
                // Calculate center position
                const scrollLeft = btn.offsetLeft - (container.clientWidth / 2) + (btn.clientWidth / 2);
                container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        }
    }, [activeTab]);

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-secondary-50 text-secondary-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex items-center justify-center w-full h-[70vh] min-h-[550px] overflow-hidden bg-secondary-950">
                {/* Hero Image Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src={heroImage}
                        alt="Microtec Colloidal Silica"
                        className="object-cover w-full h-full opacity-20"
                    />
                </div>

                {/* Background Animated Elements - Subtle Glows */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full filter blur-[100px] opacity-[0.15]"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                            }}
                            animate={{
                                y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) * -1],
                                x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) + 100],
                            }}
                            transition={{
                                duration: Math.random() * 20 + 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                width: Math.random() * 500 + 200 + 'px',
                                height: Math.random() * 500 + 200 + 'px',
                                background: i % 2 === 0 ? 'var(--color-primary-500)' : 'var(--color-accent-500)',
                            }}
                        />
                    ))}
                </div>
                <div className="relative z-10 flex flex-col items-center px-4 pt-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] max-w-3xl mx-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 via-accent-300 to-primary-400 animate-gradient-x">
                            Microtec Colloidal Silica Sols
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >

                        Manufactured in Gujarat, India — with precise control over particle size, pH, and concentration for industries where consistency is non-negotiable.   </motion.p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="mb-8 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            The Microtec <span className="text-transparent bg-clip-text bg-primary">Advantage</span>
                        </h2>
                        <div className="flex flex-col items-center">
                            <h3 className="text-[20px] lg:text-[24px] font-semibold text-secondary-900 mb-4">
                                Technical Mastery of the Colloidal State.
                            </h3>
                            <p className="text-[16px] lg:text-[18px] leading-relaxed text-secondary-600 max-w-2xl">
                                The Microtec Series is defined by chemical agility and a commitment to solving complex industrial challenges through high-purity, nano-scale solutions.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        {advantages.map((adv, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className={`flex flex-col items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className="w-full md:w-1/2">
                                    <img
                                        src={adv.image}
                                        alt={adv.title}
                                        className="object-cover w-full h-56 shadow-lg rounded-3xl md:h-64"
                                    />
                                </div>
                                <div className="w-full text-left md:w-1/2">
                                    <h3 className="text-[24px] font-bold text-secondary-900 mb-4">{adv.title}</h3>
                                    <p className="text-[18px] text-secondary-600 leading-relaxed">{adv.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Cards Section */}
            <section className="py-24 bg-[#f1f5f8]">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto mb-12 text-center">
                        <h2 className="mb-8 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Versatile High-<span className="text-transparent bg-clip-text bg-primary">Stakes Applications</span>
                        </h2>
                        <p className="text-[18px] leading-relaxed text-secondary-600 max-w-3xl mx-auto">
                            The Microtec Series is engineered to perform as a critical technical component in high-stakes industrial processes where binder stability and nano-scale reinforcement are essential.
                        </p>
                    </div>

                    {/* Mobile View: Simple & Elegant Segmented View */}
                    <div className="lg:hidden">
                        {/* Pill Navigator with sector titles */}
                        <div
                            className="flex gap-3 px-4 pb-4 mb-4 -mx-4 overflow-x-auto no-scrollbar"
                            style={{ scrollbarWidth: 'none' }}
                            ref={scrollContainerRef}
                        >
                            {applicationTable.map((row, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setScrollIndex(index);
                                        setActiveTab(index);
                                    }}
                                    className={`shrink-0 px-6 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 border
                                        ${activeTab === index
                                            ? 'bg-primary border-primary text-white shadow-md'
                                            : 'bg-white border-secondary-200 text-secondary-600 hover:border-primary/50'}`}
                                >
                                    {row.sector}
                                </button>
                            ))}
                        </div>
                        {/* Auto-scrolling horizontally for application cards on mobile */}
                        <div className="relative pt-6 overflow-hidden">
                            <div
                                className="flex transition-transform duration-700"
                                style={{
                                    transform: isMobile
                                        ? `translateX(-${scrollIndex * 100}%)`
                                        : 'none',
                                }}
                            >
                                {applicationTable.map((row, index) => (
                                    <div key={index} className="w-full px-4 shrink-0">
                                        <div className="w-full p-8 bg-white border-2 shadow-sm border-secondary-100 rounded-4xl">
                                            <div className="flex items-center justify-center gap-3 mb-6 text-center">

                                                <h3 className="text-[20px] font-bold text-secondary-900 tracking-tight">
                                                    {row.sector}
                                                </h3>
                                            </div>
                                            <p className="text-secondary-600 text-[16px] leading-relaxed mb-8 text-center px-2">
                                                {row.function}
                                            </p>
                                            <div className="flex items-center justify-between pt-6 border-t border-secondary-50">
                                                <span className="text-[11px] font-bold text-secondary-400 uppercase tracking-widest">
                                                    Microtec Series
                                                </span>
                                                <div className="flex gap-1">
                                                    {[...Array(applicationTable.length)].map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-primary' : 'bg-secondary-200'}`}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop View: Modern Card System - Tiered Centered Layout (3+2) */}
                    <div className="flex-wrap justify-center hidden gap-8 pb-4 mx-auto lg:flex max-w-7xl">
                        {applicationTable.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-10 pb-5 overflow-hidden transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-3xl hover:border-primary/50 hover:shadow-lg group flex flex-col w-full lg:w-[calc(33.333%-2rem)] min-h-80"
                            >
                                <h3 className="relative z-10 text-[20px] font-bold text-secondary-900 leading-snug mb-6 transition-colors group-hover:text-primary-700">
                                    {row.sector}
                                </h3>
                                <p className="relative z-10 text-[18px] leading-relaxed text-secondary-600 grow">
                                    {row.function}
                                </p>
                                <div className="absolute pointer-events-none select-none right-4 bottom-4 text-secondary-100 opacity-90">
                                    {React.cloneElement(row.icon, { className: 'w-24 h-24' })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="py-24 bg-white border-t border-secondary-100">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-8 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Technical Consultation & <span className="text-transparent bg-clip-text bg-primary">Resources</span>
                        </h2>
                        <p className="mb-16 text-[18px] text-secondary-600">
                            We invite global procurement and technical teams to validate the stability and performance of our Microtec Series.
                        </p>

                        <div className="grid gap-6 md:grid-cols-3">
                            <a
                                href={microtecBrochure}
                                download="Microtec_Product_Introduction.pdf"
                                className="flex flex-col items-center justify-center p-6 transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                            >
                                <FileDown strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                                <span className="font-semibold text-[18px] text-secondary-900 min-h-[3rem] flex items-start justify-center text-center">Download Microtec Series Brochure</span>
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex flex-col items-center justify-center p-6 transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                            >
                                <MessageSquare strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                                <span className="font-semibold text-[18px] text-secondary-900 min-h-[3rem] flex items-start justify-center text-center">Request a Technical Consultation</span>
                            </button>

                            <Link
                                to="/contact#contact-form"
                                className="flex flex-col items-center justify-center p-6 transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                            >
                                <Phone strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                                <span className="font-semibold text-[18px] text-secondary-900 min-h-[3rem] flex items-start justify-center text-center">Contact Us</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
            <TechnicalConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                category="colloidal-silica"
            />

            <Footer />
        </div>
    );
};


export default Product2;
