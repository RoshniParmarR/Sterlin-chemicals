import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Customization from '../components/Customization'
import TwoPillars from '../components/TwoPillars'
import GlobalFulfilment from '../components/GlobalFulfilment'
import CustomerLogos from '../components/CustomerLogos'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const Home = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <div className="min-h-screen font-sans bg-secondary-50 text-secondary-900 selection:bg-primary selection:text-white">
            <div id="home">
                <Navbar />
                <Hero />
            </div>
            <Stats />
            <Customization />
            <div id="products">
                <TwoPillars />
            </div>
            <GlobalFulfilment />
            <CustomerLogos />
            <div id="contact">
                <CTASection />
            </div>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home
