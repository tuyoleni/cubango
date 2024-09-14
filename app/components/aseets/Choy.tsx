import React from "react";
import {Image} from "@nextui-org/react";
import {choy} from "../../Assets"

export default function Choy({size}: { size: any }) {
    return (
        <Image
            width={size}
            alt="Cubango Logo"
            src={choy.src}
        />
    );
}
