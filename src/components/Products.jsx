import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Droplets, Microscope, Factory, ArrowRight, Beaker, CheckCircle2 } from 'lucide-react';

const Products = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [showStickyNav, setShowStickyNav] = useState(true);
    const [navTop, setNavTop] = useState(88);
    const lastScrollY = useRef(0);
    const listRef = useRef(null);

    // Track scroll direction for mobile sticky nav visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const rect = listRef.current?.getBoundingClientRect();

            // Dynamic Top: 88px when Navbar is visible (<100), 0px when Hidden (>100)
            if (currentScrollY > 100) {
                setNavTop(0);
            } else {
                setNavTop(88);
            }

            // Force show if we are near the top of the list
            const isAtTop = rect && rect.top > 80;

            if (isAtTop) {
                setShowStickyNav(true);
            } else {
                // REVERSE LOGIC: Show on Down, Hide on Up
                if (currentScrollY > lastScrollY.current) {
                    setShowStickyNav(true); // Show on Scroll Down
                } else {
                    setShowStickyNav(false); // Hide on Scroll Up
                }
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navTop]);

    // Use IntersectionObserver for robust scroll-spy (highlights sidebar as you scroll)
    const sectionRefs = useRef([]);
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px', // More reliable tracking for mobile sticky nav
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = products.findIndex(p => p.id === entry.target.id);
                    if (index !== -1) {
                        setActiveTab(index);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const products = [
        {
            id: "solvents",
            title: "Industrial Solvents",
            category: "Industrial Grade",
            desc: "Expertly engineered high-purity solvents designed for large-scale manufacturing processes, heavy-duty cleaning, and specialized industrial applications. Our solvents ensure maximum efficiency and performance in complex chemical environments.",
            features: ["High Purity Standards", "Excellent Solvent Power", "Regulatory Compliance", "Industrial Efficiency"],
            icon: <Factory size={24} />,
            image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "polymers",
            title: "Specialty Polymers",
            category: "Performance Materials",
            desc: "Advanced polymer solutions crafted for extreme conditions. These materials offer superior durability, thermal resistance, and structural integrity, making them ideal for aerospace, automotive, and high-tech sectors.",
            features: ["Thermal Stability", "Chemical Resistance", "Structural Integrity", "Custom Specs"],
            icon: <Droplets size={24} />,
            image: "https://images.unsplash.com/photo-1532187863486-abf9d3c3223d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "reagents",
            title: "Lab Reagents",
            category: "Research Grade",
            desc: "Precision-grade chemical reagents standardized for absolute analytical accuracy. Essential for cutting-edge laboratory research, diagnostics, and quality control testing where purity is non-negotiable.",
            features: ["Analytical Accuracy", "Standardized Purity", "Quality Certified", "Research Optimized"],
            icon: <Microscope size={24} />,
            image: "https://images.unsplash.com/photo-1581093458891-b98838d1e12d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: "custom",
            title: "Custom Formulations",
            category: "Bespoke Solutions",
            desc: "Tailor-made chemical solutions developed through collaborative research and development. We work closely with your technical teams to create unique formulations that solve specific industrial challenges.",
            features: ["Collaborative R&D", "Unique Formulations", "Technical Expertise", "Exclusive Support"],
            icon: <FlaskConical size={24} />,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const scrollToProduct = (id, index) => {
        // Snappy UI response
        setActiveTab(index);

        const element = document.getElementById(id);
        if (element) {
            // Adjust offset for mobile sticky nav (approx 140px) vs desktop (approx 110px)
            const isMobile = window.innerWidth < 1024;
            const offset = isMobile ? 140 : 110;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            // DIRECT OPEN: Jump instantly without the smooth travel animation
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative bg-transparent py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 text-primary mb-8 mx-auto"
                    >
                        <span className="text-[14px]  tracking-widest ">Portfolio Exhibition</span>
                    </motion.div>
                    <h2 className="text-3xl lg:text-[48px] font-medium text-secondary-900 leading-tight mb-10 max-w-4xl mx-auto">
                        World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-400">Chemical Products</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">

                    {/* STICKY SIDEBAR / MOBILE NAV (HIDDEN ON MOBILE, SIDEBAR ON DESKTOP) */}
                    <aside className="hidden lg:block lg:w-1/3">
                        <div className="sticky lg:top-32 z-30 lg:flex lg:flex-col gap-4 p-0 lg:bg-transparent lg:border-none lg:mx-0 lg:px-0 mb-8 lg:mb-0">
                            {products.map((product, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToProduct(product.id, index)}
                                    className={`relative flex items-center justify-start gap-4 p-5 rounded-2xl transition-all duration-300 cursor-pointer flex-none
                                        ${activeTab === index
                                            ? 'border-2 border-primary lg:bg-primary text-primary lg:text-white lg:shadow-xl lg:shadow-primary/20'
                                            : 'bg-white text-secondary-700 lg:border-none lg:hover:shadow-md'}`}

                                >
                                    <div className={`p-2.5 rounded-xl transition-colors ${activeTab === index ? 'bg-primary/10 lg:bg-white/20' : 'bg-secondary-100'}`}>
                                        {React.cloneElement(product.icon, {
                                            size: 18,
                                            className: activeTab === index ? 'text-primary lg:text-white' : 'text-primary'
                                        })}
                                    </div>
                                    <div className="flex-grow text-left">
                                        <p className={`text-[12px] font-bold tracking-widest mb-0.5 uppercase ${activeTab === index ? 'text-primary/70 lg:text-white/70' : 'text-secondary-500'}`}>
                                            {product.category}
                                        </p>
                                        <h4 className="font-bold text-[17px]">{product.title}</h4>
                                    </div>
                                    <ArrowRight size={18} className={`transition-all duration-300 ${activeTab === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* SCROLLABLE STACK: The "Scrolling Effect" */}
                    <div ref={listRef} className="lg:w-2/3 space-y-12">
                        {/* Mobile-only Horizontal Sticky Nav (Navbar-style visibility) */}
                        <AnimatePresence>
                            {showStickyNav && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20, height: 0, marginBottom: 0 }}
                                    animate={{ opacity: 1, y: 0, height: 'auto', marginBottom: 40, top: navTop }}
                                    exit={{ opacity: 0, y: -20, height: 0, marginBottom: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="lg:hidden sticky z-40 bg-white/95 backdrop-blur-md border-b border-secondary-100 flex justify-between gap-1 p-2 -mx-4 shadow-sm overflow-x-auto no-scrollbar overflow-hidden"
                                >
                                    {products.map((product, index) => (
                                        <button
                                            key={index}
                                            onClick={() => scrollToProduct(product.id, index)}
                                            className={`flex flex-col items-center gap-1.5 py-2 px-3 rounded-xl transition-all duration-300 flex-1 min-w-[80px]
                                                ${activeTab === index ? 'text-primary-600 bg-primary-50/50' : 'text-secondary-400'}`}
                                        >
                                            <div className={`p-1.5 rounded-lg transition-colors ${activeTab === index ? 'bg-primary/10 text-primary' : 'bg-transparent text-secondary-400'}`}>
                                                {React.cloneElement(product.icon, { size: 18 })}
                                            </div>
                                            <span className={`text-[9px] font-bold uppercase tracking-tight truncate w-full text-center ${activeTab === index ? 'text-primary' : 'text-secondary-500'}`}>
                                                {product.title.split(' ')[1] || product.title}
                                            </span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                id={product.id}
                                ref={el => sectionRefs.current[index] = el}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-150px" }}
                                className="relative lg:relative lg:top-0 bg-white rounded-[40px] shadow-sm overflow-hidden flex flex-col"
                            >
                                {/* Product Image */}
                                <div className="relative h-72 w-full overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/40 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-6 left-8 text-white">
                                        <h3 className="text-2xl font-bold">{product.title}</h3>
                                    </div>
                                </div>

                                {/* Product Details */}
                                <div className="px-8 py-4 lg:pt-8 lg:pb-4 lg:px-8 space-y-6">
                                    <p className="text-secondary-600 text-[18px] leading-relaxed">
                                        {product.desc}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-secondary-700">
                                                <div className="p-3 bg-primary/10 rounded-lg text-primary flex items-center justify-center border border-primary/20">
                                                    <CheckCircle2 size={10} strokeWidth={3} />
                                                </div>
                                                <span className="font-semibold text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className=" mt-auto">
                                        <button className="group relative py-[10px] px-8 bg-primary hover:bg-primary/90 rounded-full text-white text-[15px] font-bold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                                            Request Information
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Products;
