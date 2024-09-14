import React from "react";
import {FruitsAndVeggies} from "../../Assets";

export default function FruitsAndVeggiesBackground() {
    return (
        <div
            className="absolute inset-0 bg-cover bg-center m-6 rounded-lg shadow-lg overflow-hidden"
            style={{backgroundImage: `url(${FruitsAndVeggies.src})`}}
        />
    );
}