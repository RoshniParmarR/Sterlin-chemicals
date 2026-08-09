import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronUp } from 'lucide-react';
// import logo from '../assets/blackpng .png';
import logo from '../assets/sterlin-logo-blue.png';

import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <footer className="pt-16 pb-4 bg-secondary-700 border-t border-secondary-200">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Mobile: Centered Logo & Description | Tablet/Desktop: Grid Layout */}
                <div className="flex flex-col items-center mb-12 text-center md:hidden">
                    <div className="mt-10 ">
                        <img src={logo} alt="Sterlin Chemicals Logo" className="object-contain w-auto mx-auto" />
                    </div>
                    <p className="max-w-md text-base leading-relaxed text-justify text-gray-200">
                        At Sterlin Chemicals, we believe that specialty chemistry requires more than just high-capacity manufacturing—it requires a commitment to precision and a partnership-driven approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 ">
                    {/* Tablet/Desktop: Logo & Description */}
                    <div className="hidden md:block lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={logo} alt="Sterlin Chemicals Logo" className="object-contain w-auto" />
                        </div>
                        <p className="mb-6 text-base text-left text-gray-200">
                            At Sterlin Chemicals, we believe that specialty chemistry requires more than just high-capacity manufacturing—it requires a commitment to precision and a partnership-driven approach.
                        </p>
                    </div>

                    {/* Responsive: Quick Links, Products */}
                    <div className="grid grid-cols-2 col-span-1 gap-8 md:contents">
                        <div className='text-left md:pl-0 lg:pl-10'>
                            <h4 className="mb-6 text-xl font-bold text-white lg:text-lg">Quick Links</h4>
                            <ul className="space-y-4 ">
                                {[
                                    { name: 'Home', path: '/' },
                                    { name: 'About', path: '/about' },
                                    { name: 'Manufacturing & Quality', path: '/manufacturing-quality' },
                                    { name: 'Contact', path: '/contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link to={item.path} className="text-base text-gray-200 transition-colors cursor-pointer hover:text-primary">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-left md:pl-0 lg:pl-2 ">
                            <h4 className="mb-6 text-xl font-bold text-white lg:text-lg">Products</h4>
                            <ul className="space-y-4">
                                <li><Link to="/products/calcium-nitrate" className="text-base text-gray-200 transition-colors cursor-pointer hover:text-primary">Calcium Nitrate</Link></li>
                                <li><Link to="/products/colloidal-silica" className="text-base text-gray-200 transition-colors cursor-pointer hover:text-primary">Colloidal Silica</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section: Left-aligned for tablet/desktop */}
                    <div className="flex flex-col text-left">
                        <h4 className="mb-6 text-xl font-bold text-white lg:text-lg">Contact Us</h4>
                        <ul className="flex flex-col items-start w-full space-y-4 text-base text-gray-200">
                            <li className="flex items-start w-full gap-2 mb-2">
                                <MapPin size={22} className="mt-1 text-primary shrink-0" />
                                <span>103 Opal Square, Alkapuri,Vadodara – 390007, Gujarat, India</span>
                            </li>
                            <li className="flex w-full gap-2 transition-colors hover:text-primary lg:justify-start">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+912212345678" className="cursor-pointer">+91 999 812 4960</a>
                            </li>
                            <li className="flex w-full gap-2 transition-colors hover:text-primary lg:justify-start">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:info@sterlingchemicals.com" className="cursor-pointer">info@sterlchem.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Full-width Divider Line */}
            <div className="relative border-gray-600 border-t-1">
                {/* Scroll to Top Button */}
                <div className="absolute flex flex-col items-center -translate-x-1/2 -top-6 left-1/2">
                    <button
                        onClick={scrollToTop}
                        className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white border rounded-full shadow-md cursor-pointer lg:w-12 lg:h-12 border-secondary-200 text-primary hover:shadow-lg hover:-translate-y-1 group"
                        aria-label="Scroll to top"
                    >
                        <ChevronUp className="w-5 h-5 transition-transform lg:w-6 lg:h-6 group-hover:scale-110" />
                    </button>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-4 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-400 text-[14px] gap-4">
                    <p className="flex flex-col sm:flex-row sm:gap-1">
                        <span>&copy; {new Date().getFullYear()} Sterlin Chemicals.All Rights Reserved.</span>
                    </p>
                    <div className="order-1 lg:order-3 flex flex-col items-center lg:flex-row lg:gap-1.5 lg:flex-1 lg:justify-end">
                        <span className="opacity-80">Developed by</span>
                        <a href="https://roshniparmarr.github.io/RPPortfolio/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white font-medium text-gray-300">Roshni</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
