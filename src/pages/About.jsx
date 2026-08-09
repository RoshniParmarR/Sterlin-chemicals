import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Microscope, Globe, Users, Award, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const culturePoints = [
        {
            title: "Precision Engineering",
            description: "Every product in our portfolio—from the Microtec Series Colloidal Silica to our Diamond Brand Calcium Nitrate—is a result of rigorous R&D.",
            icon: <Microscope strokeWidth={1.25} className="w-8 h-8 text-primary" />,
            color: "bg-primary/10"
        },
        {
            title: "Customization Over Commodity",
            description: "We understand that every industrial process is unique. Our \"Customer-First\" engineering philosophy means we don't just sell products; we work as an extension of your technical team to ensure our chemistry fits your exact specifications.",
            icon: <Zap strokeWidth={1.25} className="w-8 h-8 text-primary" />,
            color: "bg-primary/10"
        },
        {
            title: "The Sterlin Standard",
            description: "Whether it is achieving the industry-leading 0% Organic Impurity standard for our Diamond Brand or perfecting particle size distribution in our Microtec sols, we lead with technical proof, not just promises.",
            icon: <Award strokeWidth={1.25} className="w-8 h-8 text-primary" />,
            color: "bg-primary/10"
        }
    ];

    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-white selection:bg-primary/20 selection:text-primary">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-[70vh] min-h-[550px] overflow-hidden bg-secondary-950">
                {/* Hero Image Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src="src/assets/about-us-hero.png"
                        alt="Corporate Headquarters"
                        className="object-cover w-full h-full opacity-20"
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center px-4 pt-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] max-w-3xl mx-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 via-accent-300 to-primary-400 animate-gradient-x">
                            30 Years of Making the Hard Stuff Work.  </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >
                        Sterlin Chemicals is a specialty chemical manufacturer trusted by industries that can't afford compromise — from formulation to delivery, we get it right.
                    </motion.p>
                </div>
            </section>

            {/* Introduction & Legacy Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="relative rounded-4xl overflow-hidden shadow-lg border border-secondary-100 aspect-[4/3]">
                                <img
                                    src="src/assets/About us legacy.png"
                                    alt="Industrial Facility"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-secondary-900/10"></div>
                            </div>
                            {/* Floating Stats Card */}
                            <div className="absolute hidden max-w-xs p-8 bg-white border shadow-lg -bottom-8 -right-8 rounded-3xl border-secondary-100 md:block">
                                <p className="mb-2 text-sm font-bold tracking-wider uppercase text-secondary-500">Global Reach</p>
                                <p className="font-medium leading-relaxed text-secondary-900">
                                    Serving rigorous demands from the Far East and Middle East to Australia and New Zealand.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 bg-white border rounded-full shadow-md border-primary/20 text-primary">
                                <span className="text-[14px] tracking-wider uppercase font-semibold">Our History</span>
                            </div>
                            <h3 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 mb-8 leading-[1.1]">
                                A Legacy of <span className="text-primary">Chemical Innovation</span>
                            </h3>
                            <div className="space-y-6 text-[18px] text-secondary-600 leading-relaxed mb-8">
                                <p>
                                    Founded over three decades ago, Sterlin Chemicals began with a simple mission: to fill the gap between bulk commodity traders and high-spec industrial needs.
                                </p>
                                <p>
                                    Today, we have evolved into a second-generation manufacturing powerhouse. Our 30-year history isn't just a timeline—it is a foundation of stability. In an industry where reliability is everything, our longevity proves that we consistently meet the rigorous demands of the global market.
                                </p>
                            </div>
                            <div className="flex gap-8 ">
                                <div>
                                    <p className="mb-1 text-4xl font-bold text-secondary-900">30+</p>
                                    <p className="text-sm font-medium uppercase text-secondary-500">Years Experience</p>
                                </div>
                                <div>
                                    <p className="mb-1 text-4xl font-bold text-secondary-900">100%</p>
                                    <p className="text-sm font-medium uppercase text-secondary-500">Uniformity</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Culture / High-Tech Lab Advantage */}
            <section className="relative py-24 overflow-hidden bg-[#f1f5f8]">
                <div className="absolute top-0 left-0 w-full h-px lg:px-8 bg-gradient-to-r from-transparent via-secondary-200 to-transparent"></div>
                <div className="container relative z-10 px-4 mx-auto max-w-7xl">
                    <div className="max-w-3xl mx-auto mb-12 text-center">

                        <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 bg-white border rounded-full shadow-md border-primary/20 text-primary">
                            <span className="text-[14px] tracking-wider uppercase font-semibold">Our Culture</span>
                        </div>
                        <h3 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 mb-6 leading-[1.1]">
                            The High-Tech <span className="text-primary">Lab Advantage</span>
                        </h3>
                        <p className="text-secondary-600 text-[18px] leading-relaxed mb-10">
                            We don't see ourselves as just a factory; we are a High-Tech Laboratory with a manufacturing wing.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {culturePoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 transition-all duration-300 border shadow-sm bg-secondary-50 rounded-3xl border-secondary-100 hover:shadow-lg hover:border-primary/20 group h-full md:min-h-[380px] lg:min-h-0"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`rounded-xl ${point.color} flex items-center justify-center w-12 h-12 transition-transform duration-300 group-hover:scale-110`}>
                                        {point.icon}
                                    </div>
                                    <h4 className="text-[20px] font-bold text-secondary-900">{point.title}</h4>
                                </div>
                                <p className="text-[18px] text-secondary-600 leading-relaxed">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Section */}
            <section className="py-24 overflow-hidden bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="rounded-4xl overflow-hidden shadow-lg relative aspect-[4/3] group">
                                <div className="absolute inset-0 z-10 transition-colors duration-500 bg-secondary-900/10 group-hover:bg-transparent"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                                    alt="Business Partnership"
                                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 lg:order-2"
                        >
                            <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 mb-6 leading-[1.1]">Your Extended <span className="text-primary">Business Partner</span></h2>
                            <p className="text-secondary-600 text-[18px] leading-relaxed mb-8">
                                Sterlin Chemicals is built on the belief that a supplier should be as invested in the outcome as the buyer.
                            </p>
                            <p className="text-secondary-600 text-[18px] leading-relaxed mb-10">
                                When you partner with us, you gain more than a vendor; you gain a team of engineers committed to your success. We handle the complexities of specialty manufacturing and global logistics—including 7-day dispatch via Hazira and Nhava Sheva ports—so you can focus on your core innovation.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Global Vision Section */}
            <section className="relative py-24 overflow-hidden bg-[#f1f5f8]">
                <div className="container relative z-10 px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 mb-6 leading-[1.1]">A Global <span className="text-primary">Vision</span></h2>
                            <p className="text-secondary-600 text-[18px] leading-relaxed mb-8">
                                With a proven track record across the ANZ region, the Far East, and the Middle East, Sterlin Chemicals is now expanding its "Personal + Professional" approach to all global geographies.
                            </p>
                            <p className="text-secondary-600 text-[18px] leading-relaxed mb-10">
                                No matter where you are located, we bring the same level of technical intimacy and manufacturing scale to your doorstep.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="rounded-4xl overflow-hidden shadow-lg relative aspect-[4/3] border border-secondary-200 group">
                                <div className="absolute inset-0 z-10 transition-colors duration-500 bg-secondary-900/10 group-hover:bg-transparent"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                    alt="Global Logistics"
                                    className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-center bg-white">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-[30px] md:text-[48px] font-medium text-secondary-900 mb-6 leading-tight">
                            Ready to Partner with <span className="text-primary">Sterlin Chemicals?</span>
                        </h2>
                        <p className="text-secondary-600 text-[18px] leading-relaxed mb-10">
                            Get in touch with our technical team to discuss your requirements, request a sample, or learn more about our capabilities.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block py-[10px] px-8 bg-[#38b6ff] hover:bg-primary/90 text-black text-[15px] font-bold rounded-full transition-colors duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default About;
