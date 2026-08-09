import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Ship, Clock, CheckCircle2 } from 'lucide-react';

import chemicalImg from '../assets/Logistics.png';

const GlobalFulfilment = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-white">
            {/* World Map Background Pattern - Abstract */}
            {/* <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div> */}

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

                {/* Centered Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 bg-white border rounded-full shadow-sm lg:mb-4 border-primary/20 text-primary w-fit">
                        <span className="text-[14px] tracking-wider text-center uppercase font-semibold">Strategic Global Fulfilment</span>
                    </div>

                    <h2 className="mb-10 text-3xl font-medium leading-tight lg:text-[48px] text-secondary-900">
                        7-Day Dispatch <span className="text-transparent bg-clip-text bg-primary">Global Reach</span>
                    </h2>
                </motion.div>
                {/* image */}
                <div className="grid items-center grid-cols-1 gap-12 md:items-stretch lg:items-center md:grid-cols-2 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <div className="flex items-center justify-center w-full h-full">
                            <img src={chemicalImg} alt="Chemical" className="object-cover w-full h-full max-h-[400px] md:max-h-none md:h-full lg:max-h-[400px] max-w-[550px] rounded-3xl shadow-xl" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center pt-6 text-center md:items-start md:text-left"
                    >
                        <p className="mb-6 text-[18px] leading-relaxed text-secondary-600">
                            From our manufacturing base in Ankleshwar, Gujarat, we provide a seamless bridge to international markets. Our proximity to India's premier logistical hubs allows us to maintain an industry-leading dispatch timeline.
                        </p>

                        <div className="space-y-6">
                            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 border rounded-full bg-primary/10 border-primary/20 md:w-8 md:h-8 lg:w-8 lg:h-8">
                                    <Ship className="w-8 h-8 text-primary md:w-5 md:h-5 lg:w-5 lg:h-5" />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-[20px] font-bold text-secondary-900">Strategic Exit Ports</h4>
                                    <p className="text-[18px] leading-relaxed text-secondary-600">Direct access to Hazira and Nhava Sheva for rapid global transit.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 border rounded-full bg-primary/10 border-primary/20 md:w-8 md:h-8 lg:w-8 lg:h-8">
                                    <CheckCircle2 className="w-8 h-8 text-primary md:w-5 md:h-5 lg:w-5 lg:h-5" />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-[20px] font-bold text-secondary-900">Export Ready</h4>
                                    <p className="text-[18px] leading-relaxed text-secondary-600">Fully streamlined documentation and ISO 9001:2015 quality protocols for hassle-free international supply chains.</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mt-1 border rounded-full bg-primary/10 border-primary/20 md:w-8 md:h-8 lg:w-8 lg:h-8">
                                    <Globe2 className="w-8 h-8 text-primary md:w-5 md:h-5 lg:w-5 lg:h-5" />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-[20px] font-bold text-secondary-900">Industrial Scale</h4>
                                    <p className="text-[18px] leading-relaxed text-secondary-600">Batch-to-Batch Perfection.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GlobalFulfilment;
