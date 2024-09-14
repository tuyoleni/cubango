import React from "react";
import {Image} from "@nextui-org/react";
import {heroImage} from "../../Assets"

export default function VegitableBag({size}: { size: any }) {
    return (
        <Image
            width={size}
            alt="Cubango Logo"
            src={heroImage.src}
        />
    );
}
