import React from "react";
import {Image} from "@nextui-org/react";
import {logo} from "../../Assets"

export default function CubangoLogo() {
    return (
        <Image
            width={60}
            alt="Cubango Logo"
            src={logo.src}
        />
    );
}
