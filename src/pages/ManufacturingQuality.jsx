import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Microscope, FlaskConical, LayoutDashboard, Target, Beaker, FileText, Download, MessageSquare, ArrowRight, Settings, Truck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import hero from '../assets/manufacture.jpeg'; // Dummy image from existing assets //
import dummyImage2 from '../assets/Calcium Nitrate Crystals closeup.jpg';
import process from '../assets/processprecision.jpeg';
import laboratory from '../assets/labo-manu.jpeg';
import rawmaterial from '../assets/Raw material sourcing.png';
import WhatsAppButton from '../components/WhatsAppButton';
import TechnicalConsultationModal from '../components/TechnicalConsultationModal';
import { useState } from 'react';

const ManufacturingQuality = () => {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-secondary-50 text-secondary-900">
            <Navbar />

            {/* Section 1: Hero Header */}
            <section className="relative flex items-center justify-center w-full h-[70vh] min-h-[550px] overflow-hidden bg-secondary-950">
                {/* Hero Image Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src={hero}
                        alt="Manufacturing Excellence"
                        className="object-cover w-full h-full opacity-20 "
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
                            Industrial-Scale Output. Laboratory-Grade Precision.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >
                        From our ISO 9001:2015 certified facility in Ankleshwar, we manufacture Diamond-Grade Calcium Nitrate and Microtec Colloidal Silica to the exacting standards global supply chains demand.
                    </motion.p>
                </div>

            </section>

            {/* Section 2: The Sterlin Quality Framework */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="mb-4 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            The Sterlin <span className="text-transparent bg-clip-text bg-primary">Quality Framework</span>
                        </h2>
                        <p className="text-[18px] text-secondary-600 max-w-3xl mx-auto">
                            We apply a universal "3-Tier Testing Protocol" to every batch, ensuring that the material arriving at your facility matches the specification on the data sheet—every single time.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Tier 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-12 md:flex-row md:items-stretch lg:items-center"
                        >
                            <div className="w-full md:w-1/2">
                                <img src={rawmaterial} alt="Raw Material Integrity" className="rounded-3xl shadow-lg w-full h-[400px] md:h-full lg:h-[400px] object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">

                                <h3 className="text-[24px] font-bold text-secondary-900 mb-4"> Raw Material Integrity</h3>
                                <p className="text-[18px] text-secondary-600 leading-relaxed">
                                    Quality begins before synthesis. Every precursor and raw material entering our site is quarantined and validated for purity. By controlling the input, we ensure that the final product is free from the contaminants and heavy metals that compromise high-end industrial applications.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tier 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-12 md:flex-row-reverse md:items-stretch lg:items-center"
                        >
                            <div className="w-full md:w-1/2">
                                <img src={process} alt="In-Process Precision" className="rounded-3xl shadow-lg w-full h-[400px] md:h-full lg:h-[400px] object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">

                                <h3 className="text-[24px] font-bold text-secondary-900 mb-4"> In-Process Precision</h3>
                                <p className="text-[18px] text-secondary-600 leading-relaxed mb-6">
                                    Our production cycles are governed by strict operational parameters.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600">
                                    <li className="flex items-start gap-4 p-4 bg-[#f1f5f8] rounded-xl border border-secondary-200">
                                        <CheckCircle2 className="w-6 h-6 shrink-0 text-primary" />
                                        <span><strong>Real-Time Monitoring:</strong> We maintain rigorous control over temperature, pH, and concentration levels throughout the manufacturing cycle.</span>
                                    </li>
                                    <li className="flex items-start gap-4 p-4 bg-[#f1f5f8] rounded-xl border border-secondary-200">
                                        <CheckCircle2 className="w-6 h-6 shrink-0 text-primary" />
                                        <span><strong>Batch Uniformity:</strong> This controlled environment eliminates the "drift" often seen in bulk manufacturing, providing our customers with a predictable, stable product.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Tier 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-12 pt-4 md:flex-row md:items-stretch lg:items-center"
                        >
                            <div className="w-full md:w-1/2">
                                <img src={laboratory} alt="Final Laboratory Validation" className="rounded-3xl shadow-lg w-full h-[420px] md:h-full lg:h-[420px] object-cover" />
                            </div>
                            <div className="w-full md:w-1/2">

                                <h3 className="text-[24px] font-bold text-secondary-900 mb-4"> Final Laboratory Validation</h3>
                                <p className="text-[18px] text-secondary-600 leading-relaxed mb-6">
                                    The Sterlin In-House Laboratory serves as the final arbiter of quality. No shipment is dispatched until it passes a comprehensive analysis including:
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Impurity Profiling:</strong> Removing iron, heavy metals, and insolubles to protect your equipment and final product quality.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Stability Verification:</strong> Ensuring that liquid phases remain stable and solids remain high-purity throughout transit and storage.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Spec-Matching:</strong> Verifying that every parameter—from particle size to concentration—falls within the narrow tolerances required for Technical Grade applications.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Compliance & Reliability */}
            <section className="py-24 overflow-hidden bg-[#f1f5f8]">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1] mb-6">
                            Compliance <span className="text-primary">& Reliability</span>
                        </h2>
                        <h3 className="mb-4 text-[20px] font-bold text-secondary-900">A Low-Risk Partnership</h3>
                        <p className="text-secondary-600 text-[18px] max-w-3xl mx-auto">
                            In a global market where supply chains are increasingly complex, Sterlin Chemicals offers the transparency and reliability of an established, certified manufacturer.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 transition-all duration-300 bg-white border shadow-sm lg:pr-6 border-secondary-200 rounded-2xl hover:border-primary/50 group h-full md:min-h-[300px] lg:min-h-0"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">ISO 9001:2015 Certification</h3>
                            </div>
                            <p className="leading-relaxed text-[18px] text-secondary-600">Our management and production workflows are fully certified, ensuring a repeatable and documented quality process.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group h-full md:min-h-[300px] lg:min-h-0"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                    <FileText className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">Total Traceability</h3>
                            </div>
                            <p className="leading-relaxed text-[18px] text-secondary-600">Every shipment is accompanied by a Certificate of Analysis (COA). We maintain sample retains for 12 months, providing our clients with absolute confidence in historical batch data.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group h-full md:min-h-[300px] lg:min-h-0"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                    <LayoutDashboard className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">Technical Guidance</h3>
                            </div>
                            <p className="leading-relaxed text-[18px] text-secondary-600">We don't just supply chemicals; we provide engineering support. Our team assists in grade selection and optimization to ensure our products deliver maximum ROI in your specific process.</p>
                        </motion.div>
                    </div>
                </div>
            </section>



            {/* Section 4: The Technical Grade Advantage Highlights */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1] mb-4">
                            The Technical  <span className="text-primary">Grade Advantage</span>
                        </h2>
                        <p className="text-secondary-600 text-[18px] max-w-3xl mx-auto">
                            Why do industry leaders choose Sterlin Chemicals over bulk commodity suppliers?
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 text-center transition-all bg-[#f1f5f8] border shadow-sm border-secondary-200 rounded-3xl hover:shadow-lg hover:border-primary/30 h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <CheckCircle2 className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900"> High Acceptance Rates</h3>
                            <p className="text-[18px] text-secondary-600">Our focus on low-impurity levels eliminates defects in sensitive applications like Latex and Coatings.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 text-center transition-all bg-[#f1f5f8] border shadow-sm border-secondary-200 rounded-3xl hover:shadow-lg hover:border-primary/30 h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <FlaskConical className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900"> Process Efficiency</h3>
                            <p className="text-[18px] text-secondary-600">High-purity chemicals mean fewer filter changes and less downtime in your manufacturing plant.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 text-center transition-all bg-[#f1f5f8] border shadow-sm border-secondary-200 rounded-3xl hover:shadow-lg hover:border-primary/30 h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <Truck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900"> Logistical Agility</h3>
                            <p className="text-[18px] text-secondary-600">Our proximity to major ports and our dedicated production capacity allows for rapid response times and 7-day dispatch capabilities.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 5: Call to Action */}
            <section className="relative py-24 overflow-hidden text-white bg-gray-100">
                <div className="absolute inset-0 pointer-events-none">
                    {/* <img src={dummyImage3} alt="Secure Supply Chain" className="object-cover w-full h-full opacity-20 mix-blend-overlay" /> */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" /> */}
                </div>
                <div className="container relative z-10 max-w-4xl px-4 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[30px] md:text-[48px] font-medium text-secondary-900 mb-6 leading-tight">Secure Your<span className="text-primary"> Supply Chain</span></h2>
                        <p className="text-secondary-600 text-[18px] leading-relaxed mb-10">
                            Partner with a manufacturer that prioritizes your technical requirements. Contact our engineering team for documentation, TDS/MSDS, or a customized quote.
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            {/* <button className="px-[24px] py-[10px] text-[15px] font-semibold text-black transition-all bg-[#38b6ff] md:text-base rounded-full hover:bg-primary/90 flex items-center justify-center gap-2 group">
                                Request Technical Data
                            </button> */}
                            <button
                                onClick={() => setIsQuoteModalOpen(true)}
                                className="px-[24px] py-[10px] text-[15px] font-semibold text-white transition-all bg-secondary-900 md:text-base rounded-full hover:bg-secondary-800 flex items-center justify-center gap-2 group"
                            >
                                Get a Quote
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
            <TechnicalConsultationModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                category="colloidal-silica" // Defaulting to colloidal-silica or maybe a general category if available
                mode="quote"
            />
            <Footer />
        </div>
    );
};

export default ManufacturingQuality;
