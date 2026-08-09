import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 9998,
                            background: 'rgba(2,8,23,0.6)',
                            backdropFilter: 'blur(4px)',
                        }}
                    />

                    {/*
                        Centering wrapper — plain div, NO framer motion (keeps transform clean).
                        The motion.div inside only animates opacity + scale (no y).
                    */}
                    <div
                        key="modal-wrapper"
                        style={{
                            position: 'fixed',
                            top: '1px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 9999,
                            width: '100%',
                            maxWidth: '24rem',
                            padding: '1rem',
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
                            className="relative overflow-hidden bg-white border shadow-2xl rounded-2xl border-secondary-100"
                        >
                            {/* Top gradient bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />

                            <div className="px-6 pt-6 pb-5 text-center">
                                {/* Checkmark icon */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                                    className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-green-50 text-green-500"
                                >
                                    <CheckCircle2 className="w-6 h-6" />
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-1 text-lg font-bold text-secondary-900"
                                >
                                    Message Sent!
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mb-5 text-sm text-secondary-600"
                                >
                                    Our team will get back to you within 24 hours.
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onClose}
                                    className="w-full group relative py-2.5 px-8 bg-primary hover:bg-primary-600 rounded-full text-black text-[15px] font-bold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Great, Thanks!
                                </motion.button>
                            </div>

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute p-1.5 transition-colors rounded-full top-3 right-3 text-secondary-400 hover:text-secondary-600 hover:bg-secondary-50"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default SuccessModal;
