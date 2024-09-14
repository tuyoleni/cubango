import React from "react";
import {Image} from "@nextui-org/react";
import {broccoli} from "../../Assets"

export default function Broccoli({size}: { size: any }) {
    return (
        <Image
            width={size}
            alt="Cubango Logo"
            src={broccoli.src}
        />
    );
}
