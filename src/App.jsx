import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Product1 from './pages/Product1'
import Product2 from './pages/Product2'
import About from './pages/About'
import Contact from './pages/Contact'
import CalciumNitrateApp from './pages/CalciumNitrateApp'
import ColloidalSilicaApp from './pages/ColloidalSilicaApp'
import ManufacturingQuality from './pages/ManufacturingQuality'

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/manufacturing-quality" element={<ManufacturingQuality />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products/calcium-nitrate" element={<Product1 />} />
                <Route path="/products/calcium-nitrate/applications" element={<CalciumNitrateApp />} />
                <Route path="/products/colloidal-silica" element={<Product2 />} />
                <Route path="/products/colloidal-silica/applications" element={<ColloidalSilicaApp />} />
            </Routes>
        </>
    )
}

export default App
