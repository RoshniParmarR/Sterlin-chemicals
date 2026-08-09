import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LogoCircularGallery from './LogoCircularGallery';
import logo1 from '../assets/customer logo/calderys.png';
import logo2 from '../assets/customer logo/dutchplantin.png';
import logo3 from '../assets/customer logo/haber.png';
import logo4 from '../assets/customer logo/galvanotech.png';
import logo5 from '../assets/customer logo/ivax.png';
import logo6 from '../assets/customer logo/kanam.png';
import logo7 from '../assets/customer logo/Nulife.png';
import logo8 from '../assets/customer logo/nlmk.png';
import logo9 from '../assets/customer logo/obasf.png';
import logo10 from '../assets/customer logo/redox.png';
import logo12 from '../assets/customer logo/saintgobain.png';
import logo13 from '../assets/customer logo/slb.png';
import logo14 from '../assets/customer logo/Try.png';
import logo15 from '../assets/customer logo/Trychem.png';
import logo16 from '../assets/customer logo/solenis.png';
import logo17 from '../assets/customer logo/luxchem.png';
import logo18 from '../assets/customer logo/sivanthi.png';
import logo19 from '../assets/customer logo/buckman.png';
import logo11 from '../assets/customer logo/halliburton-logo.svg';

const CustomerLogos = () => {
    const galleryRef = useRef(null);
    const logos = [
        { id: 1, src: logo1, alt: 'Client 1' },
        { id: 2, src: logo2, alt: 'Client 2' },
        { id: 3, src: logo11, alt: 'Client 11' },
        { id: 4, src: logo3, alt: 'Client 3' },
        { id: 5, src: logo4, alt: 'Client 4' },
        { id: 6, src: logo5, alt: 'Client 5' },
        { id: 7, src: logo6, alt: 'Client 6' },
        { id: 8, src: logo7, alt: 'Client 7' },
        { id: 9, src: logo8, alt: 'Client 8' },
        { id: 10, src: logo9, alt: 'Client 9' },
        { id: 11, src: logo10, alt: 'Client 10' },
        { id: 12, src: logo12, alt: 'Client 12' },
        { id: 13, src: logo13, alt: 'Client 13' },
        { id: 14, src: logo14, alt: 'Client 14' },
        { id: 15, src: logo15, alt: 'Client 15' },
        { id: 16, src: logo16, alt: 'Client 16' },
        { id: 17, src: logo17, alt: 'Client 17' },
        { id: 18, src: logo18, alt: 'Client 18' },
        { id: 19, src: logo19, alt: 'Client 19' },
    ];

    // border-top: 2px solid #00a2be;
    // border-bottom: 2px solid #00a2be;

    return (
        <section className="relative py-20 overflow-hidden bg-gray-100 ">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                {/* Section Header */}
                <div className="flex flex-col items-center ">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mx-auto mb-8 bg-white border rounded-full shadow-md border-primary/20 text-primary">
                        <span className="text-[14px] tracking-wider uppercase font-semibold">Trusted Clients</span>
                    </div>
                    <h2 className="text-[30px] lg:text-[48px] font-medium text-secondary-900 leading-[1.1] mb-6 text-center">
                        Our <span className="text-transparent bg-clip-text bg-primary">Clients</span>
                    </h2>
                    <p className="text-secondary-600 text-[18px]  max-w-3xl mx-auto leading-relaxed text-center">
                        We take pride in our long-standing relationships with industry leaders who trust sterlin chemicals for consistent quality, technical expertise, and reliable supply chains across the globe.
                    </p>
                </div>

                {/* Circular Gallery Container - Constrained Width */}
                <div className="relative w-full h-62.5 md:h-75 flex items-center justify-center overflow-hidden">
                    {/* Optional Side Masks to soften the edges where it "starts and ends" */}
                    <div className="absolute inset-y-0 left-0 z-10 w-40 pointer-events-none bg-linear-to-r from-gray-100 to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 z-10 w-40 pointer-events-none bg-linear-to-l from-gray-100 to-transparent"></div>

                    <LogoCircularGallery
                        ref={galleryRef}
                        items={logos}
                        bend={0}
                        borderRadius={0}
                        autoSpeed={0.05}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-4 pb-8">
                    <button
                        onClick={() => galleryRef.current?.prev()}
                        className="p-3 transition-all duration-300 bg-white border rounded-full border-secondary-200 text-secondary-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg group"
                        aria-label="Previous logos"
                    >
                        <ChevronLeft className="w-6 h-6 " />
                    </button>
                    <button
                        onClick={() => galleryRef.current?.next()}
                        className="p-3 transition-all duration-300 bg-white border rounded-full border-secondary-200 text-secondary-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg group"
                    >
                        <ChevronRight className="w-6 h-6 " />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerLogos;
