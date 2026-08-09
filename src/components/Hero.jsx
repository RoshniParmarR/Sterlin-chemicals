import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker, Atom } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/WhatsApp Video 2026-04-07 at 5.00.06 PM.mp4';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const applyPlaybackRate = () => {
            video.playbackRate = 0.75;
        };

        applyPlaybackRate();
        video.addEventListener('loadedmetadata', applyPlaybackRate);

        return () => {
            video.removeEventListener('loadedmetadata', applyPlaybackRate);
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center w-full min-h-screen overflow-hidden bg-secondary-950">

            {/* Hero Video Background */}
            <div className="absolute inset-0 pointer-events-none">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 object-cover w-full h-full scale-125"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-linear-to-b from-secondary-950/60 via-secondary-950/30 to-secondary-950/60"></div>
                <div className="absolute inset-0 bg-secondary-900/20"></div>
            </div>

            {/* Background Animated Elements - Subtle Glows */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full filter blur-[100px] opacity-[0.15]"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight * -1],
                            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth + 100],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 500 + 200 + 'px',
                            height: Math.random() * 500 + 200 + 'px',
                            background: i % 2 === 0 ? 'var(--color-primary-500)' : 'var(--color-accent-500)',
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col items-center px-4 pt-20 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">


                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] max-w-3xl mx-auto"
                >
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 via-accent-300 to-primary-400 animate-gradient-x">
                        Precision Chemistry  <br /><span className="text-white">Proven Reliability</span>   <span className="text-[#0cc0df]">Global Scale</span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-[14px] md:text-[16px] lg:text-[18px] text-white/90 font-medium mb-8 max-w-3xl mx-auto tracking-wide leading-relaxed"
                >
                    sterlin chemicals is a dedicated manufacturer of high-purity Calcium Nitrate
                    Tetrahydrate and specialized Colloidal Silica sols. Under our Diamond and Microtec brands, we engineer
                    custom-grade chemicals for the world's most critical industrial processes—from Latex and Construction
                    to Paints and Paper.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <Link
                        to="/products/calcium-nitrate"
                        className="group relative py-2.5 px-8 bg-primary hover:bg-primary-600 rounded-full text-black text-[15px] font-bold border border-[#444444] transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Calcium Nitrate
                    </Link>

                    <Link
                        to="/products/colloidal-silica"
                        className="py-2.5 px-8 border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 rounded-full text-white text-[15px] font-bold transition-colors duration-300 items-center justify-center gap-2 cursor-pointer flex"
                    >
                        Colloidal Silica

                    </Link>
                </motion.div>
            </div>

        </div >
    );
};

export default Hero;
