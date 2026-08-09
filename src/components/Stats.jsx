import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    const stats = [
        {
            title: "30+ Years of Excellence",
            desc: "Establishing technical leadership in the Indian chemical market since 1993."
        },
        {
            title: "Application-Specific Purity",
            desc: "From 0% organic impurities to custom nano-silica structures."
        },
        {
            title: "High-Precision Capacity",
            desc: "Scalable industrial output with 100% batch-to-batch consistency."
        },
        {
            title: "7-Day Global Dispatch",
            desc: "Rapid fulfilment via strategic proximity to Hazira and Nhava Sheva ports."
        },
    ];

    return (
        <section className="relative pt-10 pb-10 overflow-hidden lg:py-20 bg-[#2a7baa]">
            {/* Hexagonal Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-multiply"></div>

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col items-center px-4"
                        >
                            <div className="relative z-10 flex items-center justify-center mb-3 text-xl font-bold tracking-wide text-white md:text-2xl">
                                {stat.title}
                            </div>
                            <div className="relative z-10 max-w-xs  tracking-wide mx-auto text-[16px] leading-relaxed text-primary-100">
                                {stat.desc}
                            </div>
                            {/* Mobile Separator Line */}
                            {index < stats.length - 1 && (
                                <div className="w-1/2 h-px mt-6 bg-white/20 md:hidden"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
