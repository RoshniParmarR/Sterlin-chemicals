import React from 'react';
import { motion } from 'framer-motion';
import CircularGallery from './CircularGallery';

const Testimonials = () => {
    // Data matches the User Reference Image structure
    const testimonialCards = [
        {
            name: "Sarah Johnson",
            role: "Technical Lead",
            text: "Reliable, consistent, and fast. sterlin chemicals is the partner we needed for our high-speed manufacturing lines. Their consistency in purity and delivery timing is unmatched in the industry."
        },
        {
            name: "Michael Chen",
            role: "Supply Chain Manager",
            text: "sterlin chemicals has revolutionized our supply chain. Their consistency in purity is unmatched. Absolutely love working with this team for our global logistics needs."
        },
        {
            name: "David Miller",
            role: "Chief Scientist",
            text: "The technical support and ease of logistics are simply unmatched. Standardized purity that our lab research relies on. Truly a world-class chemical partner."
        },
        {
            name: "Elena Rodriguez",
            role: "Quality Assurance",
            text: "Custom formulations that solved our most complex industrial challenges. Highly recommended for any serious manufacturing operation requiring precision chemicals."
        },
        {
            name: "James Wilson",
            role: "Operations Director",
            text: "Consistency in timing and quality. sterlin chemicals is a leader in industrial grade solvents. Their delivery network handles our bulk requirements perfectly."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-200 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-200 rounded-full blur-[140px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-16"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-500 text-[14px] font-semibold mb-6 uppercase tracking-widest">
                        Testimonials
                    </div>
                    <h2 className="text-3xl md:text-[48px] font-medium text-secondary-900 mb-6 tracking-tight">
                        What Our Customers Say
                    </h2>
                    <p className="text-secondary-400 text-[20px] md:text-[22px] font-medium max-w-2xl mx-auto">
                        Hear from our incredible customers who are building at lightning speed.
                    </p>
                </motion.div>

                {/* Circular Gallery Stage */}
                <div className="relative h-[650px] w-full mt-[-20px]">
                    <CircularGallery
                        items={testimonialCards}
                        bend={0.3} // Significantly decreased curve for a flatter, line-like appearance
                        borderRadius={0.05}
                        scrollSpeed={2}
                        scrollEase={0.05}
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
