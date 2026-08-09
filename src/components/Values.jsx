import React from 'react';
import { ShieldCheck, Award, Globe, CheckCircle } from 'lucide-react';

const Values = () => {
    const values = [
        { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Safety First", desc: "Rigorous safety protocols in every process ensuring zero harm." },
        { icon: <Award className="w-8 h-8 text-primary" />, title: "Quality Certified", desc: "ISO 9001:2015 certified manufacturing with strict QA checks." },
        { icon: <Globe className="w-8 h-8 text-primary" />, title: "Global Reach", desc: "Serving clients in over 50 countries with reliable logistics." },
        { icon: <CheckCircle className="w-8 h-8 text-primary" />, title: "Sustainability", desc: "Eco-friendly production methods minimizing environmental impact." },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]"></div>
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-primary/20 text-primary mb-8 mx-auto">
                        <span className="text-[14px]  tracking-wide">Our Core Values</span>
                    </div>
                    <h2 className="text-3xl lg:text-[48px] font-medium text-secondary-900 leading-tight mb-10 max-w-4xl mx-auto">
                        What is Driving Us <br className="hidden lg:block" />
                        <span className="text-primary">Forward</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-8 rounded-2xl bg-secondary-50 hover:bg-white border border-secondary-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform bg-white shadow-sm">
                                {item.icon}
                            </div>
                            <h4 className="text-secondary-900 font-bold text-xl mb-3">{item.title}</h4>
                            <p className="text-secondary-600 text-[18px] leading-relaxed  ">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
