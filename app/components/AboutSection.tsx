import React from 'react';
import {Image} from "@nextui-org/react";

export default function AboutSection() {
    return (
        <div className="relative w-full px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 max-w-7xl mx-auto">
                {/* Top-left image (spans 2 columns) */}
                <div className="col-span-2 relative overflow-hidden">
                    <Image
                        src="https://images.ctfassets.net/grb5fvwhwnyo/5BxDJOBOYKyH2SFKOmAcgW/9b17f391def1e022f3d4b2099bf2c3a5/card-why-you-need-a-specialized-fresh-produce-erp.jpg"
                        alt="Fresh produce"
                        isZoomed
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                {/* Top-right image (spans 2 columns) */}
                <div className="col-span-2 relative overflow-hidden">
                    <Image
                        src="https://www.cimmyt.org/content/uploads/2020/04/Farmer-field-schools-0.jpg"
                        alt="Farmer in field"
                        isZoomed
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div
                    className="col-span-1 relative overflow-hidden w-full h-full flex items-center justify-center">
                    <Image
                        src="https://images.squarespace-cdn.com/content/v1/5811566d20099e23814644fd/21af2929-817e-45ea-a92b-3aaa12a978d7/Dammanns+Garden+Company+-+When+to+Harvest+Garden+Crops-vegetable+harvest.jpg"
                        alt="Vegetable harvest"
                        isZoomed
                        height={300}
                        className="rounded-lg"
                    />
                </div>
                {/* Center text section (spans 2 columns) */}
                <div
                    className="col-span-2 flex flex-col items-center justify-center p-6 text-center  rounded-lg  z-10 ">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">About Cubango Fresh Produce</h1>
                    <p className="text-sm sm:text-base">
                        Cubango Fresh Produce is an African-based company specializing in the marketing and distribution
                        of fruits and vegetables from Africa. We source our products from professional and reputable
                        producers across various African countries, ensuring the highest quality and freshness. Our
                        mission is to become a trusted international exporter, bridging the gap between African produce
                        and global markets. We aim to expand our reach to both African and European markets, promoting
                        the rich diversity and exceptional quality of African agriculture.
                    </p>
                </div>
                {/* Right image */}
                <div className="col-span-1 row-span-2 relative overflow-hidden">
                    <Image
                        src="https://www.devonfresh.com/wp-content/uploads/2022/12/Fresh-Fruit-Selection.jpg"
                        alt="Fruit selection"
                        isZoomed
                        height={613}
                    />
                </div>
                {/* Bottom image (spans full width) */}
                <div className="col-span-3 relative overflow-hidden">
                    <Image
                        src="https://africa-on-air.com/wp-content/uploads/2023/03/CMR-CLUB-LE-POTAGER-1-768x440.jpg"
                        alt="Export shipping"
                        isZoomed
                        height={300}
                        width={1000}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
}