'use client';
import React from 'react';
import {aboutImaged} from "@/app/components/aseets/AboutImages";
import AnimatedImage from "@/app/components/about/AnimatedImage";

export default function GridLayout() {
    return (
        <div className="hidden h-[80vh] md:grid md:grid-cols-4 gap-3 max-w-7xl mx-auto">
            {/* Top-left image (spans 2 columns) */}
            <div className="col-span-2 relative overflow-hidden h-full">
                <AnimatedImage
                    src={aboutImaged[0].src}
                    alt={aboutImaged[0].alt}
                    animationDelay={aboutImaged[0].animationDelay}
                />
            </div>
            {/* Top-right image (spans 2 columns) */}
            <div className="col-span-2 relative overflow-hidden h-full">
                <AnimatedImage
                    src={aboutImaged[1].src}
                    alt={aboutImaged[1].alt}
                    animationDelay={aboutImaged[1].animationDelay}
                />
            </div>
            {/* Left-side image (spans 1 column) */}
            <div className="col-span-1 relative overflow-hidden h-full flex items-center justify-center">
                <AnimatedImage
                    src={aboutImaged[2].src}
                    alt={aboutImaged[2].alt}
                    animationDelay={aboutImaged[2].animationDelay}
                />
            </div>
            {/* Center text section (spans 2 columns) */}
            <div className="col-span-2 flex flex-col items-center justify-center p-6 text-center rounded-lg z-10 bg-white shadow-2xl">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">About Cubango Fresh Produce</h1>
                <p className="text-medium sm:text-base">
                    Cubango Fresh Produce is an African-based company specializing in the marketing and distribution
                    of fruits and vegetables from Africa. We source our products from professional and reputable
                    producers across various African countries, ensuring the highest quality and freshness. Our
                    mission is to become a trusted international exporter, bridging the gap between African produce
                    and global markets. We aim to expand our reach to both African and European markets, promoting
                    the rich diversity and exceptional quality of African agriculture.
                </p>
            </div>
            {/* Right-side image (spans 1 column, full height) */}
            <div className="col-span-1 row-span-2 relative overflow-hidden h-full flex items-center justify-center">
                <AnimatedImage
                    src={aboutImaged[3].src}
                    alt={aboutImaged[3].alt}
                    animationDelay={aboutImaged[3].animationDelay}
                />
            </div>
            {/* Bottom image (spans 3 columns) */}
            <div className="col-span-3 relative overflow-hidden h-full">
                <AnimatedImage
                    src={aboutImaged[4].src}
                    alt={aboutImaged[4].alt}
                    animationDelay={aboutImaged[4].animationDelay}
                />
            </div>
        </div>
    );
}