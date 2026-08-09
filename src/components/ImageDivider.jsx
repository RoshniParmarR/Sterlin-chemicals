import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dividerImage from '../assets/istockphoto-637140248-612x612.jpg';

const ImageDivider = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.8", "end 0.2"]
    });

    // Concentrated parallax: The movement now happens primarily when the section is in the center of the screen
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={ref} className="relative h-[200px] md:h-[320px] w-full overflow-hidden">
            <motion.div
                className="absolute inset-0 w-full h-[160%] -top-[30%]"
                style={{
                    y,
                    backgroundImage: `url(${dividerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                {/* Visual is kept pure and clear - restored local asset to fix "blank" loading issues */}
                <div className="absolute inset-0 bg-primary-600/40"></div>
            </motion.div>
        </section>
    );
};

export default ImageDivider;
