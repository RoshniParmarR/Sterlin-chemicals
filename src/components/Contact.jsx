import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-24 bg-secondary-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-medium text-secondary-900 mb-6">Get in Touch</h2>
                        <p className="text-secondary-600 mb-10 text-lg">
                            Ready to elevate your chemical supply chain? Contact our team of experts for quotes, custom formulations, or technical support.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-secondary-900 font-semibold text-lg mb-1">Headquarters</h3>
                                    <p className="text-secondary-600">123 Industrial Park Dr, Chemical Valley<br />Houston, TX 77001, USA</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-secondary-900 font-semibold text-lg mb-1">Phone</h3>
                                    <p className="text-secondary-600">+1 (555) 123-4567</p>
                                    <p className="text-secondary-500 text-sm">Mon-Fri 9am-6pm CST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-secondary-900 font-semibold text-lg mb-1">Email</h3>
                                    <p className="text-secondary-600">sales@sterlinchemicals.com</p>
                                    <p className="text-secondary-600">support@sterlinchemicals.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl border border-secondary-200 shadow-xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-secondary-600 text-sm font-medium mb-2">First Name</label>
                                    <input type="text" className="w-full bg-secondary-50 border border-secondary-300 rounded-lg px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-secondary-600 text-sm font-medium mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-secondary-50 border border-secondary-300 rounded-lg px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-secondary-600 text-sm font-medium mb-2">Email Address</label>
                                <input type="email" className="w-full bg-secondary-50 border border-secondary-300 rounded-lg px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="block text-secondary-600 text-sm font-medium mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-secondary-50 border border-secondary-300 rounded-lg px-4 py-3 text-secondary-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors" placeholder="How can we help you?"></textarea>
                            </div>

                            <button className="w-full group relative py-[10px] px-[12px] bg-primary-600 hover:bg-primary-500 rounded-full text-white text-[15px] font-semibold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer">
                                Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
