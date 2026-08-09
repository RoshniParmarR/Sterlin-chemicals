import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
                <h2 className="text-3xl lg:text-[48px] font-medium text-secondary-900 leading-tight mb-6 max-w-4xl mx-auto">
                    Validate the
                    <span className="text-transparent bg-clip-text bg-primary"> Specification</span>
                </h2>
                <p className="text-secondary-600 text-[18px] mb-10 max-w-2xl mx-auto leading-relaxed">
                    We provide technical samples for laboratory testing and plant trials globally. Experience the Sterlin standard of consistency firsthand before you scale.
                </p>
                <div className="flex justify-center">
                    <Link
                        to="/contact#contact-form"
                        className="group relative py-[10px] px-8 bg-[#38b6ff] hover:bg-[#009ee2] rounded-full text-black text-[15px] font-bold  transition-colors duration-300 flex items-center justify-center gap-2 mx-auto cursor-pointer"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
