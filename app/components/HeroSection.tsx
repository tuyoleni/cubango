'use client'
import React from "react";
import { Button } from "@nextui-org/react";
import VegetableBag from "@/app/components/aseets/VegitableBag";
import Choy from "@/app/components/aseets/Choy";
import Broccoli from "@/app/components/aseets/Broccoli";
import Tomato from "@/app/components/aseets/Tomato";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function HeroSection() {
    const { scrollY } = useScroll();

    const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const x1 = useTransform(smoothScrollY, [0, 300], [-50, -200]);
    const y1 = useTransform(smoothScrollY, [0, 300], [-50, -200]);


    const x2 = useTransform(smoothScrollY, [0, 300], [50, 200]);
    const y2 = useTransform(smoothScrollY, [0, 300], [-50, -200]);


    const x3 = useTransform(smoothScrollY, [0, 300], [-50, -200]);
    const y3 = useTransform(smoothScrollY, [0, 300], [50, 200]);

    const x4 = useTransform(smoothScrollY, [0, 300], [50, 200]);
    const y4 = useTransform(smoothScrollY, [0, 300], [50, 200]);

    const opacity = useTransform(smoothScrollY, [0, 300], [1, 0]);
    const scaling = useTransform(smoothScrollY, [0, 300], [1, 1.4]);


    return (
        <div className="relative w-full h-screen flex items-center justify-center text-black px-8 py-12 overflow-hidden" id="home">
            {/* Main Content */}
            <div className="relative flex flex-col items-center text-center max-w-2xl space-y-6 z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                    Welcome to <span className="text-yellow-500">Cubango</span> Fresh Produce
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                    Your gateway to the freshest agricultural products from Africa.
                </p>
                <a href="#products">
                    <Button color="warning" className="bg-orange-300">
                        Explore Our Products
                    </Button>
                </a>
                <div className="mt-10 relative">
                    {/* Parallax Background Divs */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
                        style={{x: x1, y: y1, opacity, scale: scaling}}
                    >
                        <div className="w-28 h-28 rounded-full">
                            <Choy size={100}/>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2"
                        style={{x: x2, y: y2, opacity, scale: scaling}}
                    >
                        <div className="w-28 h-28 rounded-full">
                            <Broccoli size={60}/>
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2"
                        style={{x: x3, y: y3, opacity}}
                    >
                        <div className="w-36 h-36 rounded-full">
                            <Tomato size={100}/>
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
                        style={{x: x4, y: y4, opacity, scale: scaling}}
                    >
                    </motion.div>
                    <VegetableBag size={600}/>
                </div>
            </div>
        </div>
    );
}