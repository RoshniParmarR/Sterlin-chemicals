import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Droplets, Flame, Waves, Leaf, FileText, FileDown, MessageSquare, TestTube2, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../assets/Calcium Nitrate Crystals closeup.jpg';
import advantageImg1 from '../assets/Proprietary Purification System.png';
import advantageImg2 from '../assets/Engineered Consistency.png';
import advantageImg3 from '../assets/product3img.png';
import advantageImg4 from '../assets/Strategic Logistics.png';
import WhatsAppButton from '../components/WhatsAppButton';
import TechnicalConsultationModal from '../components/TechnicalConsultationModal';
import diamondBrochure from '../assets/Diamond Product Brochure.pdf';

const Product1 = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);
    const [isMdOnly, setIsMdOnly] = React.useState(false);
    const [scrollDirection, setScrollDirection] = React.useState(1); // 1 for forward, -1 for backward
    const [isModalOpen, setIsModalOpen] = React.useState(false);


    const advantages = [
        {
            title: "Proprietary Purification System",
            description: "We utilize a multi-stage refining process to achieve 0% organic impurities. This prevents the staining, pinholes, and process failures commonly associated with standard-grade imports.",
            image: advantageImg1
        },
        {
            title: "Engineered Consistency",
            description: "We don't just ship products; we solve operational challenges by ensuring 100% batch-to-batch consistency. This reliability allows our partners to scale their operations without the risk of chemical variance.",
            image: advantageImg2
        },
        {
            title: "Scalable Industrial Output",
            description: "Our production infrastructure in Ankleshwar is built for high-precision, large-scale industrial demand, ensuring a stable and secure supply chain for global partners.",
            image: advantageImg3
        },
        {
            title: "Strategic Logistics",
            description: "Our proximity to Hazira and Nhava Sheva ports allows for a 7-Day Global Dispatch timeline, providing rapid fulfilment that bridges the gap between India and international markets.",
            image: advantageImg4
        }
    ];

    const applications = [
        { name: "Latex & Dipped Goods", icon: <Waves className="w-5 h-5" />, desc: "High-efficiency coagulation for defect-free surfaces." },
        { name: "High-Performance Construction", icon: <Building2 className="w-5 h-5" />, desc: "Precision set acceleration and durability enhancement for concrete." },
        { name: "Oil & Gas", icon: <Droplets className="w-5 h-5" />, desc: "Advanced H2S & Odor Management" },
        { name: "Industrial Explosives", icon: <Flame className="w-5 h-5" />, desc: "Acting as a high-grade oxidizing agent." },
        { name: "Wastewater & Environmental Treatment", icon: <Leaf className="w-5 h-5" />, desc: "Advanced biological odor control and infrastructure corrosion prevention." }
    ];

    React.useEffect(() => {
        const checkMobile = () => {
            const w = window.innerWidth;
            setIsMobile(w < 768);
            setIsMdOnly(w >= 768 && w < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Determine cards per view and dot count for lg+ screens
    const isLg = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
    const cardsPerView = typeof window !== 'undefined' ? (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3) : 3;
    const dotCount = isLg ? 3 : applications.length - (cardsPerView - 1);

    React.useEffect(() => {
        let timer;
        if (isMobile) {
            // Mobile: auto-slide one by one, reverse at ends
            const maxIndex = applications.length - 1;
            timer = setInterval(() => {
                setCurrentIndex(prevIndex => {
                    if (scrollDirection === 1) {
                        if (prevIndex < maxIndex) {
                            return prevIndex + 1;
                        } else {
                            setScrollDirection(-1);
                            return prevIndex - 1;
                        }
                    } else {
                        if (prevIndex > 0) {
                            return prevIndex - 1;
                        } else {
                            setScrollDirection(1);
                            return prevIndex + 1;
                        }
                    }
                });
            }, 5000);
        } else if (isMdOnly) {
            // Tablet: auto-slide showing 2 per view, reverse at ends
            const maxIndex = applications.length - 2;
            timer = setInterval(() => {
                setCurrentIndex(prevIndex => {
                    if (scrollDirection === 1) {
                        if (prevIndex < maxIndex) {
                            return prevIndex + 1;
                        } else {
                            setScrollDirection(-1);
                            return prevIndex - 1;
                        }
                    } else {
                        if (prevIndex > 0) {
                            return prevIndex - 1;
                        } else {
                            setScrollDirection(1);
                            return prevIndex + 1;
                        }
                    }
                });
            }, 5000);
        } else if (isLg) {
            // LG+: auto-slide 3-dot pagination, reverse at ends
            timer = setInterval(() => {
                setCurrentIndex(prevIndex => {
                    if (scrollDirection === 1) {
                        if (prevIndex < 2) {
                            return prevIndex + 1;
                        } else {
                            setScrollDirection(-1);
                            return prevIndex - 1;
                        }
                    } else {
                        if (prevIndex > 0) {
                            return prevIndex - 1;
                        } else {
                            setScrollDirection(1);
                            return prevIndex + 1;
                        }
                    }
                });
            }, 5000);
        }
        return () => timer && clearInterval(timer);
    }, [isMobile, isMdOnly, isLg, applications.length, scrollDirection]);

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-secondary-50 text-secondary-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex items-center justify-center w-full h-[70vh] min-h-[550px] overflow-hidden bg-secondary-950">
                {/* Hero Image Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src={heroImage}
                        alt="Calcium Nitrate Tetrahydrate"
                        className="object-cover w-full h-full opacity-20"
                    />
                    {/* Dark Overlay for Text Readability */}
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/40 via-secondary-950/20 to-secondary-950/40"></div> */}
                    {/* <div className="absolute inset-0 bg-secondary-900/20"></div> */}
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
                            High-Purity Calcium Nitrate Tetrahydrate
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >
                        Sterlin Chemicals manufactures Ca(NO₃)₂·4H₂O under our Diamond brand — precision-engineered to eliminate contamination and inconsistent reactivity that commodity-grade products can't avoid.
                    </motion.p>
                </div>

            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="mb-8 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            The Diamond Advantage <span className="text-transparent bg-clip-text bg-primary"> Beyond the Commodity</span>
                        </h2>
                        <p className="text-[18px] leading-relaxed text-secondary-600 mb-10">
                            In a market dominated by generic suppliers, Sterlin Chemicals stands apart through a commitment to technical leadership and purity that "off-the-shelf" products cannot match
                        </p>
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

            {/* Applications Slider Section */}
            <section className="py-24  overflow-hidden bg-[#f1f5f8]">
                <div className="container px-4 mx-auto lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col items-center gap-8 mb-12 text-center">
                            <div className="max-w-4xl">
                                <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1] mb-6">
                                    Versatile High-<span className="text-primary">Stakes Applications</span>
                                </h2>
                                <p className="text-secondary-600 text-[18px] max-w-2xl mx-auto">
                                    Our Calcium Nitrate is engineered to perform as a critical technical component in high-stakes industrial processes worldwide.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="p-4 -m-4 overflow-hidden">
                                <motion.div
                                    className="flex gap-8"
                                    animate={{ x: isMobile ? `calc(-${currentIndex * 100}% - ${currentIndex * 32}px)` : isMdOnly ? `calc(-${currentIndex * 50}% - ${currentIndex * 32}px)` : `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 21.33}px)` }}
                                    transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }} // Slower, premium easing
                                >
                                    {applications.map((app, index) => (
                                        <div
                                            key={index}
                                            className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-21.33px)] shrink-0"
                                        >
                                            <motion.div
                                                {...(isMobile
                                                    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
                                                    : {
                                                        initial: { opacity: 0 },
                                                        whileInView: { opacity: 1 },
                                                        viewport: { once: true },
                                                        transition: { delay: index * 0.1 }
                                                    }
                                                )}
                                                className="relative h-full p-10 overflow-hidden transition-all duration-500 bg-white border shadow-sm border-secondary-200 rounded-3xl hover:shadow-sm hover:border-primary/50 group"
                                            >
                                                <h3 className="relative z-10 text-[20px] font-bold text-secondary-900 mb-4 transition-colors group-hover:text-primary-700 min-h-[3.5rem] flex items-start">{app.name}</h3>
                                                <p className="relative z-10 text-secondary-600 text-[18px] leading-relaxed">{app.desc}</p>
                                                <div className="absolute pointer-events-none select-none right-4 bottom-4 text-secondary-100 opacity-90">
                                                    {React.cloneElement(app.icon, { className: "w-24 h-24" })}
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-3 mt-16">
                            {Array.from({ length: dotCount }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 transition-all duration-500 rounded-full cursor-pointer
                                        ${currentIndex === index ? 'w-10 bg-primary' : 'w-2 bg-secondary-200 hover:bg-secondary-400'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Available Formats */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-8 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Available <span className="text-transparent bg-clip-text bg-primary">Formats</span>

                        </h2>
                        <p className="mb-12 text-[18px] text-secondary-600">
                            We provide Calcium Nitrate in both Crystalline and Aqueous forms to suit your specific operational environment. Every batch is produced under strict ISO 9001:2015 quality protocols.
                        </p>
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="p-10 transition-colors border-2 bg-[#2a7baa] border-[#2a7baa] rounded-3xl hover:border-black">
                                <h3 className="mb-4 text-[20px] font-bold text-white">Crystalline</h3>
                                <p className="text-[18px] text-primary-100">High-purity solid crystals for precise batching and specialized industrial formulations.</p>
                            </div>
                            <div className="p-10 transition-colors border-2 bg-[#2a7baa] border-[#2a7baa] rounded-3xl hover:border-black">
                                <h3 className="mb-4 text-[20px] font-bold text-white">Aqueous Solution</h3>
                                <p className="text-[18px] text-primary-100">Pre-dissolved, high-concentration liquid solution for seamless integration into continuous process lines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources & Consultation */}
            <section className="py-20 bg-[#f1f5f8]">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="mb-6 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Technical Consultation & <span className="text-transparent bg-clip-text bg-primary">Resources</span>
                        </h2>
                        <p className="mb-12 text-[18px] text-secondary-600">
                            We invite procurement and technical teams to validate our specifications through laboratory testing and plant trials.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-3">
                            <a
                                href={diamondBrochure}
                                download="Diamond_Product_Brochure.pdf"
                                className="flex flex-col items-center justify-center p-6 transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                            >
                                <FileDown strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                                <span className="font-semibold text-[18px] text-secondary-900 min-h-[3rem] flex items-start justify-center text-center">Download Diamond Series Brochure</span>
                            </a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="flex flex-col items-center justify-center p-6 transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                            >
                                <MessageSquare strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                                <span className="font-semibold text-[18px] text-secondary-900 min-h-[3rem] flex items-start justify-center text-center">Request a Technical Consultation</span>
                            </button>
                            <Link to="/contact#contact-form" className="flex flex-col items-center justify-center p-6 transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group">
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
                category="calcium-nitrate"
            />

            <Footer />
        </div>
    );
};


export default Product1;
