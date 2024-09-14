'use client';
import React from 'react';
import Carousel from './Carousel';
import GridLayout from './GridLayout';

export default function AboutSection() {
    return (
        <div className="relative w-full px-4 py-8 pt-36" id={'aboutSection'}>
            <Carousel />
            <GridLayout />
        </div>
    );
}