import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface AnimatedImageProps {
    src: string;
    alt: string;
    animationDelay: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ src, alt, animationDelay }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.img
            src={src}
            alt={alt}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: animationDelay }}
            className="w-full h-full object-cover rounded-lg"
        />
    );
};

export default AnimatedImage;