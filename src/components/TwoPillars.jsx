import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import calciumNitrateImg from '../assets/calcium nitrate 1.png';
import microtecImg from '../assets/microtech collidal silica.png';

const TwoPillars = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-[#f1f5f8]" id="products">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 uppercase bg-white border rounded-full shadow-md border-primary/20 text-primary">
                        <span className="text-[14px] tracking-wider uppercase font-semibold">Product Solutions</span>
                    </div>
                    <h2 className="mb-10 text-3xl lg:text-[48px] font-medium leading-tight text-secondary-900">
                        Engineered for <span className="text-primary">Perfection</span>
                    </h2>
                </motion.div>

                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center gap-10 md:flex-row"
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={calciumNitrateImg}
                                alt="Diamond Calcium Nitrate"
                                className="object-cover w-full shadow-lg h-85 lg:h-75 rounded-3xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="mb-6 text-3xl font-medium text-secondary-900">
                             <span className="text-3xl font-medium text-primary">Diamond</span>   Calcium Nitrate 
                            </h3>
                            <p className="mb-8 text-[18px] leading-relaxed text-secondary-700">
                                The Purity Leader: High-purity Calcium Nitrate engineered for zero-defect manufacturing.
                            </p>

                            <div className="mb-8 space-y-4">
                                <div className="flex items-start text-[18px] gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                                    <p className="text-secondary-700"><span className="font-semibold text-secondary-900">Available Forms:</span> Crystalline & Aqueous.</p>
                                </div>
                                <div className="flex items-start text-[18px] gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                                    <p className="text-secondary-700"><span className="font-semibold text-secondary-900">Key Industries:</span> Latex, Construction, Oil & Gas, Explosives.</p>
                                </div>
                            </div>

                            <Link to="/products/calcium-nitrate" className="group  lg:w-[60%] w-full px-[24px]  relative py-2.5  bg-primary hover:bg-primary-600 rounded-full text-black text-[15px] font-bold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                                Explore Diamond Calcium Nitrate
                                <ArrowRight size={20} className="hidden transition-transform lg:block group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-10 md:flex-row-reverse"
                    >
                        <div className="w-full md:w-1/2">
                            <img
                                src={microtecImg}
                                alt="Microtec Colloidal Silica"
                                className="object-cover w-full shadow-lg h-85 lg:h-75 rounded-3xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="mb-6 text-3xl font-medium text-secondary-900">
                           <span className="text-3xl font-medium text-primary">Microtec</span>     Colloidal Silica 
                            </h3>
                            <p className="mb-8 text-[18px] leading-relaxed text-secondary-700">
                                The Nano-Specialist: Versatile Colloidal Silica sols designed for high-precision binding and reinforcement.
                            </p>

                            <div className="mb-8 space-y-4">
                                <div className="flex items-start text-[18px] gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                                    <p className="text-secondary-700"><span className="font-semibold text-secondary-900">Customization:</span> Adjustable Particle Size, pH, and Concentration.</p>
                                </div>
                                <div className="flex items-start text-[18px] gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></div>
                                    <p className="text-secondary-700"><span className="font-semibold text-secondary-900">Key Industries:</span> Paper, Concrete, Refractories, Investment Casting.</p>
                                </div>
                            </div>

                            <Link to="/products/colloidal-silica" className="group lg:w-[60%] w-full relative py-2.5 px-[24px]  bg-primary hover:bg-primary-600 rounded-full text-black text-[15px] font-bold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                                Explore Microtec Series
                                <ArrowRight size={20} className="hidden transition-transform lg:block group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TwoPillars;
