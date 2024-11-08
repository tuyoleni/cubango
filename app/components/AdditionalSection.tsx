import React from "react";

export default function AdditionalSection() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center px-8 mt-48 text-black" id="exports">
            <div className="relative z-10 text-center max-w-4xl bg-white py-20 px-8 shadow-md rounded-2xl bg-opacity-80">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-4 leading-tight">
                    Cubango Fresh Produce Exports
                </h1>
                <p className="mt-4 text-lg sm:text-xl leading-relaxed">
                    Cubango Fresh Produce exports high-quality agricultural products to countries across Africa and Europe. Our efficient logistics network ensures timely delivery of fresh produce to our international partners.
                </p>
            </div>
        </div>
    );
}