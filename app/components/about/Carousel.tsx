'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {aboutImaged} from "@/app/components/aseets/AboutImages";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="block md:hidden p-6">
            <div className="text-center pb-16">
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

            <Slider {...settings}>
                {aboutImaged.map((image, index) => (
                    <div key={index} className="relative overflow-hidden">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-96 object-cover rounded-lg"
                            style={{ animationDelay: `${image.animationDelay}s` }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}