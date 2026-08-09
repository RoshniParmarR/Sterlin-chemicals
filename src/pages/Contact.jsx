import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Beaker, CheckCircle2, Building2, FileText } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import FormWithValidation from './FormWithValidation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="min-h-screen overflow-x-hidden font-sans bg-secondary-50 text-secondary-900 selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex items-center justify-center h-[70vh] min-h-[550px] overflow-hidden bg-secondary-950">
                {/* Hero Image Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <img
                        src="src/assets/contactbg.png"
                        alt="Corporate Meeting"
                        className="object-cover w-full h-full opacity-20"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/80 via-secondary-950/60 to-secondary-950"></div> */}
                </div>
                <div className="relative z-10 flex flex-col items-center px-4 pt-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] max-w-3xl mx-auto"
                    >
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 via-accent-300 to-primary-400 animate-gradient-x">
                            Talk to a Chemical Specialist
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                    >

                        Need a custom Microtec grade or a high-purity Diamond Calcium Nitrate batch? <br /> Our technical team responds fast.
                    </motion.p>
                </div>
            </section>


            {/* Section 1: Contact Info & Map */}
            <section className="relative z-20 py-24 bg-white">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="grid items-start gap-12 lg:grid-cols-2">
                        {/* Text Details */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-10"
                        >
                            <div>
                                <h3 className="text-[36px] font-medium text-secondary-900 mb-6 text-center sm:text-left">Direct Contact & Logistics Hub</h3>
                            </div>

                            <div className="flex flex-col items-center gap-12 sm:grid sm:grid-cols-2 sm:items-start">
                                <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-3 text-center sm:text-left sm:items-start sm:flex-none">
                                    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-2xl bg-primary/10 text-primary">
                                        <MapPin strokeWidth={1.25} className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-medium text-secondary-900 text-[20px]">Corporate Headquarters</h4>
                                    <p className="text-secondary-600 leading-relaxed text-[18px]">
                                        103 Opal Square, Alkapuri,<br />
                                        Vadodara – 390007, Gujarat, India
                                    </p>
                                </div>
                                <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-3 text-center sm:text-left sm:items-start sm:flex-none">
                                    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-2xl bg-primary/10 text-primary">
                                        <Building2 strokeWidth={1.25} className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-medium text-secondary-900 text-[20px]">Manufacturing Plant</h4>
                                    <p className="text-secondary-600 leading-relaxed text-[18px]">
                                        Plot Number 622, GIDC,<br className="sm:hidden" /> Ankleshwar – 393 002, Gujarat, India
                                    </p>
                                </div>
                                <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-3 text-center sm:text-left sm:items-start sm:flex-none">
                                    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-2xl bg-primary/10 text-primary">
                                        <Mail strokeWidth={1.25} className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-medium text-secondary-900 text-[20px]">Email Us</h4>
                                    <p className="font-medium transition-colors text-secondary-600 hover:text-primary text-[18px] cursor-pointer">
                                        info@sterlchem.com
                                    </p>
                                </div>
                                <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-3 text-center sm:text-left sm:items-start sm:flex-none">
                                    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-2xl bg-primary/10 text-primary">
                                        <Phone strokeWidth={1.25} className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-medium text-secondary-900 text-[20px]">Phone / WhatsApp</h4>
                                    <p className="font-medium transition-colors text-secondary-600 hover:text-primary text-[18px] cursor-pointer text-nowrap">
                                        +91 999 812 4960
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 mt-4">
                                <div className="flex flex-col items-center sm:flex-row sm:justify-start">
                                    <span className="relative flex w-3 h-3 mb-2 sm:mb-0 sm:mr-3">
                                        <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
                                        <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full"></span>
                                    </span>
                                    <p className="text-[18px] font-medium text-secondary-600 text-center sm:text-left">
                                        Proximity: 7-Day Dispatch via Hazira / Nhava Sheva Ports
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Google Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-[530px] w-full bg-secondary-100 rounded-[2rem] overflow-hidden shadow-lg border-1 border-secondary-50 relative z-10"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14764.518470862402!2d73.16242624894197!3d22.310937174859784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b04836d4f7%3A0x1ff87867d16a1e18!2sSterlin%20Chemicals!5e0!3m2!1sen!2sin!4v1775451489429!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                                className="transition-all duration-500 hover:grayscale-0"
                            ></iframe>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Lead Capture Form */}
            <section id="contact-form" className="relative py-24 bg-[#f1f5f8] -scroll-mt-24">
                <div className="container max-w-4xl px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-secondary-100"
                    >
                        <div className="mb-10 text-center">
                            <h2 className="text-[32px] font-medium text-secondary-900 mb-4">Get in Touch</h2>
                            <p className="text-[16px] text-secondary-600">Fill out the form below and our team will get back to you within 24 hours.</p>
                        </div>

                        <FormWithValidation />
                    </motion.div>
                </div>
            </section>

            {/* The "Trust" Footer Section */}
            <section className="py-16 bg-white border-t text-secondary-900 border-secondary-100">
                <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center gap-3 p-6 transition-colors border rounded-2xl bg-[#f1f5f8] hover:bg-secondary-100 border-secondary-100 hover:shadow-lg">
                            <div className="p-3 mb-2 bg-primary/10 text-primary rounded-xl">
                                <CheckCircle2 strokeWidth={1.25} className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-[20px] mb-2">Technical Support</h4>
                            <p className="text-secondary-600 text-[16px]">Direct access to our chemists for TDS/SDS inquiries.</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-6 transition-colors border rounded-2xl bg-[#f1f5f8] hover:bg-secondary-100 border-secondary-100 hover:shadow-lg">
                            <div className="p-3 mb-2 bg-primary/10 text-primary rounded-xl">
                                <Beaker strokeWidth={1.25} className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-[20px] mb-2">Samples on Request</h4>
                            <p className="text-secondary-600 text-[16px]">Available for industrial testing and pilot runs.</p>
                        </div>
                        <div className="flex flex-col items-center text-center gap-3 p-6 transition-colors border rounded-2xl bg-[#f1f5f8] hover:bg-secondary-100 border-secondary-100 hover:shadow-lg">
                            <div className="p-3 mb-2 text-primary bg-primary/10 rounded-xl">
                                <Clock strokeWidth={1.25} className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-[20px] mb-2">24-Hour Response</h4>
                            <p className="text-secondary-600 text-[18px] leading-relaxed">Our commitment to a 24-hour turnaround on all RFQs.</p>
                        </div>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Contact;
