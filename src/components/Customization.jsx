import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import latexHome from '../assets/photos/Latex Application.jpg';
import paperConcrete from '../assets/paper-concrete.jpeg';
import investmentCasting from '../assets/photos/investment casting.jpeg';


const Customization = () => {
    const features = [
        {
            title: "For Latex Manufacturers",
            desc: "Our Diamond Calcium Nitrate utilizes a Proprietary Multi-Stage Purification System to achieve 0% organic impurity, eliminating \"pinhole\" defects and staining where standard coagulants fail.",
            image: latexHome
        },
        {
            title: "For Investment Casting & Refractories",
            desc: "We manipulate Surface Area and pH Stability to create superior binders. Our Microtec solutions ensure structural integrity under extreme thermal stress, preventing the costly mould cracking and shell failures associated with generic alternatives.",
            image: investmentCasting
        },
        {
            title: "For Paper & Concrete",
            desc: "Our Microtec Colloidal Silica is engineered for specific Nano-Microstructures, improving retention efficiency in paper and densifying the capillary pores in high-performance concrete to ensure long-term durability.",
            image: paperConcrete
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-white">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-secondary-50/30 to-white opacity-70"></div>

            <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 bg-white border rounded-full shadow-md border-primary/20 text-primary"
                    >
                        <span className="text-[14px] tracking-wider uppercase font-semibold">The Customization Advantage</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mb-5 text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-tight"
                    >
                        Beyond the Commodity <br />
                        <span className="text-transparent bg-clip-text bg-primary">
                            We Engineer to Your Specification
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-secondary-600 text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        In a market of generic, "off-the-shelf" suppliers, sterlin chemicals stands apart through technical agility. We don't just ship drums and bags; we solve process challenges by tuning our chemistry to your specific operational needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="relative p-8 transition-all duration-300 border shadow-sm border-secondary-200 rounded-2xl hover:border-primary-200 hover:shadow-lg group text-center lg:text-left overflow-hidden min-h-[350px] md:min-h-[450px] lg:min-h-[350px] flex flex-col justify-start"
                            style={{
                                backgroundImage: `url(${feature.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay for legibility */}
                            <div className="absolute inset-0 transition-opacity duration-300 bg-black/60 group-hover:bg-black/70"></div>

                            <div className="relative z-10">
                                <h3 className="mb-4 text-[20px] font-bold transition-colors text-white group-hover:text-primary">
                                    {feature.title}
                                </h3>
                                <p className="text-white/90 leading-relaxed text-[18px]">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border rounded-full shadow-sm border-primary/20">
                        <CheckCircle className="hidden w-5 h-5 lg:block text-primary" />
                        <p className="font-medium text-secondary-700">
                            You define the specification; we ensure the consistency.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Customization;
