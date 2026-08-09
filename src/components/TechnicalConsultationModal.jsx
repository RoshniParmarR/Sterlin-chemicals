import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, ChevronDown } from 'lucide-react';

const TechnicalConsultationModal = ({ isOpen, onClose, category = "colloidal-silica", mode = "consultation" }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        primaryInterest: '',
        secondaryInterest: '',
        message: '',
        consent: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isPrimaryOpen, setIsPrimaryOpen] = useState(false);
    const primaryRef = useRef(null);

    const isColloidal = category === "colloidal-silica";

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                primaryInterest: '',
                secondaryInterest: ''
            }));
            setIsSuccess(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen, category]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (primaryRef.current && !primaryRef.current.contains(event.target)) {
                setIsPrimaryOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.consent) {
            alert('Please confirm your consent to proceed.');
            return;
        }
        setIsSubmitting(true);

        // Mock API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            primaryInterest: '',
            secondaryInterest: '',
            message: '',
            consent: false
        });
        setIsSuccess(false);
        onClose();
    };

    const colloidalOptions = [
        { value: "cs-paper", label: "Paper & Board (Retention & Drainage)" },
        { value: "cs-concrete", label: "Concrete & Construction" },
        { value: "cs-refractory", label: "Refractory & Ceramics" },
        { value: "cs-antiskid", label: "Anti-Skid Paper" },
        { value: "cs-coatings", label: "Coatings & Surface Treatment" },
        { value: "cs-other", label: "Other Application" },
    ];

    const nitrateOptions = [
        { value: "cn-latex", label: "Latex Coagulation" },
        { value: "cn-concrete", label: "Concrete Acceleration" },
        { value: "cn-agri", label: "Horticulture & Agriculture" },
        { value: "cn-other", label: "Other Application" },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-secondary-950/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        className="relative w-full max-w-2xl bg-white overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] rounded-[2.5rem]"
                    >
                        {/* Status Bar / Visual Accent */}
                        <div className="h-1.5 w-full bg-linear-to-r from-primary-400 via-primary-500 to-primary-600"></div>

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-8 right-8 z-10 p-2 rounded-full bg-secondary-50 text-secondary-400 hover:text-secondary-900 transition-all hover:rotate-90"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                            {!isSuccess ? (
                                <>
                                    <div className="mb-10 text-center">
                                        <div className="flex items-center justify-center gap-2 mb-4">
                                            <div className="h-[1px] w-8 bg-primary/30"></div>
                                            <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary">A sterlin chemicals Initiative</span>
                                            <div className="h-[1px] w-8 bg-primary/30"></div>
                                        </div>
                                        <h2 className="text-3xl font-bold text-secondary-900 mb-3 tracking-tight">
                                            {mode === 'quote' ? 'Request a Product Quote' : 'Request a Technical Consultation'}
                                        </h2>
                                        <p className="text-secondary-500 text-sm max-w-md mx-auto leading-relaxed">
                                            {mode === 'quote'
                                                ? 'Our sales team typically responds within 1 business day.'
                                                : 'Our in-house technical team typically responds within 1 business day.'}
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Row 1: Contact Details */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">Full Name <span className="text-primary">*</span></label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter your name"
                                                    className="w-full px-5 py-3.5 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 placeholder:text-secondary-300"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">Company <span className="text-primary">*</span></label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter company name"
                                                    className="w-full px-5 py-3.5 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 placeholder:text-secondary-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 2: Communication */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">Email Address <span className="text-primary">*</span></label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="Email"
                                                    className="w-full px-5 py-3.5 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 placeholder:text-secondary-300"
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Phone"
                                                    className="w-full px-5 py-3.5 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 placeholder:text-secondary-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Row 3: Interest Selectors */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">
                                                    Area of Interest <span className="text-primary">*</span>
                                                </label>
                                                <div className="relative" ref={primaryRef}>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="primaryInterest"
                                                        id="primaryInterest"
                                                        autoComplete="off"
                                                        value={formData.primaryInterest}
                                                        onChange={handleInputChange}
                                                        onClick={() => setIsPrimaryOpen(!isPrimaryOpen)}
                                                        readOnly={(isColloidal ? colloidalOptions : nitrateOptions)
                                                            .filter(opt => opt.label !== 'Other Application')
                                                            .some(opt => opt.label === formData.primaryInterest)}
                                                        placeholder="Select application area"
                                                        className={`w-full px-5 py-3.5 pr-12 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 placeholder:text-secondary-300 ${(isColloidal ? colloidalOptions : nitrateOptions).filter(opt => opt.label !== 'Other Application').some(opt => opt.label === formData.primaryInterest) ? 'cursor-pointer' : 'cursor-text'}`}
                                                    />
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-secondary-400">
                                                        <ChevronDown size={18} className={`transition-transform duration-200 ${isPrimaryOpen ? 'rotate-180' : ''}`} />
                                                    </div>

                                                    {isPrimaryOpen && (
                                                        <div className="absolute z-50 w-full mt-2 overflow-hidden bg-white border shadow-2xl border-secondary-100 rounded-2xl ring-1 ring-black/5 top-full">
                                                            <div className="py-2 max-h-60 overflow-y-auto custom-scrollbar">
                                                                {(isColloidal ? colloidalOptions : nitrateOptions).map(opt => (
                                                                    <div
                                                                        key={opt.value}
                                                                        className={`px-5 py-3 text-sm cursor-pointer transition-colors hover:bg-primary hover:text-white ${formData.primaryInterest === opt.label ? 'bg-secondary-50 font-medium' : 'text-secondary-600'}`}
                                                                        onClick={() => {
                                                                            if (opt.label === 'Other Application') {
                                                                                setFormData(prev => ({ ...prev, primaryInterest: '' }));
                                                                                document.getElementById('primaryInterest').focus();
                                                                            } else {
                                                                                setFormData(prev => ({ ...prev, primaryInterest: opt.label }));
                                                                            }
                                                                            setIsPrimaryOpen(false);
                                                                        }}
                                                                    >
                                                                        {opt.label}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="group">
                                                <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">
                                                    Other Products
                                                </label>
                                                <select
                                                    name="secondaryInterest"
                                                    value={formData.secondaryInterest}
                                                    onChange={handleInputChange}
                                                    className="w-full px-5 py-3.5 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 appearance-none cursor-pointer"
                                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23C7D2D9' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1.25rem center', backgroundSize: '1rem', backgroundRepeat: 'no-repeat' }}
                                                >
                                                    <option value="">Select Option</option>
                                                    <option value="lithium">Lithium Silicates</option>
                                                    <option value="oem">OEM / Private Label Supply</option>
                                                    <option value="other">Other Enquiry</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Requirement Text */}
                                        <div className="group">
                                            <label className="text-[10px] font-bold text-secondary-400 uppercase tracking-widest block mb-2 px-1">Your Requirement <span className="text-primary">*</span></label>
                                            <textarea
                                                required
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Enter requirements"
                                                className="w-full px-5 py-3.5 bg-secondary-50/50 border border-secondary-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-secondary-900 min-h-[140px] placeholder:text-secondary-300 resize-none"
                                            />
                                        </div>

                                        {/* Consent and Submit */}
                                        <div className="pt-2">
                                            <div className="flex items-start gap-4 mb-8">
                                                <div className="relative flex items-center justify-center pt-1">
                                                    <input
                                                        required
                                                        type="checkbox"
                                                        id="consent"
                                                        name="consent"
                                                        checked={formData.consent}
                                                        onChange={handleInputChange}
                                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-secondary-200 bg-secondary-50 transition-all checked:bg-primary checked:border-primary"
                                                    />
                                                    <div className="pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <label htmlFor="consent" className="text-[11px] text-secondary-500 leading-relaxed cursor-pointer select-none">
                                                    I consent to sterlin chemicals storing and using my details to respond to this enquiry. We do not share your information with third parties.
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full group relative flex items-center justify-center gap-3 py-4.5 bg-secondary-900 text-white rounded-[1.25rem] font-bold overflow-hidden transition-all hover:bg-secondary-800 active:scale-[0.98] shadow-lg shadow-secondary-900/20"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-100%] group-hover:translate-x-[100%] duration-1000"></div>
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                                ) : (
                                                    <>
                                                        <Send size={18} className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                        <span>{mode === 'quote' ? 'Submit Quotation Request' : 'Submit Consultation Request'}</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>

                                    <div className="mt-8 text-center">
                                        <p className="text-[10px] text-secondary-400 font-medium tracking-wider uppercase">ISO 9001:2015 Certified · Gujarat, India</p>
                                    </div>
                                </>
                            ) : (
                                <div className="py-20 text-center">
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary mb-8"
                                    >
                                        <CheckCircle2 size={48} strokeWidth={1.5} />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold text-secondary-900 mb-4">Thank you for reaching out.</h3>
                                    <p className="text-secondary-600 max-w-sm mx-auto mb-10 leading-relaxed">
                                        {mode === 'quote'
                                            ? 'Your quote request has been received. A member of our sales team will contact you within one business day.'
                                            : 'Your consultation request has been received. A member of our technical team will contact you within one business day.'}
                                    </p>
                                    <button
                                        onClick={resetForm}
                                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary-50 hover:bg-secondary-100 text-secondary-900 font-bold rounded-2xl transition-all"
                                    >
                                        Submit Another Enquiry
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default TechnicalConsultationModal;
