import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/sterlin-logo-blue.png';
import logoBold from '../assets/sterlin-logo-white.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isInHero, setIsInHero] = useState(true);
    const [activeLink, setActiveLink] = useState('Home');
    const [activeDropdown, setActiveDropdown] = useState(null); // 'products', 'applications', or null
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null); // null or link name
    const [isSticky, setIsSticky] = useState(false);
    const location = useLocation();
    const dropdownRef = React.useRef(null);
    const lastScrollYRef = React.useRef(0);

    const STICKY_THRESHOLD = 120;
    const SCROLL_DELTA = 8;

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (location.pathname.includes('/applications')) {
            setActiveLink('Application');
        } else if (location.pathname.startsWith('/products')) {
            setActiveLink('Products');
        } else if (location.pathname === '/about') {
            setActiveLink('About');
        } else if (location.pathname === '/manufacturing-quality') {
            setActiveLink('Manufacturing & Quality');
        } else if (location.pathname === '/contact') {
            setActiveLink('Contact');
        } else if (location.pathname === '/' && location.hash === '') {
            setActiveLink('Home');
        }
        setActiveDropdown(null);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const isHomePage = location.pathname === '/';
            const heroEndThreshold = Math.max(window.innerHeight - 120, STICKY_THRESHOLD);
            const topSectionThreshold = isHomePage ? heroEndThreshold : STICKY_THRESHOLD;
            const currentlyInTopSection = currentScrollY < topSectionThreshold;

            setIsInHero(currentlyInTopSection);

            if (isHomePage) {
                setActiveLink('Home');
            }

            // At the top section: keep the navbar transparent and in flow.
            if (currentlyInTopSection) {
                setIsSticky(false);
                setIsVisible(true);
                lastScrollYRef.current = currentScrollY;
                return;
            }

            // Past hero: navbar is fixed and can hide/show on scroll direction.
            setIsSticky(true);

            // Show on scroll up, hide on intentional scroll down.
            const scrollingDown = currentScrollY > lastScrollYRef.current + SCROLL_DELTA;
            const scrollingUp = currentScrollY < lastScrollYRef.current - SCROLL_DELTA;

            if (scrollingDown) {
                setIsVisible(false);
            } else if (scrollingUp) {
                setIsVisible(true);
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/#products', hasDropdown: true, dropdownList: 'products' },
        { name: 'Application', href: '#', hasDropdown: true, dropdownList: 'applications' },
        { name: 'Manufacturing & Quality', href: '/manufacturing-quality' },
        { name: 'Contact', href: '/contact' },
    ];

    const dropdownData = {
        products: [
            {
                name: 'Daimond Calcium Nitrate',
                path: '/products/calcium-nitrate',
                hoverColor: 'group-hover/item:text-primary',
                desc: 'High-purity crystalline and aqueous solutions for industrial precision.'
            },
            {
                name: 'Microtec Colloidal Silica',
                path: '/products/colloidal-silica',
                hoverColor: 'group-hover/item:text-primary',
                desc: 'Nano-scale Microtec sols engineered for high-stakes applications.'
            }
        ],
        applications: [
            {
                name: ' Daimond Calcium Nitrate Applications',
                path: '/products/calcium-nitrate/applications',
                hoverColor: 'group-hover/item:text-primary',
                desc: 'Mission-critical industrial applications of high-purity Calcium Nitrate.'
            },
            {
                name: ' Microtec Colloidal Silica Applications',
                path: '/products/colloidal-silica/applications',
                hoverColor: 'group-hover/item:text-primary',
                desc: 'Engineered precision for Paper, Coatings, and Construction.'
            }
        ]
    };

    const navPadding = (!isSticky && !isOpen) ? 'lg:py-8 py-4' : 'lg:py-4 py-2';
    const hasSolidBackground = isOpen || isSticky;
    const useLightTheme = hasSolidBackground;
    const navStyle = {
        position: isSticky ? 'fixed' : 'absolute',
        backgroundColor: hasSolidBackground ? '#ffffff' : 'transparent',
        boxShadow: hasSolidBackground && isSticky ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 'none',
        borderBottom: hasSolidBackground && isSticky ? '1px solid rgba(15, 23, 42, 0.08)' : 'none',
    };

    return (
        <nav
            style={navStyle}
            className={`w-full z-50 transform transition-[transform,background-color,box-shadow,border-color]  ${isSticky && !isVisible ? '-translate-y-full' : 'translate-y-0'}`}
        >

            <div className={`px-4 ${navPadding} mx-auto max-w-7xl sm:px-6 lg:px-8`}>
                <div className="flex items-center justify-between">
                    <div className="flex cursor-pointer ">
                        <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0">

                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={useLightTheme ? 'logo-dark' : 'logo-light'}
                                    src={useLightTheme ? logo : logoBold}
                                    alt="Sterlin Chemicals Logo"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative inset-0 object-contain object-left w-48 h-14 lg:w-[250px] lg:h-auto"
                                />
                            </AnimatePresence>

                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <div className="flex items-baseline ml-10 space-x-4" ref={dropdownRef}>
                            {navLinks.map((link) => {
                                const isActive = activeLink === link.name;
                                const isDropdownOpen = activeDropdown === link.dropdownList;

                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.dropdownList)}
                                        onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
                                    >
                                        <Link
                                            to={link.hasDropdown ? '#' : link.href}
                                            onClick={(e) => {
                                                if (link.hasDropdown) {
                                                    e.preventDefault();
                                                    setActiveDropdown(isDropdownOpen ? null : link.dropdownList);
                                                } else {
                                                    setIsOpen(false);
                                                    setActiveLink(link.name);
                                                    setActiveDropdown(null);
                                                }
                                            }}

                                            className={`px-3 py-2 rounded-md text-[16px] font-medium tracking-wide transition-all duration-300 relative group cursor-pointer flex items-center gap-1
                                                ${useLightTheme
                                                    ? (isActive ? 'text-primary bg-secondary-900/5' : 'text-secondary-600 hover:text-primary hover:bg-secondary-900/5')
                                                    : (isActive ? 'text-white bg-white/10' : 'text-white/90 hover:text-white hover:bg-white/10')}`}
                                        >
                                            <span className="flex items-center gap-1">
                                                {link.name}
                                                {link.hasDropdown && (
                                                    <ChevronDown
                                                        size={16}
                                                        className={`transition-transform duration-300 `}
                                                    />
                                                )}
                                            </span>
                                            <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 
                                                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                                ${useLightTheme
                                                    ? 'bg-primary'
                                                    : (isActive ? 'bg-primary' : 'bg-white')}`}>
                                            </span>
                                        </Link>

                                        {/* Dropdown Box */}
                                        {link.hasDropdown && (
                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <>
                                                        <div
                                                            className="absolute left-0 w-full h-4 top-full"
                                                            aria-hidden="true"
                                                        />
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            exit={{ opacity: 0, y: 10 }}
                                                            className="absolute z-50 p-4 mt-6 overflow-hidden -translate-x-1/2 border shadow-2xl left-1/2 top-full bg-white/90 backdrop-blur-2xl rounded-3xl border-white/20 w-max"
                                                        >
                                                            <div className="grid grid-cols-1 gap-2">
                                                                    {dropdownData[link.dropdownList].map((item) => {
                                                                        const isItemActive = location.pathname === item.path;
                                                                        return (
                                                                            <Link
                                                                                key={item.name}
                                                                                to={item.path}
                                                                                onClick={() => setActiveDropdown(null)}
                                                                                className={`flex px-4 py-2 transition-all duration-300 border border-transparent group/item rounded-2xl ${isItemActive ? 'bg-secondary-50 border-secondary-100' : 'hover:bg-secondary-50 hover:border-secondary-100'}`}
                                                                            >
                                                                                <h4 className={`text-[16px] md:text-[18px] font-medium transition-colors duration-300 ${isItemActive ? 'text-primary' : `text-secondary-500 ${item.hoverColor}`}`}>
                                                                                    {item.name}
                                                                                </h4>
                                                                            </Link>
                                                                        );
                                                                    })}
                                                            </div>
                                                        </motion.div>
                                                    </>
                                                )}
                                            </AnimatePresence>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex -mr-2 lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 ${isOpen ? 'text-secondary-900' : useLightTheme ? 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-200' : 'text-white/80 hover:text-white hover:bg-white/10'}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden"
                    >
                        <div className="px-2 pt-0 pb-3 space-y-1 bg-white sm:px-3">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.hasDropdown ? (
                                        <div
                                            className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md text-base font-medium tracking-wide cursor-pointer ${activeLink === link.name ? 'text-primary ' : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100'}`}
                                            onClick={() => {
                                                setMobileDropdownOpen(mobileDropdownOpen === link.name ? null : link.name);
                                            }}
                                        >
                                            {link.name}
                                            <ChevronRight size={18} className={`transition-transform ${mobileDropdownOpen === link.name ? 'rotate-90' : ''}`} />
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className={`block px-3 py-2 rounded-md text-base font-medium tracking-wide cursor-pointer ${activeLink === link.name ? 'text-primary ' : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100'}`}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setActiveLink(link.name);
                                                setActiveDropdown(null);
                                                setMobileDropdownOpen(null);
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {/* Mobile Dropdown */}
                                    {link.hasDropdown && mobileDropdownOpen === link.name && (
                                        <div className="pl-6 mt-1 space-y-1">
                                            {dropdownData[link.dropdownList].map((item) => {
                                                const isItemActive = location.pathname === item.path;
                                                return (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        className={`block px-3 py-2 text-[14px] rounded-md transition-colors ${isItemActive ? 'text-primary bg-secondary-50' : 'text-secondary-500 hover:text-primary hover:bg-secondary-50'}`}
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setMobileDropdownOpen(null);
                                                            setActiveDropdown(null);
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
