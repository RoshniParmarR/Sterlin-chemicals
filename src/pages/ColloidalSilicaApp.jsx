import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Truck, Droplets, Building2, BookOpen, PaintBucket, Beaker, FileText, FileDown, MessageSquare, Microscope, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import paint from '../assets/Application Paint.png'; // Dummy image from existing assets
import state from '../assets/state.png'; // Dummy image from existing assets
import paperpulp from '../assets/photos/paperpulp.jpeg';
import WhatsAppButton from '../components/WhatsAppButton';
import microtecBrochure from '../assets/Microtec Product Introduction.pdf';
import TechnicalConsultationModal from '../components/TechnicalConsultationModal';
import { useState } from 'react';


import heroImage from '../assets/photos/Paper Application.jpg';
import concrete from '../assets/photos/Concrete Application.jpg';
const ColloidalSilicaApp = () => {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-secondary-50 text-secondary-900">
            <Navbar />

            {/* Section 1: Hero Header */}
            <section className="relative flex items-center justify-center w-full h-[70vh] min-h-[550px] overflow-hidden bg-secondary-950">
                {/* Hero Image Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src={heroImage}
                        alt="Microtec Colloidal Silica"
                        className="object-cover w-full h-full opacity-20"
                    />
                </div>

                {/* Background Animated Elements */}
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
                            Colloidal Silica Engineered for Your Process, <br /> Not the Average One.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >

                        Sterlin Chemicals manufactures Microtec Colloidal Silica — precision-grades, high-volume, and available in custom formulations built to exact process specifications.
                    </motion.p>
                </div>
            </section>

            {/* Section 2: Primary Industrial Pillars */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Primary <span className="text-transparent bg-clip-text bg-primary">Industrial Pillars</span>
                        </h2>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-1">
                        {/* Pillar 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 transition-all duration-300 border shadow-sm bg-[#f1f5f8] border-secondary-200 rounded-3xl hover:border-primary/50 hover:shadow-lg group flex flex-col lg:flex-row gap-8 items-stretch"
                        >
                            <div className="w-full lg:w-1/3">
                                <img src={paperpulp} alt="Paper & Pulp" className="object-cover w-full h-48 lg:h-full rounded-2xl" />
                            </div>
                            <div className="flex flex-col w-full h-full lg:w-2/3">
                                <div className="flex flex-col items-start gap-4 mb-4 text-left">

                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">
                                        Paper & Pulp: Retention and Drainage
                                    </h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-[18px] text-secondary-600 text-left">
                                    Trusted by global leaders like Solenis and Buckman, Microtec is engineered to optimize the wet-end chemistry of modern papermaking.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600 mt-auto">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Micro-particle Systems:</strong> Our silica acts as a high-efficiency retention aid, improving fibre and filler retention while accelerating drainage on the wire.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Optimized Polydispersity:</strong> We control the particle size distribution to ensure maximum surface area activity, leading to better formation and reduced chemical costs.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Printability:</strong> Enhances surface strength and ink receptivity for specialty and high-quality coated papers.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Pillar 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 transition-all duration-300 border shadow-sm bg-[#f1f5f8] border-secondary-200 rounded-3xl hover:border-primary/50 hover:shadow-lg group flex flex-col lg:flex-row-reverse gap-8 items-stretch"
                        >
                            <div className="w-full lg:w-1/3">
                                <img src={paint} alt="Paints & Coatings" className="object-cover w-full h-48 lg:h-full rounded-2xl" />
                            </div>
                            <div className="flex flex-col w-full h-full lg:w-2/3">
                                <div className="flex flex-col items-start gap-4 mb-4 text-left">

                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">
                                        Paints & Specialty Coatings
                                    </h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-[18px] text-secondary-600 text-left">
                                    In the coatings industry, Microtec is the "invisible" ingredient that transforms durability and aesthetics.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600 mt-auto">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Hardness & Scratch Resistance:</strong> Increases the mechanical strength of coatings without compromising transparency.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Anti-Soiling Properties:</strong> Creates a high-energy surface that repels dust and environmental pollutants, keeping architectural coatings cleaner for longer.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Adhesion Promotion:</strong> Improves the bond between the coating and difficult substrates, including metal and glass.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Pillar 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="p-8 transition-all duration-300 border shadow-sm bg-[#f1f5f8] border-secondary-200 rounded-3xl hover:border-primary/50 hover:shadow-lg group flex flex-col lg:flex-row gap-8 items-stretch"
                        >
                            <div className="w-full lg:w-1/3">
                                <img src={concrete} alt="Construction" className="object-cover w-full h-48 lg:h-full rounded-2xl opacity-80" />
                            </div>
                            <div className="flex flex-col w-full h-full lg:w-2/3">
                                <div className="flex flex-col items-start gap-4 mb-4 text-left">

                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">
                                        High-Performance Concrete & Construction
                                    </h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-[18px] text-secondary-600 text-left">
                                    For the construction industry, we offer Microtec as a high-activity pozzolanic agent for next-generation concrete.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600 mt-auto">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Pore Refinement:</strong> Microtec reacts with Calcium Hydroxide to create additional C-S-H gel, filling capillary pores and drastically reducing permeability.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Surface Densification:</strong> Ideal for liquid floor hardeners and concrete polishing, providing a dust-proof, high-gloss finish.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Set Acceleration:</strong> Enhances early-age strength development in high-performance and ultra-high-performance concrete (UHPC) mixes.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Microtec Technical Edge */}
            <section className="py-24 overflow-hidden bg-[#f1f5f8]">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1] mb-6">
                            The Microtec <span className="text-primary">Technical Edge</span>
                        </h2>
                        <p className="text-secondary-600 text-[18px] max-w-3xl mx-auto">
                            While others sell "standard" grades, Sterlin Chemicals offers a consultative engineering approach. We understand that your process depends on:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {[
                            { title: "Particle Size Control", icon: <Microscope className="w-6 h-6" />, desc: "Available in narrow and broad distributions from 5nm to 100nm." },
                            { title: "Stability & Shelf Life", icon: <ShieldCheck className="w-6 h-6" />, desc: "Engineered to resist gelling and sedimentation even in varying climatic conditions." },
                            { title: "Custom Solids Content", icon: <Beaker className="w-6 h-6" />, desc: "We can adjust concentration and viscosity to match your specific dosing equipment." },
                            { title: "Surface Charge Modification", icon: <Droplets className="w-6 h-6" />, desc: "Specialized anionic and stabilized grades to ensure compatibility with your existing chemical system." }
                        ].map((edge, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group"
                            >
                                <div className="flex items-center gap-3 mb-4 text-left">
                                    <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110 text-primary shrink-0">
                                        {React.cloneElement(edge.icon, { size: 24 })}
                                    </div>
                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">{edge.title}</h3>
                                </div>
                                <p className="leading-relaxed text-[18px] text-secondary-600 text-left">{edge.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Dynamic Dummy Image Section (Mid-page break) */}
            <section className="relative w-full h-[40vh] min-h-[300px] bg-secondary-900 flex items-center justify-center">
                <img src={state} alt="Industrial Application" className="absolute inset-0 w-full h-full opacity-30" style={{ objectFit: 'cover', objectPosition: 'center 63%' }} />
                <div className="relative z-10 px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Engineered to Your Blueprint</h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/80">From pH adjustment to specific S-Value requirements, Microtec delivers unmatched precision.</p>
                </div>
            </section>

            {/* Section 4: Why Partner with Sterlin Chemicals? */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="mb-4 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Why Partner with <span className="text-transparent bg-clip-text bg-primary">Sterlin Chemicals?</span>
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 text-center transition-all bg-white border shadow-sm lg:px-6 border-secondary-200 rounded-3xl hover:shadow-lg group h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <Building2 className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900">Strategic Credibility</h3>
                            <p className="text-[18px] text-secondary-600">Our role as a key supplier to Haber, Zydex, and other multinational leaders is a testament to our batch-to-batch consistency.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 text-center transition-all bg-white border shadow-sm lg:px-6 border-secondary-200 rounded-3xl hover:shadow-lg group h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <Microscope className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900">Grade Selection Guidance</h3>
                            <p className="text-[18px] text-secondary-600">We don't just take orders; our lab team offers expert guidance to help you select or develop the exact grade that optimizes your ROI.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 text-center transition-all bg-white border shadow-sm lg:px-6 border-secondary-200 rounded-3xl hover:shadow-lg group h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <Beaker className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900">Customization as a Standard</h3>
                            <p className="text-[18px] text-secondary-600">From pH adjustment to specific S-Value requirements, Microtec is built to your blueprint.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 5: Call to Action */}
            <section className="py-24 bg-[#f1f5f8]">
                <div className="container max-w-4xl px-4 mx-auto text-center">
                    <h2 className="mb-6 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                        Optimize Your <span className="text-transparent bg-clip-text bg-primary">Formulation</span>
                    </h2>
                    <p className="mb-12 text-[18px] text-secondary-600 leading-relaxed">
                        Speak with our technical team to find the Microtec grade that fits your application.
                    </p>

                    <div className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-3">
                        <a
                            href={microtecBrochure}
                            download="Microtec_Product_Introduction.pdf"
                            className="flex flex-col items-center justify-center h-full p-6 text-center transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                        >
                            <FileDown strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                            <span className="font-semibold text-[16px] md:text-[18px] text-secondary-900 leading-snug min-h-[3rem] flex items-start justify-center text-center">Download Microtec Series Brochure</span>
                        </a>
                        <button
                            onClick={() => setIsConsultationModalOpen(true)}
                            className="flex flex-col items-center justify-center h-full p-6 text-center transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                        >
                            <MessageSquare strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110 shrink-0" />
                            <span className="font-semibold text-[16px] md:text-[18px] text-secondary-900 leading-snug min-h-[3rem] flex items-start justify-center text-center">Request a Technical Consultation</span>
                        </button>

                        <button
                            onClick={() => setIsQuoteModalOpen(true)}
                            className="flex flex-col items-center justify-center h-full p-6 text-center transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                        >
                            <FileText strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110 shrink-0" />
                            <span className="font-semibold text-[16px] md:text-[18px] text-secondary-900 leading-snug min-h-[3rem] flex items-start justify-center text-center">Request a Quote</span>
                        </button>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
            <TechnicalConsultationModal
                isOpen={isConsultationModalOpen}
                onClose={() => setIsConsultationModalOpen(false)}
                category="colloidal-silica"
                mode="consultation"
            />
            <TechnicalConsultationModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                category="colloidal-silica"
                mode="quote"
            />

            <Footer />
        </div>
    );
};


export default ColloidalSilicaApp;
