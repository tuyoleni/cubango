import React from "react";
import {Image} from "@nextui-org/react";
import {tomato} from "../../Assets"

export default function CubangoLogo({size}: { size: any }) {
    return (
        <Image
            width={size}
            alt="Cubango Logo"
            src={tomato.src}
        />
    );
}
