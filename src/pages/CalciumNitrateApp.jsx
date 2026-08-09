import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Truck, Waves, Droplets, Building2, Leaf, Sprout, ThermometerSnowflake, Flame, Box, FileDown, Download, MessageSquare, FileText, TestTube2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../assets/calcium-nitrate-app-hero.png'; // Dummy image as required from existing assets
import state from '../assets/state.png'; // Dummy image as required from existing assets
import oilgas from '../assets/photos/oil-gas.png';
import WhatsAppButton from '../components/WhatsAppButton';
import TechnicalConsultationModal from '../components/TechnicalConsultationModal';
import { useState } from 'react';
import latex from '../assets/photos/Latex Gloves.png';
import construction from '../assets/construction.png';
import diamondBrochure from '../assets/Diamond Product Brochure.pdf';

const CalciumNitrateApp = () => {
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
                        alt="High-Purity Calcium Nitrate"
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
                            High-Purity Calcium Nitrate for Latex, Construction & Oil and Gas.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >
                        Sterlin Chemicals is a trusted manufacturer and exporter of Diamond Calcium Nitrate — available in Crystalline Solid and Aqueous Solution forms, with the capacity and precision to meet the most demanding industrial specifications.
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
                            <div className="relative w-full overflow-hidden lg:w-1/3 rounded-2xl min-h-[420px] lg:min-h-0">
                                <img
                                    src={latex}
                                    alt="Latex & Rubber"
                                    className="absolute inset-0 object-cover w-full h-full scale-150 brightness-110 saturate-125"
                                    style={{ objectPosition: 'center 50%' }}
                                />
                                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_45%_50%,rgba(255,255,255,0.22),transparent_58%)]"></div>
                            </div>
                            <div className="flex flex-col w-full h-full lg:w-2/3">
                                <div className="flex flex-col items-start gap-4 mb-4 text-left">

                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">
                                        Latex & Rubber: The Industry Benchmark
                                    </h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-[18px] text-secondary-600 text-left">
                                    As a dominant supplier to the Indian and Southeast Asian latex market, Sterlin Chemicals provides the ultra-pure Calcium Nitrate essential for high-speed dipping lines. Our product is engineered to ensure flawless consistency in glove manufacturing.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600 mt-auto">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Precision Coagulation:</strong> Acts as a superior coagulant for Natural Rubber (NR) and Nitrile (NBR) latex, ensuring uniform film thickness.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Zero-Defect Quality:</strong> Ultra-low impurity levels (specifically iron and heavy metals) minimize "pinholes" and structural weaknesses in medical and industrial-grade gloves.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Ready-to-Use Solutions:</strong> For partners looking to streamline production, we also offer pre-stabilized aqueous solutions in custom concentrations to ensure batch-to-batch consistency and reduce on-site handling.</span>
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
                                <img src={oilgas} alt="Oil & Gas" className="object-cover w-full h-48 lg:h-full rounded-2xl" />
                            </div>
                            <div className="flex flex-col w-full h-full lg:w-2/3">
                                <div className="flex flex-col items-start gap-4 mb-4 text-left">

                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">
                                        Oil & Gas: Advanced H2S & Odor Management
                                    </h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-[18px] text-secondary-600 text-left">
                                    We support the world’s most demanding energy environments with high-volume Calcium Nitrate supply, focusing on safety, environmental compliance, and infrastructure integrity.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600 mt-auto">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Sulphide Inhibition:</strong> Provides a strategic nitrate source that prevents the formation of Hydrogen Sulphide (H2S) gas in drilling fluids and sour wells.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Corrosion Protection:</strong> By suppressing H2S, our solution effectively mitigates Microbiologically Influenced Corrosion (MIC) in pipelines and storage tanks.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Logistical Reliability:</strong> Optimized for large-scale operations with 7-day dispatch from our Ankleshwar factory to major ports.</span>
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
                                <img src={construction} alt="Construction" className="object-cover w-full h-48 lg:h-full rounded-2xl opacity-80" />
                            </div>
                            <div className="flex flex-col w-full h-full lg:w-2/3">
                                <div className="flex flex-col items-start gap-4 mb-4 text-left">

                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">
                                        Construction & Admixtures: High-Authority Infrastructure
                                    </h3>
                                </div>
                                <p className="mb-6 leading-relaxed text-[18px] text-secondary-600 text-left">
                                    Trusted by global leaders like Saint-Gobain, our technical-grade Calcium Nitrate is the preferred set-accelerator for high-performance concrete.
                                </p>
                                <ul className="space-y-4 text-[18px] text-secondary-600 mt-auto">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Non-Chloride Acceleration:</strong> Provides rapid setting and early strength without the risk of steel reinforcement corrosion—critical for pre-cast and reinforced concrete.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Cold Weather Reliability:</strong> Lowers the freezing point of the mixing water, allowing for safe and efficient concreting in sub-zero temperatures.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-primary" />
                                        <span><strong>Long-term Durability:</strong> Enhances the density of the concrete matrix, improving resistance to environmental stressors.</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Specialized Technical Applications */}
            <section className="py-24 overflow-hidden bg-[#f1f5f8]">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1] mb-6">
                            Specialized Technical <span className="text-primary">Applications</span>
                        </h2>
                        <p className="text-secondary-600 text-[18px] max-w-3xl mx-auto">
                            Beyond our core sectors, Sterlin Chemicals’ high-purity Calcium Nitrate is utilized across a diverse range of specialized industries:
                        </p>
                    </div>

                    {/* === TABLET ONLY: all 5 in 2-column grid === */}
                    <div className="hidden gap-6 md:grid lg:hidden md:grid-cols-2">
                        {[
                            { title: "Wastewater Treatment", icon: <Leaf className="w-6 h-6 " />, desc: "Used for municipal odour control and to prevent septicity in sewage networks by providing a biological oxygen source." },
                            { title: "Specialty Agriculture", icon: <Sprout className="w-6 h-6" />, desc: "A 100% water-soluble source of Calcium and Nitrate nitrogen, ideal for high-end hydroponics and greenhouse fertigation." },
                            { title: "Refrigeration & Heat Storage", icon: <ThermometerSnowflake className="w-6 h-6" />, desc: "Employed as a secondary refrigerant in industrial cooling and as a component in thermal energy storage salts." },
                            { title: "Explosives & Pyrotechnics", icon: <Flame className="w-6 h-6" />, desc: "Serves as a high purity oxidizing agent in civil engineering explosives and specialized pyrotechnics." },
                            { title: "Glass Manufacturing", icon: <Box className="w-6 h-6" />, desc: "Acts as a refining agent and helps in the decolorization of specialty glass products." }
                        ].map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`w-full p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group h-full min-h-[280px]${index === 4 ? ' col-span-2 max-w-sm mx-auto' : ''}`}
                            >
                                <div className="flex items-center gap-3 mb-4 text-left">
                                    <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110 text-primary shrink-0">
                                        {app.icon}
                                    </div>
                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">{app.title}</h3>
                                </div>
                                <p className="leading-relaxed text-[18px] text-secondary-600 text-left">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* === MOBILE ONLY: single column === */}
                    <div className="grid grid-cols-1 gap-6 md:hidden">
                        {[
                            { title: "Wastewater Treatment", icon: <Leaf className="w-6 h-6 " />, desc: "Used for municipal odour control and to prevent septicity in sewage networks by providing a biological oxygen source." },
                            { title: "Specialty Agriculture", icon: <Sprout className="w-6 h-6" />, desc: "A 100% water-soluble source of Calcium and Nitrate nitrogen, ideal for high-end hydroponics and greenhouse fertigation." },
                            { title: "Refrigeration & Heat Storage", icon: <ThermometerSnowflake className="w-6 h-6" />, desc: "Employed as a secondary refrigerant in industrial cooling and as a component in thermal energy storage salts." },
                            { title: "Explosives & Pyrotechnics", icon: <Flame className="w-6 h-6" />, desc: "Serves as a high purity oxidizing agent in civil engineering explosives and specialized pyrotechnics." },
                            { title: "Glass Manufacturing", icon: <Box className="w-6 h-6" />, desc: "Acts as a refining agent and helps in the decolorization of specialty glass products." }
                        ].map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group"
                            >
                                <div className="flex items-center gap-3 mb-4 text-left">
                                    <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110 text-primary shrink-0">
                                        {app.icon}
                                    </div>
                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">{app.title}</h3>
                                </div>
                                <p className="leading-relaxed text-[18px] text-secondary-600 text-left">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* === DESKTOP ONLY: 3 cards in 3-column grid === */}
                    <div className="hidden gap-6 mb-6 lg:grid lg:grid-cols-3">
                        {[
                            { title: "Wastewater Treatment", icon: <Leaf className="w-6 h-6 " />, desc: "Used for municipal odour control and to prevent septicity in sewage networks by providing a biological oxygen source." },
                            { title: "Specialty Agriculture", icon: <Sprout className="w-6 h-6" />, desc: "A 100% water-soluble source of Calcium and Nitrate nitrogen, ideal for high-end hydroponics and greenhouse fertigation." },
                            { title: "Refrigeration & Heat Storage", icon: <ThermometerSnowflake className="w-6 h-6" />, desc: "Employed as a secondary refrigerant in industrial cooling and as a component in thermal energy storage salts." }
                        ].map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group"
                            >
                                <div className="flex items-center gap-3 mb-4 text-left">
                                    <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110 text-primary shrink-0">
                                        {app.icon}
                                    </div>
                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">{app.title}</h3>
                                </div>
                                <p className="leading-relaxed text-[18px] text-secondary-600 text-left">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* === DESKTOP ONLY: last 2 cards in centered 2-column grid === */}
                    <div className="hidden max-w-3xl gap-6 mx-auto lg:grid lg:grid-cols-2">
                        {[
                            { title: "Explosives & Pyrotechnics", icon: <Flame className="w-6 h-6" />, desc: "Serves as a high purity oxidizing agent in civil engineering explosives and specialized pyrotechnics." },
                            { title: "Glass Manufacturing", icon: <Box className="w-6 h-6" />, desc: "Acts as a refining agent and helps in the decolorization of specialty glass products." }
                        ].map((app, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index + 3) * 0.1 }}
                                className="w-full p-8 transition-all duration-300 bg-white border shadow-sm border-secondary-200 rounded-2xl hover:border-primary/50 group"
                            >
                                <div className="flex items-center gap-3 mb-4 text-left">
                                    <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110 text-primary shrink-0">
                                        {app.icon}
                                    </div>
                                    <h3 className="text-[20px] font-bold text-secondary-900 transition-colors group-hover:text-primary-700">{app.title}</h3>
                                </div>
                                <p className="leading-relaxed text-[18px] text-secondary-600 text-left">{app.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dynamic Dummy Image Section (Mid-page break) */}
            <section className="relative w-full h-[40vh] min-h-[300px] bg-secondary-900 flex items-center justify-center">
                <img src={state} alt="Industrial Application" className="absolute inset-0 w-full h-full opacity-30" style={{ objectFit: 'cover', objectPosition: 'center 63%' }} />
                <div className="relative z-10 px-4 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Empowering Industry Standards</h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/80">Providing strategic advantages through uncompromising quality and reliability.</p>
                </div>
            </section>

            {/* Section 4: Technical Advantage & Supply */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="mb-4 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                            Technical Advantage <span className="text-transparent bg-clip-text bg-primary">& Supply</span>
                        </h2>
                        <p className="text-[18px] text-secondary-600">Why Industry Leaders Choose Sterlin Chemicals:</p>
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
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900">ISO 9001:2015 Certified Quality</h3>
                            <p className="text-[18px] text-secondary-600">Every batch undergoes rigorous in-house lab testing to ensure compliance with international technical standards.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 text-center transition-all bg-white border shadow-sm lg:px-6 border-secondary-200 rounded-3xl hover:shadow-lg group h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <Box className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900">Grade Flexibility</h3>
                            <p className="text-[18px] text-secondary-600">We supply both Crystalline powder (99%+ purity) and Aqueous Solutions (customized % concentration) to meet specific process requirements.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 text-center transition-all bg-white border shadow-sm lg:px-6 border-secondary-200 rounded-3xl hover:shadow-lg group h-full md:min-h-[280px] lg:min-h-0"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 transition-transform duration-300 rounded-2xl bg-primary/10 group-hover:scale-110">
                                <Truck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="mb-4 text-[20px] font-bold text-secondary-900">Strategic Logistics</h3>
                            <p className="text-[18px] text-secondary-600">Located in the industrial hub of Ankleshwar, India, ensuring rapid transit via Hazira and Nhava Sheva ports for international buyers.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 5: Call to Action */}
            <section className="py-24 bg-[#f1f5f8]">
                <div className="container max-w-4xl px-4 mx-auto text-center">
                    <h2 className="mb-6 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1]">
                        Partner with a <span className="text-transparent bg-clip-text bg-primary">Technical Leader</span>
                    </h2>
                    <p className="mb-12 text-[18px] text-secondary-600 leading-relaxed">
                        Ready to optimize your production with high-purity Calcium Nitrate? Contact our engineering team for technical consultations, TDS/MSDS requests, or bulk export quotes.
                    </p>

                    <div className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-3">
                        <a
                            href={diamondBrochure}
                            download="Diamond_Product_Brochure.pdf"
                            className="flex flex-col items-center justify-center h-full p-6 text-center transition-all bg-white border border-secondary-200 rounded-3xl hover:shadow-lg group"
                        >
                            <FileDown strokeWidth={1.25} className="w-8 h-8 mb-4 transition-transform text-primary group-hover:scale-110" />
                            <span className="font-semibold text-[16px] md:text-[18px] text-secondary-900 leading-snug min-h-[3rem] flex items-start justify-center text-center">Download Diamond Series Brochure</span>
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
                category="calcium-nitrate"
                mode="consultation"
            />
            <TechnicalConsultationModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                category="calcium-nitrate"
                mode="quote"
            />

            <Footer />
        </div>
    );
};


export default CalciumNitrateApp;
