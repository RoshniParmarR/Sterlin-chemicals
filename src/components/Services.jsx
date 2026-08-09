import React from 'react';
import { motion } from 'framer-motion';
import { TestTubes, Search, Truck, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Search className="w-10 h-10 text-white" />,
            title: "R&D Solutions",
            desc: "Our state-of-the-art laboratories provide comprehensive research and development services to help you innovate faster."
        },
        {
            icon: <TestTubes className="w-10 h-10 text-white" />,
            title: "Quality Testing",
            desc: "Rigorous analytical testing and quality control ensures every batch meets the highest industry standards."
        },
        {
            icon: <Zap className="w-10 h-10 text-white" />,
            title: "Custom Manufacturing",
            desc: "Flexible manufacturing capabilities allowing for scalable production from pilot batches to large-scale supply."
        },
        {
            icon: <Truck className="w-10 h-10 text-white" />,
            title: "Global Logistics",
            desc: "End-to-end supply chain management ensuring safe, compliant, and timely delivery worldwide."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-secondary-50 via-white to-primary/10 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6"
                    >
                        Capabilities & <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[22px] text-secondary-600 max-w-2xl mx-auto"
                    >
                        Beyond products, we deliver comprehensive solutions empowering your business to succeed in a competitive landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-6 p-8 rounded-2xl glass hover:bg-secondary-50 transition-all duration-300 border border-secondary-200 hover:border-primary/30 group cursor-pointer"
                        >
                            <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-secondary-600 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
