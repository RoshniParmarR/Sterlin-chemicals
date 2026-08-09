import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Atom } from 'lucide-react';
import aboutImage from '../assets/240_F_373409163_mD9mOzI3F10TCpuwMtrKSRfkTQx1IMxv.jpg';

const About = () => {


    return (
        <section className="relative py-24 overflow-hidden bg-transparent">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-px bg-secondary-200"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-secondary-200"></div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                {/* Header Section (Centered) */}
                <div className="mb-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 bg-white border rounded-full shadow-md border-primary/20 text-primary"
                    >
                        <span className="text-[14px] tracking-wide">About sterlin chemicals</span>
                    </motion.div>

                    <h2 className="max-w-4xl mx-auto mb-10 text-3xl lg:text-[48px] font-medium leading-tight text-secondary-900">
                        Pioneering the Future of <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-400">Chemical Innovation</span>
                    </h2>
                </div>

                {/* Core Description (Left Aligned / Full Width) */}
                <div className="mb-20">
                    <div className="max-w-6xl space-y-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base leading-relaxed text-justify text-secondary-600"
                        >
                            sterlin chemicals is an Indian manufacturer and global supplier of colloidal silica and calcium nitrate tetrahydrate, supplying multiple industrial grades used across paper, paints, construction, refractories, catalysts, and specialty chemical applications.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base leading-relaxed text-justify text-secondary-600"
                        >
                            We operate as a manufacturing-led, qualification-focused supplier to repeat-use industrial systems.
                        </motion.p>
                    </div>
                </div>

                <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <div className="relative z-10 rounded-[32px] overflow-hidden shadow-2xl group">
                            <img
                                src={aboutImage}
                                alt="Modern Laboratory"
                                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-secondary-900/40"></div>
                        </div>
                    </motion.div>

                    {/* Right Column: Technical Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="bg-transparent py-10 rounded-[40px] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 transition-all duration-500 group-hover:w-40 group-hover:h-40"></div>

                            <h3 className="flex items-center justify-center gap-3 mb-8 text-xl font-black lg:text-2xl text-secondary-900 lg:justify-start">
                                Manufactured Products
                            </h3>

                            <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 mb-6 leading-[1.1]">Your Extended <br /><span className="text-primary">Business Partner</span></h2>
                            <div className="max-w-6xl space-y-6">
                                <p className="text-base leading-relaxed text-justify text-secondary-600">
                                    sterlin chemicals manufactures a focused portfolio of chemical inputs—including colloidal silica and calcium nitrate tetrahydrate—designed for industrial systems where material behaviour cannot be treated as interchangeable.
                                </p>
                                <p className="text-base leading-relaxed text-justify text-secondary-600">
                                    Although these materials differ in chemistry and scale, they are manufactured and supplied based on process sensitivity, performance variability, and downstream risk.
                                </p>
                                <p className="text-base leading-relaxed text-justify text-secondary-600">
                                    These products are supplied within defined process environments, with selection driven by operating conditions rather than generic material substitution.
                                </p>
                            </div>

                            <div className="pt-10">
                                <button className="group relative w-full sm:w-auto py-[10px] px-8 bg-secondary-900 hover:bg-primary rounded-full text-white text-[15px] font-bold border border-[#444444] transition-colors duration-500 flex items-center justify-center gap-3 cursor-pointer">
                                    View product families and grades
                                    <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-2" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
